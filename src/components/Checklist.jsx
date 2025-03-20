import { useState } from 'react';

export default function Checklist() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут буде логіка відправки email
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white" id="checklist">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-primary-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Безкоштовний чек-лист</span>
              <span className="block text-primary-200">для продавців у TikTok</span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-primary-200 sm:max-w-3xl">
              Отримайте покроковий чек-лист, який допоможе вам почати продавати в TikTok 
              та уникнути типових помилок початківців.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введіть ваш email"
                    className="block w-full py-3 px-4 rounded-md shadow bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-primary-700"
                  />
                  <button
                    type="submit"
                    className="block w-full py-3 px-4 rounded-md shadow bg-primary-500 text-white font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-primary-700"
                  >
                    Отримати чек-лист
                  </button>
                </form>
              ) : (
                <div className="text-center text-white text-xl">
                  <svg
                    className="mx-auto h-12 w-12 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="mt-2">
                    Дякуємо! Перевірте вашу електронну пошту.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-8 max-w-lg mx-auto text-center text-sm text-primary-200">
              <p>
                Ми не розсилаємо спам та не передаємо ваші дані третім особам.
                Ви отримаєте тільки чек-лист та корисні матеріали для розвитку в TikTok.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Що ви отримаєте в чек-листі?
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-medium text-gray-900">Базові налаштування</h4>
              <p className="mt-2 text-gray-600">
                Покрокова інструкція з налаштування акаунту для продажів
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-medium text-gray-900">Стратегія контенту</h4>
              <p className="mt-2 text-gray-600">
                Які відео створювати та як правильно їх оформлювати
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-medium text-gray-900">Монетизація</h4>
              <p className="mt-2 text-gray-600">
                Як почати заробляти на своєму контенті вже з перших відео
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 