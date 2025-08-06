import React from "react";
import Link from "next/link";
import { BookOpen, Users, Trophy, Shield } from "lucide-react";

const Why = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi Choisir{" "}
            <span className="text-blue-600 dark:text-blue-400">Koudi</span> ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Plus complet qu&apos;un baccalauréat • 100% remboursé si pas
            satisfait
          </p>
        </div>

        {/* Simple Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Plus qu&apos;un Baccalauréat
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Formation complète avec projets réels et compétences demandées par
              les entreprises
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Shield className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Garantie 100% Remboursé
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pas satisfait après 30 jours ? On te rembourse intégralement, sans
              questions
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Trophy className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Prêt pour l&apos;Emploi
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Portfolio de projets concrets et certificat reconnu par
              l&apos;industrie
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Users className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Support 24/7
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mentors disponibles pour t&apos;aider à chaque étape de ton
              apprentissage
            </p>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm border-2 border-green-200 dark:border-green-700">
            <div className="mb-4">
              <Shield className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛡️ Garantie Satisfait ou Remboursé
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Oublie le baccalauréat ! Koudi t&apos;enseigne plus que ce que
              demandent les entreprises.
              <br />
              <strong>Pas convaincu ? 100% remboursé dans les 30 jours.</strong>
            </p>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Essayer Sans Risque
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              ✅ Formation complète • ✅ Projets réels • ✅ Remboursement
              garanti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
