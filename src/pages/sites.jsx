import Layout from '../components/Layout';
import PaymentButton from '../components/PaymentButton';

export default function Sites() {
  const sites = [
    {
      title: 'Сайт-Шаблон',
      subtitle: 'лінк-ін-біо',
      price: '1000 грн',
      paymentUrl: 'https://payment.example.com/site-template',
      description: 'Базове рішення для швидкого старту',
      features: [
        'Реєстрація міні-сайту на E-mail клієнта',
        'Базове наповнення шаблонними даними',
        '3 кнопки',
        'Номер телефону та реквізити ФОП',
        'Базова відео-інструкція'
      ]
    },
    {
      title: 'Міні САЙТ',
      price: '4000 грн',
      description: 'Розширене рішення для активного бізнесу',
      features: [
        'Кнопки на соціальні мережі та месенджери',
        'Розміщення всіх необхідних реквізитів',
        'Швидке копіювання IBAN та телефону',
        'Базова відео-інструкція',
        'Експрес-консультація щодо використання',
        'Підтримка при редагуванні'
      ],
      popular: true
    },
    {
      title: 'Міні МЕДІА-САЙТ',
      price: '8000 грн',
      description: 'Повноцінне рішення для медіа-бізнесу',
      features: [
        'Все включено з "Міні САЙТ"',
        '25 кнопок медіа-вітрини',
        'Телеграм-сайт для розміщення фото та відео',
        'Консультація "ТікТок СТАРТ"',
        'Розширена підтримка',
        'Оптимізація для пошукових систем'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Міні-сайти
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Створіть професійний міні-сайт для вашого бізнесу в TikTok. 
              Зручний інструмент для збору контактів та прийому оплат.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {sites.map((site) => (
              <div
                key={site.title}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                  site.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {site.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    Найпопулярніший вибір
                  </div>
                )}
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{site.title}</h3>
                      {site.subtitle && (
                        <p className="text-sm text-gray-500">{site.subtitle}</p>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{site.price}</div>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{site.description}</p>
                  
                  <ul className="mt-8 space-y-4">
                    {site.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary-500"
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
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <PaymentButton
                      title={site.title}
                      price={site.price}
                      paymentUrl={site.paymentUrl}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Чому варто обрати наші міні-сайти?
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Швидке налаштування</h3>
                  <p className="mt-2 text-gray-500">
                    Ваш сайт буде готовий до роботи протягом 24 годин після замовлення
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Гнучке налаштування</h3>
                  <p className="mt-2 text-gray-500">
                    Легко змінюйте та оновлюйте інформацію на сайті самостійно
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-primary-500">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Безпечні платежі</h3>
                  <p className="mt-2 text-gray-500">
                    Захищена система оплати та зберігання даних
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