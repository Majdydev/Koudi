"use client";
import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

interface CodeEditorProps {
  initialValue?: string;
  height?: string;
  onCodeChange?: (code: string) => void;
}

function CodeEditor({
  initialValue = "print('hello world!')",
  height = "200px",
  onCodeChange,
}: CodeEditorProps) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (val: string) => {
      console.log("val:", val);
      setValue(val);
      onCodeChange?.(val);
    },
    [onCodeChange]
  );

  return (
    <CodeMirror
      value={value}
      height={height}
      extensions={[python()]}
      theme={okaidia}
      onChange={onChange}
    />
  );
}

export default CodeEditor;
