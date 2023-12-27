// import banner from '../assets/img/banner.jpg';

const Banner = () => {
  return (
    <>
      <div className="mt-16 w-full pb-10">
        <div className="flex item-center justify-center w-full">
          <div className="h-[200px] md:h-[260px] banner bg-cover bg-center w-full rounded-xl p-8 md:p-10">
            <p className="text-white font-semibold drop-shadow-sm"> Smartphone Pro 2024 </p>
            <a className="mt-3 bg-sky-500 text-white w-[120px] h-[40px]
                                  flex items-center justify-center rounded-md
                                  hover:text-sky-500 hover:bg-white cursor-pointer
                                  transition-all duration-200 font-medium">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};


export default Banner;