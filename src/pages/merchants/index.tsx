import React from 'react';
import Navigation from '../../components/Navigation';
import ServiceCard from '../../components/ServiceCard';

const merchants = [
  {
    title: 'Мерчант S',
    description: 'Базовий пакет для прийому миттєвих оплат',
    price: 10000,
    includes: [
      'Послуга "Міні САЙТ"',
      'Налаштування "Миттєвої Оплати"',
      '*доступно тільки для ФОП/ТОВ'
    ],
    href: '/merchants/s',
  },
  {
    title: 'Мерчант M',
    description: 'Розширений пакет з підтримкою',
    price: 20000,
    includes: [
      'Послуга "Міні САЙТ"',
      'Налаштування "Миттєвої Оплати"',
      'Налаштування сповіщень',
      'Робоча екосистема',
      'Консультація "ТікТок СТАРТ"',
      'Підтримка 1 місяць',
      '*доступно тільки для ФОП/ТОВ'
    ],
    href: '/merchants/m',
  },
  {
    title: 'Мерчант L',
    description: 'Максимальний пакет для професійного бізнесу',
    price: 40000,
    includes: [
      'Послуга "Міні МЕДІА-САЙТ"',
      'Налаштування "Миттєвої Оплати"',
      'Налаштування сповіщень',
      'Робоча екосистема',
      'Консультація "ТікТок ПРО"',
      'Підтримка 3 місяці',
      '*доступно тільки для ФОП/ТОВ'
    ],
    href: '/merchants/l',
  }
];

export default function Merchants() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Мерчанти
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Оберіть пакет мерчанта для прийому миттєвих оплат
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {merchants.map((merchant) => (
            <ServiceCard key={merchant.title} {...merchant} />
          ))}
        </div>
      </main>
    </div>
  );
} 