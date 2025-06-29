import CreditCardIcon from './icons/CreditCardIcon';

const PaymentMethods = () => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mt-8">
    <h2 className="text-xl font-semibold mb-6">Medios de pago</h2>
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <CreditCardIcon />
        <div>
          <h3 className="font-semibold text-base">Hasta 12 cuotas sin interés</h3>
          <p className="text-sm text-gray-500">Ver más</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <CreditCardIcon />
          <div>
            <h4 className="font-semibold text-base">Tarjetas de crédito</h4>
            <p className="text-sm text-gray-600">¡Cuotas sin interés con bancos seleccionados!</p>
            <div className="flex space-x-2 mt-2">
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa" className="h-6"/>
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="MasterCard" className="h-6"/>
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" alt="American Express" className="h-6"/>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <CreditCardIcon />
          <div>
            <h4 className="font-semibold text-base">Tarjetas de débito</h4>
            <p className="text-sm text-gray-600">¡Acreditación inmediata!</p>
            <div className="flex space-x-2 mt-2">
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="VisaDebito" className="h-6"/>
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="MasterCardDebito" className="h-6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-200 mt-6 pt-4">
      <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">
        Conoce otros medios de pago
      </a>
    </div>
  </div>
);

export default PaymentMethods;
