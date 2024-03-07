const Card = ({ title }) => {
  return (
    <div className="text-white md:h-[40rem] h-[30rem] transition-all duration-300 border-zinc-200 border-4 w-[25rem] md:w-[30rem] bg-black flex flex-col justify-center items-center gap-9 bg-opacity-90 hover:bg-opacity-90 rounded-lg hover:bg-blue-500">
      <h1 className="text-center font-semibold text-3xl text-white mx-7">
        {title}
      </h1>
      <button className="w-10/12 py-3 relative border-2 bg-blue-500 hover:bg-black text-white text-2xl font-semibold transition-all duration-300">
        LEARN MORE
      </button>
    </div>
  );
};
export default Card;
