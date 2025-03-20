import Layout from '../components/Layout';
import PaymentButton from '../components/PaymentButton';

export default function TikTokConsultant() {
  const packages = [
    {
      title: '1 місяць',
      price: '5000 грн',
      paymentUrl: 'https://payment.example.com/tiktok-consultant-1m',
      description: 'Базовий пакет підтримки для швидкого старту',
      features: [
        'Щоденна підтримка в Telegram',
        'Текстові та голосові повідомлення',
        'Обмін фото та скріншотами',
        'Консультації щодо контенту',
        'Аналіз результатів',
        'Рекомендації щодо розвитку'
      ]
    },
    {
      title: '2 місяці',
      price: '9000 грн',
      description: 'Оптимальний період для досягнення перших результатів',
      features: [
        'Все включено з пакету "1 місяць"',
        'Розширений аналіз статистики',
        'Корегування стратегії',
        'Допомога з монетизацією',
        'Оптимізація контенту',
        'Економія 1000 грн'
      ],
      popular: true
    },
    {
      title: '3 місяці',
      price: '12000 грн',
      description: 'Комплексний супровід для стабільного росту',
      features: [
        'Все включено з пакету "2 місяці"',
        'Глибокий аналіз аудиторії',
        'Розробка контент-плану',
        'Стратегія масштабування',
        'Робота над особистим брендом',
        'Економія 3000 грн'
      ]
    },
    {
      title: '6 місяців',
      price: '20000 грн',
      description: 'Максимальний пакет для серйозного бізнесу',
      features: [
        'Все включено з пакету "3 місяці"',
        'Пріоритетна підтримка',
        'Індивідуальна стратегія розвитку',
        'Консультації щодо масштабування',
        'Робота з декількома акаунтами',
        'Економія 10000 грн'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ТікТок-консультант
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Отримайте персональну підтримку та супровід вашого бізнесу в TikTok. 
              Я буду вашим особистим консультантом та допоможу досягти максимальних результатів.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    Найпопулярніший вибір
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="mt-4 text-gray-500">{pkg.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">{pkg.price}</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
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
                      title={`Консультант на ${pkg.title}`}
                      price={pkg.price}
                      paymentUrl={pkg.paymentUrl}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Що входить в послугу ТікТок-консультант?
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Комунікація</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Зручний формат спілкування в Telegram: текст, аудіо, фото
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Швидкі відповіді на ваші запитання
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Регулярний зворотний зв'язок щодо вашого прогресу
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Підтримка</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Аналіз вашого контенту та рекомендації щодо покращення
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Допомога з технічними питаннями та налаштуваннями
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-6 w-6 text-primary-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-500">
                        Стратегічні поради щодо розвитку вашого акаунту
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 