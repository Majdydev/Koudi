import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaPython } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-white/20 p-4 rounded-full">
              <FaPython className="h-12 w-12 text-yellow-300" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white">
            Commence Ton Aventure Python Aujourd&apos;hui !
          </h2>

          {/* Description */}
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Rejoins des milliers d&apos;enfants qui apprennent déjà à coder avec
            Koudi
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-purple-600 font-semibold rounded-lg transition-colors shadow-lg group"
            >
              Créer Mon Compte Gratuit
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-6 border-t border-purple-400/30">
            <p className="text-purple-100 text-sm">
              ✨ Gratuit pendant 30 jours • 🚀 Aucune carte requise • 🛡️
              Garantie satisfait ou remboursé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
