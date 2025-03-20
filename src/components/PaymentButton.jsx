import { useState } from 'react';

export default function PaymentButton({ 
  price,
  title,
  onSuccess,
  paymentUrl // URL для оплати, який буде наданий пізніше
}) {
  const [showModal, setShowModal] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [installments, setInstallments] = useState('1');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Тут буде логіка для перевірки промокоду та формування URL оплати
    const finalUrl = `${paymentUrl}?installments=${installments}${promoCode ? `&promo=${promoCode}` : ''}`;
    
    // Відкриваємо URL оплати в новому вікні
    window.open(finalUrl, '_blank');
    
    setIsProcessing(false);
    setShowModal(false);
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full px-6 py-3 text-center text-white rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 font-medium transition-colors duration-200"
      >
        Замовити {title}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Оформлення замовлення
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Сума до оплати: <span className="font-bold text-gray-900">{price}</span>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="installments" className="block text-sm font-medium text-gray-700">
                            Оплата частинами
                          </label>
                          <select
                            id="installments"
                            value={installments}
                            onChange={(e) => setInstallments(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="1">Одноразова оплата</option>
                            <option value="2">2 платежі</option>
                            <option value="3">3 платежі</option>
                            <option value="4">4 платежі</option>
                            <option value="5">5 платежів</option>
                            <option value="6">6 платежів</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">
                            Промокод (за наявності)
                          </label>
                          <input
                            type="text"
                            id="promoCode"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            placeholder="Введіть промокод"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm ${
                            isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isProcessing ? 'Обробка...' : 'Перейти до оплати'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Закрити
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 