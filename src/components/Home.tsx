import phoneImg from '../assets/img/Apple-iPhone-12-PNG-Picture.png';

export const Home = () => {
  return (
    <>
      <div className="bg-[#E3EDF6] mt-10 flex items-center w-full py-4 px-5 justify-between">
        <div className="flex items-center">
          <div className="lg:max-w-[450px] sm:w-full space-y-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-headingFirst font-bold text-3xl md:text-4xl">
              Коллекция мобильных устройств
            </h2>
            <h3 className="text-2xl font-semibold">
              Специальное новогоднее предложение <span className="text-red-600 font-secondary font-medium">-10% скидка</span>
            </h3>
            <a href="#"
               className="inline-block bg-sky-500 text-white rounded-md px-5 py-3 hover:bg-sky-600 transition-all duration-200">
              Перейти к покупкам
            </a>
          </div>
        </div>
        <div className="ml-auto max-w-[250px] md:flex hidden">
          <img src={phoneImg} alt="" className="ml-auto" />
        </div>
      </div>
    </>
  );
};

export default Home;
