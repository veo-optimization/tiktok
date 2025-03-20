import Layout from '../components/Layout';
import PaymentButton from '../components/PaymentButton';

export default function Consultations() {
  const consultations = [
    {
      title: 'ТікТок СТАРТ',
      price: '3000 грн',
      paymentUrl: 'https://payment.example.com/tiktok-start',
      duration: '60 хв',
      includes: ['Безкоштовний Чек-лист', 'Індивідуальний прохід по «розширеному чек-листу»'],
      description: 'Формат телефонного дзвінка - індивідуально розбираємо базовий чек-лист і обговорюємо питання із додатковими важливими нюансами.',
      features: ['Телефонний дзвінок', 'Індивідуальний підхід', 'Розширений чек-лист']
    },
    {
      title: 'ТікТок АНАЛІЗ',
      price: '1500 грн',
      includes: ['Індивідуальний прохід по пунктам з безкоштовного чек листа', 'Аналіз акаунта'],
      description: 'Експертний звіт в телеграм: аналіз акаунта клієнта, звіт в телеграм (скріншоти, повідомлення, посилання тощо).',
      features: ['Експертний звіт', 'Детальний аналіз', 'Практичні рекомендації']
    },
    {
      title: 'Творчий ТікТок',
      price: '7000 грн',
      duration: '150 хв',
      includes: [
        'ТікТок АНАЛІЗ',
        "Зв'язок по аудіо в телеграм",
        'Спецматеріал',
        'ТікТок-консультант на 1 місяць'
      ],
      description: 'Комплексний підхід до створення контенту: від ідей до реалізації.',
      features: [
        'Інструктаж по пошуку ідей',
        'Теорія і методика',
        'Практичні рекомендації',
        'План дій',
        'Алгоритми ТікТок'
      ]
    },
    {
      title: 'Технічний ТікТок',
      price: '9000 грн',
      duration: '150 хв',
      includes: [
        'Спецматеріал та прилади',
        'Технічні аспекти',
        'ТікТок-консультант на 1 місяць'
      ],
      description: 'Технічні аспекти роботи з TikTok: від налаштування до масштабування.',
      features: [
        'Налаштування акаунту',
        'Розробка мережі акаунтів',
        'Методика створення «ТікТок-ферм»',
        'Запобігання блокувань'
      ]
    },
    {
      title: 'ТікТок ПРО',
      price: '15000 грн',
      duration: '300 хв',
      includes: [
        'Технічний ТікТок',
        'Творчий ТікТок',
        'ТікТок-консультант на 2 місяці'
      ],
      description: 'Повний комплекс послуг для професійного розвитку в TikTok.',
      features: [
        'Два підходи по 150 хвилин',
        'Комбінація технічних і творчих аспектів',
        'Розширена підтримка'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Консультації
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Оберіть консультацію, яка найкраще підходить для ваших потреб
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {consultations.map((consultation) => (
              <div
                key={consultation.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {consultation.title}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600">
                      {consultation.price}
                    </div>
                  </div>
                  
                  {consultation.duration && (
                    <div className="mt-2 text-sm text-gray-500">
                      Тривалість: {consultation.duration}
                    </div>
                  )}

                  <p className="mt-4 text-gray-600">
                    {consultation.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900">Включає:</h4>
                    <ul className="mt-2 space-y-2">
                      {consultation.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900">Особливості:</h4>
                    <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {consultation.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <PaymentButton
                      title={consultation.title}
                      price={consultation.price}
                      paymentUrl={consultation.paymentUrl}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 