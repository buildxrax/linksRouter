import React from 'react';
import { FaExchangeAlt, FaWallet, FaUniversity } from 'react-icons/fa';

const Page = () => {
  return (
    <main className="container mx-auto p-8">
      {/* Título principal */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold">Crypto Start - Tu Puerta a las Criptomonedas</h1>
        <p className="text-lg mt-4">Explora exchanges, wallets con Visa, y bancos relacionados con criptomonedas.</p>
      </section>

      {/* Sección de Exchanges */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Lista de Exchanges */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaExchangeAlt className="mr-2" /> Binance
          </h2>
          <p className="mt-2">Encuentra los mejores exchanges y empieza a invertir en criptomonedas.</p>
          <a href="https://binance.com" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Binance</a>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaExchangeAlt className="mr-2" /> KuCoin
          </h2>
          <p className="mt-2">Accede a una amplia variedad de criptomonedas.</p>
          <a href="https://kucoin.com" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar KuCoin</a>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaExchangeAlt className="mr-2" /> Huobi
          </h2>
          <p className="mt-2">Una plataforma global de intercambio de criptomonedas.</p>
          <a href="https://huobi.com" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Huobi</a>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaExchangeAlt className="mr-2" /> Gate.io
          </h2>
          <p className="mt-2">Intercambia criptomonedas de forma segura.</p>
          <a href="https://gate.io" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Gate.io</a>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaExchangeAlt className="mr-2" /> Coinbase
          </h2>
          <p className="mt-2">Compra y vende criptomonedas fácilmente.</p>
          <a href="https://coinbase.com" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Coinbase</a>
        </div>
      </section>

      {/* Sección de Wallets */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaWallet className="mr-2" /> Plutus Wallet
          </h2>
          <p className="mt-2">Wallet segura con tarjeta Visa para pagos en criptomonedas.</p>
          <a href="https://plutus.it" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Plutus</a>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaWallet className="mr-2" /> Wallet4
          </h2>
          <p className="mt-2">Wallet con alta seguridad y soporte multi-cripto.</p>
          <a href="#" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Wallet4</a>
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaWallet className="mr-2" /> Wallet5
          </h2>
          <p className="mt-2">La forma segura de almacenar y gestionar tus criptoactivos.</p>
          <a href="#" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Wallet5</a>
        </div>
      </section>

      {/* Sección de Bancos */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-r from-yellow-400 to-green-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaUniversity className="mr-2" /> Wise
          </h2>
          <p className="mt-2">Transferencias internacionales de dinero con bajos costos.</p>
          <a href="https://wise.com" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Wise</a>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaUniversity className="mr-2" /> Banco4
          </h2>
          <p className="mt-2">Banco con integración de criptomonedas y soporte global.</p>
          <a href="#" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Banco4</a>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-orange-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaUniversity className="mr-2" /> Banco44
          </h2>
          <p className="mt-2">Banco innovador con servicios financieros en criptomonedas.</p>
          <a href="#" target="_blank" className="mt-4 block text-blue-200 hover:underline">Explorar Banco44</a>
        </div>
      </section>
    </main>
  );
};

export default Page;
