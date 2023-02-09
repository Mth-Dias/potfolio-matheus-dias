export default function HomePage() {
  return (
    <div className="w-full flex">
      <div className="group relative lg:-space-x-24 mx-auto flex lg:flex-row flex-col items-center justify-center">
        <img
          src="/assets/images/react.png"
          alt="React_logo"
          draggable={false}
          className="w-[60vw] lg:w-[350px] xl:w-[450px] transition-all duration-300  group-hover:lg:w-[400px] group-hover:xl:w-[500px] group-hover:w-[75vw] animate-spin-slow "
        />
        <div className="mt-10 z-[1] text-black whitespace-nowrap leading-[30px] lg:leading-[50px] xl:leading-[69px] text-center flex flex-col">
          <span className="text-[7vw] lg:text-[55px] xl:text-[80px]">Matheus Dias</span>
          <div className="transition-all duration-300 border-b-2 lg:border-b-4 border-black group-hover:w-[100%] w-[0%]"></div>
          <div className="mt-2 opacity-0 transition-all duration-300 group-hover:opacity-100 text-2xl">
            <button>
              about me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
5;
