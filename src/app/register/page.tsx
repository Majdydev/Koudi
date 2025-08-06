"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Connexion:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("Inscription:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center p-4 pt-20">
      <div className="max-w-md w-full">
        {/* Bouton de retour */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l&apos;accueil
        </Link>

        {/* Carte principale */}
        <div className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
          {/* En-tête avec onglets */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-blue-900/20 p-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Rejoignez Koudi
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {isLogin
                  ? "Connectez-vous à votre compte"
                  : "Créez votre compte gratuit"}
              </p>
            </div>

            {/* Onglets */}
            <div className="flex bg-white/70 dark:bg-gray-600/70 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  isLogin
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-500/50"
                }`}
              >
                Connexion
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  !isLogin
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-500/50"
                }`}
              >
                Inscription
              </button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom (seulement pour l'inscription) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nom complet
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                      placeholder="Votre nom complet"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Adresse email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                    placeholder="Votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmer le mot de passe (seulement pour l'inscription) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                      placeholder="Confirmez votre mot de passe"
                      required={!isLogin}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Mot de passe oublié (seulement pour la connexion) */}
              {isLogin && (
                <div className="text-right">
                  <Link
                    href="#"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              )}

              {/* Bouton de soumission */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                {isLogin ? "Se connecter" : "Créer mon compte"}
              </button>

              {/* Conditions d'utilisation (seulement pour l'inscription) */}
              {!isLogin && (
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  En créant un compte, vous acceptez nos{" "}
                  <Link
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    conditions d&apos;utilisation
                  </Link>{" "}
                  et notre{" "}
                  <Link
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Pied de page */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Une question ? Contactez notre{" "}
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support client
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
