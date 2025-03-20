import React from 'react';
import Navigation from '../../components/Navigation';
import ServiceCard from '../../components/ServiceCard';

const consultations = [
  {
    title: 'ТікТок СТАРТ',
    description: 'Індивідуальний прохід по «розширеному чек-листу» + консультація',
    price: 3000,
    duration: '60 хвилин',
    includes: [
      'Безкоштовний чек-лист',
      'Індивідуальна консультація',
      'Розбір базового чек-листа',
      'Обговорення додаткових нюансів'
    ],
    href: '/consultations/start',
  },
  {
    title: 'ТікТок АНАЛІЗ',
    description: 'Експертний звіт в телеграм з аналізом вашого акаунта',
    price: 1500,
    includes: [
      'Індивідуальний прохід по чек-листу',
      'Аналіз акаунта',
      'Детальний звіт в телеграм',
      'Скріншоти та рекомендації'
    ],
    href: '/consultations/analysis',
  },
  {
    title: 'Творчий ТікТок',
    description: 'Комплексна консультація з розробки контент-стратегії',
    price: 7000,
    duration: '150 хвилин',
    includes: [
      'ТікТок АНАЛІЗ',
      'Аудіозв'язок в телеграм',
      'Розбір чек-листа',
      'Спецматеріал',
      'Інструктаж по пошуку ідей',
      'Теорія і методика',
      'План дій',
      'ТікТок-консультант на 1 місяць'
    ],
    href: '/consultations/creative',
  },
  {
    title: 'Технічний ТікТок',
    description: 'Технічні аспекти роботи з платформою',
    price: 9000,
    duration: '150 хвилин',
    includes: [
      'Спецматеріал та прилади',
      'Налаштування акаунту',
      'Технологія розробки мережі акаунтів',
      'Методика створення ТікТок-ферм',
      'Запобігання блокувань',
      'Розбір правил спільноти',
      'Шлях клієнта',
      'ТікТок-консультант на 1 місяць'
    ],
    href: '/consultations/technical',
  },
  {
    title: 'ТікТок ПРО',
    description: 'Повний комплекс консультацій для професійного розвитку',
    price: 15000,
    duration: '300 хвилин',
    includes: [
      'Творчий ТікТок',
      'Технічний ТікТок',
      'Два підходи по 150 хвилин',
      'ТікТок-консультант на 2 місяці'
    ],
    href: '/consultations/pro',
  },
];

export default function Consultations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Консультації
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Оберіть консультацію, яка найкраще підходить для ваших потреб
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consultations.map((consultation) => (
            <ServiceCard key={consultation.title} {...consultation} />
          ))}
        </div>
      </main>
    </div>
  );
} 