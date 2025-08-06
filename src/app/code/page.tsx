"use client";
import CodeEditor from "./components/codeEditor";
import Link from "next/link";
import { useState } from "react";
import {
  FaPython,
  FaCheckCircle,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import {
  IoArrowBack,
  IoBookOutline,
  IoCodeSlash,
  IoTrophy,
} from "react-icons/io5";
import { MdPlayArrow, MdRefresh, MdCheck } from "react-icons/md";

function Code() {
  const [currentCode, setCurrentCode] = useState(
    "# Écris ton code Python ici !\nprint('Bonjour, je suis en train d\\'apprendre Python avec Koudi! 🎉')"
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (code: string) => {
    setCurrentCode(code);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      const response = await fetch("/api/v1/python", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: currentCode }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.output);
      } else {
        setOutput(`Erreur: ${data.error}`);
      }
    } catch (error) {
      setOutput(
        `Erreur de connexion: ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`
      );
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCurrentCode(
      "# Écris ton code Python ici !\nprint('Bonjour, je suis en train d\\'apprendre Python avec Koudi! 🎉')"
    );
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 transition-colors"
          >
            <IoArrowBack className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-4">
              <FaPython className="text-4xl text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Espace de Codage Python
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Apprends Python en pratiquant avec des exercices amusants !
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section - Exercises */}
          <div className="space-y-6">
            {/* Exercise Card */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <IoBookOutline className="text-2xl text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Exercice 1: Premier Message
                </h2>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <FaCheckCircle className="w-3 h-3 mr-1" />
                    Débutant
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <FaLightbulb className="text-yellow-500 mr-2" />
                    Objectif
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Affiche un message de bienvenue personnalisé en utilisant la
                    fonction{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                      print()
                    </code>
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Instructions :
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        Utilise la fonction{" "}
                        <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                          print()
                        </code>{" "}
                        pour afficher un message
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        Personnalise le message avec ton nom
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        Ajoute des emojis pour rendre ton message plus amusant !
                        🎉
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    💡 Exemple :
                  </h3>
                  <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    print(&quot;Bonjour, je m&apos;appelle Ahmed ! 👋&quot;)
                  </code>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <IoTrophy className="text-2xl text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ton Progrès
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Exercices Python
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    1/20
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <MdCheck className="text-green-500" />
                  <span>Continue comme ça ! Tu es sur la bonne voie 🌟</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Code Editor */}
          <div className="space-y-6">
            {/* Code Editor Card */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <IoCodeSlash className="text-2xl text-blue-600 dark:text-blue-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Éditeur Python
                  </h2>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={resetCode}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <MdRefresh className="w-4 h-4 mr-1" />
                    Reset
                  </button>

                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-md transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRunning ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Exécution...
                      </>
                    ) : (
                      <>
                        <MdPlayArrow className="w-4 h-4 mr-1" />
                        Exécuter
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                <CodeEditor
                  initialValue={currentCode}
                  height="300px"
                  onCodeChange={handleCodeChange}
                />
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sortie du Programme
                </h3>
              </div>

              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 min-h-[100px] font-mono text-sm">
                {output ? (
                  <div
                    className={
                      output.startsWith("Erreur")
                        ? "text-red-400"
                        : "text-green-400"
                    }
                  >
                    <div className="text-gray-400 mb-1">
                      &gt;&gt;&gt; Exécution du code...
                    </div>
                    <div className="whitespace-pre-wrap">{output}</div>
                    {!output.startsWith("Erreur") && (
                      <div className="text-gray-400 mt-2">
                        ✨ Programme exécuté avec succès !
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-500 italic">
                    Clique sur &quot;Exécuter&quot; pour voir le résultat de ton
                    code...
                  </div>
                )}
              </div>
            </div>

            {/* Next Exercise Button */}
            <div className="text-center">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Exercice Suivant
                <FaArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
