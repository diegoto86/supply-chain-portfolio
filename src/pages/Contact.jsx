import React from 'react';

const Contact = () => {
  const email = "diego.melendez@example.com"; // ← cámbialo por el tuyo real

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Correo copiado al portapapeles");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Contacto</h2>
      <p className="text-lg text-gray-700 mb-2">
        ¿Te interesa colaborar conmigo? Puedes escribirme a:
      </p>
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 font-medium">{email}</span>
        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Copiar
        </button>
      </div>
    </div>
  );
};

export default Contact;
