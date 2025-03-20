import React from 'react';
import Navigation from '../../components/Navigation';
import ServiceCard from '../../components/ServiceCard';

const consultantPackages = [
  {
    title: 'ТікТок-консультант (1 місяць)',
    description: 'Допомога та підтримка протягом місяця',
    price: 5000,
    duration: '1 місяць',
    includes: [
      'Підтримка в телеграм',
      'Текстові повідомлення',
      'Голосові повідомлення',
      'Фото та скріншоти',
      'Посилання та приклади'
    ],
    href: '/tiktok-consultant/1-month',
  },
  {
    title: 'ТікТок-консультант (2 місяці)',
    description: 'Розширена підтримка на два місяці',
    price: 9000,
    duration: '2 місяці',
    includes: [
      'Всі переваги місячного пакету',
      'Додаткова економія 1000 грн',
      'Розширений доступ до матеріалів'
    ],
    href: '/tiktok-consultant/2-months',
  },
  {
    title: 'ТікТок-консультант (3 місяці)',
    description: 'Квартальна підтримка вашого бізнесу',
    price: 12000,
    duration: '3 місяці',
    includes: [
      'Всі переваги місячного пакету',
      'Додаткова економія 3000 грн',
      'Пріоритетна підтримка'
    ],
    href: '/tiktok-consultant/3-months',
  },
  {
    title: 'ТікТок-консультант (6 місяців)',
    description: 'Піврічна підтримка для максимального результату',
    price: 20000,
    duration: '6 місяців',
    includes: [
      'Всі переваги місячного пакету',
      'Максимальна економія 10000 грн',
      'VIP підтримка',
      'Додаткові бонусні матеріали'
    ],
    href: '/tiktok-consultant/6-months',
  },
];

export default function TikTokConsultant() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            ТікТок-консультант
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Оберіть тривалість підтримки, яка найкраще підходить для ваших цілей
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {consultantPackages.map((pkg) => (
            <ServiceCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </main>
    </div>
  );
} 