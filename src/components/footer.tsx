import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-white dark:text-gray-100">
                Koudi
              </h3>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Apprends Python de manière simple et amusante.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-gray-100">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-sm hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  Cours
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-gray-100">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:support@koudi.com"
                className="text-sm hover:text-white dark:hover:text-gray-200 transition-colors block"
              >
                support@koudi.com
              </a>
              <div className="flex space-x-3 pt-2">
                <Link
                  href="https://github.com"
                  className="text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:support@koudi.com"
                  className="text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 dark:border-gray-700 text-center">
          <div className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Koudi. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
