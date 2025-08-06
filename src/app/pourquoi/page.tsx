import React from "react";
import Link from "next/link";
import {
  FaPython,
  FaRocket,
  FaGraduationCap,
  FaLanguage,
  FaLightbulb,
  FaBrain,
  FaProjectDiagram,
  FaChalkboardTeacher,
} from "react-icons/fa";
import {
  IoGameController,
  IoTrophy,
  IoHeart,
  IoArrowBack,
} from "react-icons/io5";
import { MdSecurity, MdStars, MdChildCare, MdTrendingUp } from "react-icons/md";

const PourquoiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 text-6xl opacity-10">
          <FaRocket className="text-blue-500" />
        </div>
        <div className="absolute bottom-40 right-20 text-5xl opacity-10">
          <FaPython className="text-yellow-500" />
        </div>
        <div className="absolute top-60 right-10 text-4xl opacity-10">
          <IoGameController className="text-purple-500" />
        </div>

        {/* Arabic background text */}
        <div
          className="absolute rotate-12 top-32 right-1/4 text-xl md:text-2xl font-bold opacity-5 text-green-600 dark:text-green-400 select-none pointer-events-none font-arabic"
          style={{ direction: "rtl" }}
        >
          فلوسك ترجعلك
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <IoArrowBack className="h-4 w-4 mr-2" />
          Retour à l&apos;accueil
        </Link>

        {/* Main Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <FaRocket className="text-5xl text-blue-600 dark:text-blue-400" />
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-arabic"
              style={{ direction: "rtl" }}
            >
              علاش تختار منصّتنا لولدك؟
            </h1>
          </div>

          <div
            className="flex items-center justify-center space-x-2 text-3xl font-semibold text-purple-600 dark:text-purple-400 font-arabic"
            style={{ direction: "rtl" }}
          >
            <IoTrophy className="text-3xl" />
            <span>على خاطر...</span>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Feature Cards */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-blue-600 dark:text-blue-400 mt-1">
                <MdChildCare />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  عندنا محتوى مدروس وممنهج، مشي خطوة بخطوة، مصمّم خصّيصًا للصغار
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-green-600 dark:text-green-400 mt-1">
                <IoGameController />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  ولدك ينجم يتعلم البرمجة من عمر 10 سنين، بطريقة مبسّطة، ممتعة،
                  وتفاعلية
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-purple-600 dark:text-purple-400 mt-1">
                <FaLanguage />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  يتعلّم الإنجليزية زادة معانا، خاطر كل شي مربوط بالكود والـ
                  keywords
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-orange-600 dark:text-orange-400 mt-1">
                <MdStars />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  نخدمو بمستوى عالمي، نفس الجودة اللي تلقاها في أرقى المنصّات
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-indigo-600 dark:text-indigo-400 mt-1">
                <FaBrain />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  باش نخرّجو جيل جديد من المبرمجين الصغار، اللي يفكّر، يخطّط،
                  ويطوّر
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div
              className="flex items-start space-x-4"
              style={{ direction: "rtl" }}
            >
              <div className="text-3xl text-red-600 dark:text-red-400 mt-1">
                <FaGraduationCap />
              </div>
              <div>
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-arabic"
                  style={{ direction: "rtl" }}
                >
                  هدفنا؟ صغيرك يولي مهندس برمجيات قبل ما يوصل للباك!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Section */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-8 mb-12 border border-blue-200 dark:border-blue-700">
          <div
            className="flex items-center space-x-3 mb-4"
            style={{ direction: "rtl" }}
          >
            <FaChalkboardTeacher className="text-3xl text-blue-600 dark:text-blue-400" />
            <p
              className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-justify font-arabic"
              style={{ direction: "rtl" }}
            >
              وما يتعلمش بركة... ينجم يعلّم غيرو!
            </p>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-8 mb-12 border border-green-200 dark:border-green-700">
          <div
            className="flex items-center space-x-3 mb-2"
            style={{ direction: "rtl" }}
          >
            <MdSecurity className="text-3xl text-green-600 dark:text-green-400" />
            <h3
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 font-arabic"
              style={{ direction: "rtl" }}
            >
              💸 ومانساوش:
            </h3>
          </div>
          <p
            className="text-xl text-gray-700 dark:text-gray-300 font-semibold text-justify font-arabic"
            style={{ direction: "rtl" }}
          >
            عندك الحق ترجّع فلوسك إذا ما كنتش راضي!
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <div
            className="flex items-center space-x-3 mb-6"
            style={{ direction: "rtl" }}
          >
            <FaGraduationCap className="text-3xl text-purple-600 dark:text-purple-400" />
            <h3
              className="text-3xl font-bold text-gray-800 dark:text-gray-200 font-arabic"
              style={{ direction: "rtl" }}
            >
              🎓 معناها، ولدك باش يتعلّم:
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div
              className="flex items-center space-x-3"
              style={{ direction: "rtl" }}
            >
              <FaPython className="text-2xl text-blue-600 dark:text-blue-400" />
              <span
                className="text-lg text-gray-700 dark:text-gray-300 font-arabic"
                style={{ direction: "rtl" }}
              >
                البرمجة بلغة عالمية (Python)
              </span>
            </div>

            <div
              className="flex items-center space-x-3"
              style={{ direction: "rtl" }}
            >
              <FaLightbulb className="text-2xl text-yellow-600 dark:text-yellow-400" />
              <span
                className="text-lg text-gray-700 dark:text-gray-300 font-arabic"
                style={{ direction: "rtl" }}
              >
                التفكير المنطقي وحلّ المشاكل
              </span>
            </div>

            <div
              className="flex items-center space-x-3"
              style={{ direction: "rtl" }}
            >
              <FaLanguage className="text-2xl text-green-600 dark:text-green-400" />
              <span
                className="text-lg text-gray-700 dark:text-gray-300 font-arabic"
                style={{ direction: "rtl" }}
              >
                اللغة الإنجليزية التقنية
              </span>
            </div>

            <div
              className="flex items-center space-x-3"
              style={{ direction: "rtl" }}
            >
              <FaProjectDiagram className="text-2xl text-purple-600 dark:text-purple-400" />
              <span
                className="text-lg text-gray-700 dark:text-gray-300 font-arabic"
                style={{ direction: "rtl" }}
              >
                العمل على مشاريع حقيقية
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl p-8 border border-yellow-200 dark:border-yellow-700">
            <div
              className="flex items-center justify-center space-x-3 mb-6"
              style={{ direction: "rtl" }}
            >
              <MdStars className="text-4xl text-yellow-600 dark:text-yellow-400" />
              <h3
                className="text-3xl font-bold text-gray-800 dark:text-gray-200 font-arabic"
                style={{ direction: "rtl" }}
              >
                🌟 ما تستناش أكثر...
              </h3>
            </div>
            <p
              className="text-2xl text-gray-700 dark:text-gray-300 mb-6 text-justify font-arabic"
              style={{ direction: "rtl" }}
            >
              استثمر في مستقبل صغيرك من اليوم!
            </p>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <IoHeart className="h-5 w-5 mr-2" />
              <span className="font-arabic">ابدأ رحلة طفلك اليوم</span>
              <MdTrendingUp className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourquoiPage;
