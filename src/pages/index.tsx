import React from 'react';
import Navigation from '../components/Navigation';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Безкоштовний чек-лист',
    description: 'Базовий чек-лист для продавців у ТікТок',
    price: 0,
    href: '/checklist',
  },
  {
    title: 'ТікТок СТАРТ',
    description: 'Індивідуальний прохід по «розширеному чек-листу» + консультація',
    price: 3000,
    duration: '60 хвилин',
    includes: ['Безкоштовний чек-лист', 'Індивідуальна консультація'],
    href: '/consultations/start',
  },
  {
    title: 'ТікТок-консультант (1 місяць)',
    description: 'Допомога та підтримка протягом місяця',
    price: 5000,
    duration: '1 місяць',
    includes: ['Підтримка в телеграм', 'Голосові повідомлення', 'Консультації'],
    href: '/tiktok-consultant',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        {/* Hero section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Розвивайте свій</span>
                    <span className="block text-primary-600">бізнес у TikTok</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Отримайте професійну підтримку та консультації для успішного розвитку вашого бізнесу в TikTok
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Featured services section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Популярні послуги
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 
 