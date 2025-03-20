import Layout from '../components/Layout';
import PaymentButton from '../components/PaymentButton';

export default function Merchants() {
  const merchants = [
    {
      title: 'Мерчант S',
      price: '10000 грн',
      paymentUrl: 'https://payment.example.com/merchant-s',
      description: 'Базове рішення для прийому оплат',
      includes: [
        'Послуга "Міні САЙТ"',
        'Налаштування "Миттєвої Оплати"'
      ],
      features: [
        'Швидкий прийом платежів',
        'Інтеграція з банківською системою',
        'Захищені транзакції',
        'Доступно тільки для ФОП/ТОВ'
      ]
    },
    {
      title: 'Мерчант M',
      price: '20000 грн',
      description: 'Розширене рішення для активного бізнесу',
      includes: [
        'Послуга "Міні САЙТ"',
        'Налаштування "Миттєвої Оплати"',
        'Налаштування сповіщень',
        '"Робоча" екосистема для ведення клієнтів',
        'Консультація "ТікТок СТАРТ"',
        'Підтримка 1 місяць у форматі "ТікТок-консультант"'
      ],
      features: [
        'Автоматичні сповіщення',
        'CRM система',
        'Аналітика продажів',
        'Доступно тільки для ФОП/ТОВ'
      ],
      popular: true
    },
    {
      title: 'Мерчант L',
      price: '40000 грн',
      description: 'Повне рішення для масштабного бізнесу',
      includes: [
        'Послуга "Міні МЕДІА-САЙТ"',
        'Налаштування "Миттєвої Оплати"',
        'Налаштування сповіщень',
        '"Робоча" екосистема для ведення клієнтів',
        'Консультація "ТікТок ПРО"',
        'Підтримка 3 місяці у форматі "ТікТок-консультант"'
      ],
      features: [
        'Розширена аналітика',
        'Інтеграція з CRM',
        'API для автоматизації',
        'Доступно тільки для ФОП/ТОВ'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Мерчанти для TikTok
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Професійні рішення для прийому оплат під час прямих ефірів.
              Швидко, надійно та безпечно.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {merchants.map((merchant) => (
              <div
                key={merchant.title}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                  merchant.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {merchant.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    Найпопулярніший вибір
                  </div>
                )}
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900">{merchant.title}</h3>
                    <div className="text-2xl font-bold text-primary-600">{merchant.price}</div>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{merchant.description}</p>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900">Включає:</h4>
                    <ul className="mt-4 space-y-3">
                      {merchant.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="ml-3 text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900">Особливості:</h4>
                    <ul className="mt-4 space-y-3">
                      {merchant.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          <span className="ml-3 text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <PaymentButton
                      title={merchant.title}
                      price={merchant.price}
                      paymentUrl={merchant.paymentUrl}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Переваги наших мерчантів
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Миттєві платежі</h3>
                  <p className="mt-2 text-gray-500">
                    Моментальне отримання оплат під час ефірів
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Безпека</h3>
                  <p className="mt-2 text-gray-500">
                    Захищені транзакції та зберігання даних
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Аналітика</h3>
                  <p className="mt-2 text-gray-500">
                    Детальна статистика та звіти по продажам
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Швидкий старт</h3>
                  <p className="mt-2 text-gray-500">
                    Налаштування та запуск протягом 24 годин
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 