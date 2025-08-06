import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { error: "Code is required and must be a string" },
        { status: 400 }
      );
    }

    // Create a temporary directory for Python files if it doesn't exist
    const tempDir = path.join(process.cwd(), "temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Generate a simple unique filename for this execution
    const timestamp = Date.now();
    const randomId = Math.floor(Math.random() * 10000);
    const filename = `script_${timestamp}_${randomId}.py`;
    const scriptPath = path.join(tempDir, filename);

    try {
      // Write the Python code to a temporary file
      fs.writeFileSync(scriptPath, code, "utf8");

      // Execute the Python script with a timeout, using quotes to handle paths with spaces
      // Set PYTHONIOENCODING to handle Unicode characters properly on Windows
      const { stdout, stderr } = await execAsync(`py "${scriptPath}"`, {
        timeout: 10000, // 10 seconds timeout
        maxBuffer: 1024 * 1024, // 1MB max buffer
        env: {
          ...process.env,
          PYTHONIOENCODING: "utf-8",
          PYTHONLEGACYWINDOWSSTDIO: "0",
        },
      });

      // Clean up the temporary file
      fs.unlinkSync(scriptPath);

      if (stderr) {
        return NextResponse.json({ error: stderr.trim() }, { status: 400 });
      }

      return NextResponse.json({
        output: stdout.trim() || "Code executed successfully (no output)",
        success: true,
      });
    } catch (error: unknown) {
      // Clean up the temporary file in case of error
      if (fs.existsSync(scriptPath)) {
        fs.unlinkSync(scriptPath);
      }

      // Handle execution errors
      const execError = error as {
        killed?: boolean;
        signal?: string;
        stderr?: string;
        message?: string;
      };

      if (execError.killed && execError.signal === "SIGTERM") {
        return NextResponse.json(
          { error: "Code execution timed out (10 seconds limit)" },
          { status: 408 }
        );
      }

      if (execError.stderr) {
        return NextResponse.json(
          { error: execError.stderr.trim() },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: execError.message || "Failed to execute Python code" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}

// Optional: Add a GET method for health check
export async function GET() {
  try {
    // Check if Python is available
    await execAsync("py --version");
    return NextResponse.json({
      status: "Python API is ready",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Python is not installed or not available in PATH" },
      { status: 503 }
    );
  }
}
