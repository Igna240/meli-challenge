const ErrorMessage = ({ message, onBack }: { message: string, onBack?: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[300px] bg-white rounded-lg shadow-md mt-8 p-8">
    {/* Ícono de advertencia */}
    <svg width={60} height={60} fill="none" viewBox="0 0 24 24" stroke="orange" className="mb-4">
      <circle cx="12" cy="12" r="10" strokeWidth={2} fill="#FFF8E1" />
      <path d="M12 8v4" strokeWidth={2} strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="orange" />
    </svg>
    <h2 className="text-2xl font-bold text-orange-600 mb-2">¡Ups! Hubo un problema</h2>
    <p className="text-gray-700 mb-6">{message}</p>
    {onBack &&
      <button
        onClick={onBack}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >Volver al listado</button>
    }
  </div>
);

export default ErrorMessage;
