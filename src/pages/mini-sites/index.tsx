import React from 'react';
import Navigation from '../../components/Navigation';
import ServiceCard from '../../components/ServiceCard';

const miniSites = [
  {
    title: 'Сайт-Шаблон (лінк-ін-біо)',
    description: 'Базовий міні-сайт з шаблонним наповненням',
    price: 1000,
    includes: [
      'Реєстрація міні-сайту',
      'Базове наповнення (3 кнопки)',
      'Номер телефону та реквізити ФОП',
      'Базова відео-інструкція'
    ],
    href: '/mini-sites/template',
  },
  {
    title: 'Міні САЙТ',
    description: 'Розширений міні-сайт з індивідуальним підходом',
    price: 4000,
    includes: [
      'Створення міні-сайту',
      'Кнопки на соціальні мережі',
      'Кнопки на месенджери',
      'Розміщення реквізитів',
      'Базова відео-інструкція',
      'Експрес-консультація'
    ],
    href: '/mini-sites/mini',
  },
  {
    title: 'Міні МЕДІА-САЙТ',
    description: 'Повноцінний міні-сайт з медіа-вітриною',
    price: 8000,
    includes: [
      'Всі функції Міні САЙТУ',
      '25 кнопок медіа-вітрини',
      'Телеграм-сайт для асортименту',
      'Консультація "ТікТок СТАРТ"'
    ],
    href: '/mini-sites/media',
  }
];

export default function MiniSites() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Міні-сайти
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Оберіть тип міні-сайту, який найкраще підходить для вашого бізнесу
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {miniSites.map((site) => (
            <ServiceCard key={site.title} {...site} />
          ))}
        </div>
      </main>
    </div>
  );
} 