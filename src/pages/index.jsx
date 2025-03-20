import Layout from '../components/Layout';
import Link from 'next/link';
import Checklist from '../components/Checklist';

export default function Home() {
  const services = [
    {
      title: 'Консультації',
      description: 'Індивідуальні консультації для розвитку вашого бізнесу в TikTok',
      href: '/consultations',
      icon: '🎯'
    },
    {
      title: 'ТікТок-консультант',
      description: 'Довгострокова підтримка та супровід вашого бізнесу',
      href: '/tiktok-consultant',
      icon: '💡'
    },
    {
      title: 'Міні-сайти',
      description: 'Створення сучасних міні-сайтів для вашого бізнесу',
      href: '/sites',
      icon: '🌐'
    },
    {
      title: 'Мерчанти',
      description: 'Повноцінні рішення для прийому оплат під час ефірів',
      href: '/merchants',
      icon: '💳'
    }
  ];

  return (
    <Layout>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Розвивайте свій бізнес</span>
                  <span className="block text-primary-600">в TikTok</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Отримайте безкоштовний чек-лист для продавців у TikTok та почніть свій шлях до успіху вже сьогодні.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#checklist" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                      Отримати чек-лист
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Послуги</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Все необхідне для вашого успіху
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.title} href={service.href}>
                  <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Checklist />

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Чому варто працювати зі мною?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Я допомагаю підприємцям досягати успіху в TikTok, використовуючи перевірені стратегії та сучасні інструменти.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-primary-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Досвід</h3>
                <p className="mt-2 text-base text-gray-500">
                  Багаторічний досвід роботи з TikTok та успішні кейси клієнтів
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-primary-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Швидкість</h3>
                <p className="mt-2 text-base text-gray-500">
                  Швидке впровадження стратегій та отримання перших результатів
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-primary-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Комплексний підхід</h3>
                <p className="mt-2 text-base text-gray-500">
                  Повний спектр послуг для розвитку вашого бізнесу в TikTok
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 