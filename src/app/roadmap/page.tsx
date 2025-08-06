import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Code,
  Database,
  Brain,
  Trophy,
  CheckCircle,
  Star,
  Lightbulb,
  Cpu,
  Globe,
} from "lucide-react";

const Roadmap = () => {
  const levels = [
    {
      level: 1,
      title: "C'est quoi coder ?",
      description:
        "Introduction à l'informatique, la logique, et les premières lignes de code",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-green-500",
      topics: [
        "Qu'est-ce qu'un ordinateur ?",
        "Premiers scripts Python : print()",
        "Environnement visuel ludique",
      ],
    },
    {
      level: 2,
      title: "Les bases de Python",
      description:
        "Comprendre les types de données simples et la logique de base",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-500",
      topics: [
        "Types : int, float, str, bool",
        "Variables, conditions (if, else)",
        "Boucles (for, while), fonctions simples",
      ],
    },
    {
      level: 3,
      title: "Structures de données complexes",
      description:
        "Apprendre à manipuler des structures de données plus puissantes",
      icon: <Database className="h-6 w-6" />,
      color: "bg-purple-500",
      topics: [
        "Listes, tuples, ensembles",
        "Dictionnaires, files (queues)",
        "Projets : gestion d'inventaire, quiz",
      ],
    },
    {
      level: 4,
      title: "Résolution de problèmes avancés",
      description: "Développer des compétences de résolution algorithmique",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-orange-500",
      topics: [
        "Tri, recherche, analyse de complexité",
        "Débogage, pseudo-code",
        "Algorithmes classiques",
      ],
    },
    {
      level: 5,
      title: "Programmation orientée objet (POO)",
      description: "Comprendre la pensée objet et modéliser des programmes",
      icon: <Star className="h-6 w-6" />,
      color: "bg-pink-500",
      topics: [
        "Classes, objets, méthodes",
        "Encapsulation, héritage, polymorphisme",
        "Projet : jeu orienté objet",
      ],
    },
    {
      level: 6,
      title: "Design logiciel avec SOLID",
      description: "Écrire du code modulaire, propre et maintenable",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-indigo-500",
      topics: [
        "Principes SOLID",
        "Design patterns (Factory, Singleton...)",
        "Revue de code, bonnes pratiques",
      ],
    },
    // {
    //   level: 7,
    //   title: "Créer une application web",
    //   description: "Développer une application web de A à Z",
    //   icon: <Globe className="h-6 w-6" />,
    //   color: "bg-cyan-500",
    //   topics: [
    //     "HTML / CSS / JavaScript",
    //     "Python + Flask / Django",
    //     "Frontend + Backend + base de données",
    //   ],
    // },
    // {
    //   level: 8,
    //   title: "Introduction à l'IA et ML",
    //   description: "Comprendre les bases de l'intelligence artificielle",
    //   icon: <Brain className="h-6 w-6" />,
    //   color: "bg-emerald-500",
    //   topics: [
    //     "Numpy, Pandas, Scikit-learn",
    //     "Régression, classification",
    //     "Projets : prédiction, traitement de données",
    //   ],
    // },
    // {
    //   level: 9,
    //   title: "Intelligence Artificielle Générative",
    //   description: "Découvrir les modèles génératifs (GPT, diffusion, etc.)",
    //   icon: <Brain className="h-6 w-6" />,
    //   color: "bg-violet-500",
    //   topics: [
    //     "Traitement du langage naturel (NLP)",
    //     "Text-to-text, text-to-image",
    //     "Éthique et limites de l'IA générative",
    //   ],
    // },
    {
      level: 7,
      title: "Récapitulatif & Certification",
      description: "Consolider les acquis, pratiquer, et valider le parcours",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-yellow-500",
      topics: [
        "Mini-projets intégrateurs",
        "Préparation à un test final",
        "Portfolio + Entretien technique simulé",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Link>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Roadmap d&apos;Apprentissage Python
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Parcours complet de débutant à ingénieur logiciel
            </p>
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 mr-2" />
              Âge recommandé pour commencer : 9 ans
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {levels.map((level, index) => (
            <div key={level.level} className="relative">
              {/* Connecting line */}
              {index < levels.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300 dark:bg-gray-600"></div>
              )}

              {/* Level card */}
              <div className="flex items-start space-x-4">
                {/* Level number with icon */}
                <div
                  className={`${level.color} text-white p-3 rounded-full flex-shrink-0 shadow-lg`}
                >
                  {level.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Niveau {level.level} : {level.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      Niveau {level.level}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {level.description}
                  </p>

                  <div className="space-y-2">
                    {level.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final certification */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 border-2 border-yellow-200 dark:border-yellow-700">
            <Trophy className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              🎓 Diplôme Final
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Certificat d&apos;Ingénieur Logiciel Junior
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Commencer Mon Parcours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
