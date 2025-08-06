import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPython, FaRobot } from "react-icons/fa";
import { IoGameController, IoPhonePortrait } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import {
  Code,
  Play,
  Users,
  Trophy,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Star,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 pt-16">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Arabic text background */}
        <div
          className="absolute rotate-10 top-32 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl lg:text-6xl font-bold opacity-10 text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent select-none pointer-events-none text-center whitespace-nowrap"
          style={{ direction: "rtl", fontFamily: "Arial, sans-serif" }}
        >
          الـ Bac و الـ Fac <div>في الجيب</div>
        </div>

        <div className="absolute top-20 left-10 text-6xl opacity-20">
          <FaPython className="text-blue-500" />
        </div>
        <div className="absolute top-40 right-20 text-4xl opacity-20">💻</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20">🚀</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20">
          ⭐
        </div>
        <div className="absolute top-60 left-1/3 text-5xl opacity-15">
          <FaPython className="text-yellow-500" />
        </div>
        <div className="absolute bottom-60 right-1/3 text-4xl opacity-15">
          <FaPython className="text-blue-600" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>Parfait pour les Débutants !</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Apprends
                <span className="flex items-center text-blue-600 dark:text-blue-400">
                  Python
                  <Image
                    src="/python-logo.png"
                    alt="Python Logo"
                    width={48}
                    height={48}
                    className="ml-4 bg-white rounded-lg p-1 shadow-sm"
                  />
                </span>
                <span className="block text-purple-600 dark:text-purple-400">
                  avec Koudi !
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Commence ton voyage dans la programmation avec Python ! Passe de
                zéro connaissance en programmation à devenir un ingénieur
                informatique. C&apos;est amusant, facile et parfait pour prendre
                ta place sur le marché !
              </p>
            </div>

            {/* Learning Path */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                Ton Parcours d&apos;Apprentissage :
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    1
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Commence avec zéro connaissance en programmation
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    2
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Apprends les bases de Python avec des jeux amusants
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    3
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Construis des projets et applications géniaux
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    4
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Deviens un ingénieur informatique et prends ta place sur le
                    marché ! 🎓
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg group"
              >
                <Play className="h-5 w-5 mr-2" />
                Commencer à Apprendre !
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold rounded-lg transition-colors"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Plan du cours
              </Link>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  500+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Leçons Amusantes 📖
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  10K+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Enfants Heureux 😊
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  100+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Projets Géniaux 🎮
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Code Example */}
          <div className="relative">
            <div className="bg-gray-900 dark:bg-black rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">
                    ma_premiere_question.py 🤔
                  </span>
                </div>
                <Code className="h-5 w-5 text-blue-400" />
              </div>

              {/* Simple Code Example */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-gray-500">
                    # Ma première question Python ! 🤔
                  </div>
                  <div className="text-gray-300"></div>
                  <div className="text-blue-400">
                    a = <span className="text-green-400">2</span>
                  </div>
                  <div className="text-blue-400">
                    b = <span className="text-green-400">3</span>
                  </div>
                  <div className="text-blue-400">resultat = a + b</div>
                  <div className="text-gray-300"></div>
                  <div className="text-yellow-400">
                    nom = <span className="text-red-400">input</span>(
                    <span className="text-green-400">
                      &quot;Comment tu t&apos;appelles ? &quot;
                    </span>
                    )
                  </div>
                  <div className="text-gray-300"></div>
                  <div className="text-blue-400">
                    <span className="text-yellow-400">print</span>(
                    <span className="text-green-400">&quot;Bonjour&quot;</span>,
                    nom,
                    <span className="text-green-400">&quot;! 👋&quot;</span>)
                  </div>
                  <div className="text-blue-400">
                    <span className="text-yellow-400">print</span>(
                    <span className="text-green-400">&quot;2 + 3 =&quot;</span>,
                    resultat)
                  </div>
                  <div className="text-blue-400">
                    <span className="text-yellow-400">print</span>(
                    <span className="text-green-400">
                      &quot;Bienvenue sur Koudi ! 🎉&quot;
                    </span>
                    )
                  </div>
                </div>
              </div>

              {/* Fun Status Bar */}
              <div className="px-4 py-2 bg-green-900/50 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>
                    Super ! Tu viens d&apos;écrire ton premier code Python ! �✨
                  </span>
                </div>
              </div>
            </div>

            {/* Fun Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* What Kids Will Learn */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Ce que tu apprendras à construire :
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 text-purple-600 dark:text-purple-400">
                <IoGameController className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Jeux
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 text-blue-600 dark:text-blue-400">
                <FaRobot className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Robots
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 text-green-600 dark:text-green-400">
                <TbWorldWww className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sites Web
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2 text-orange-600 dark:text-orange-400">
                <IoPhonePortrait className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
