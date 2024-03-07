import image from "../assests/lytus.png";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-2 md:px-20 flex items-center justify-between bg-black">
      <div>
        <img className="md:h-[3rem] h-[1.2rem]" src={image} alt="logo" />
      </div>
      <div className="flex items-center gap-2 md:gap-10 flex-wrap text-zinc-300 text-sm md:text-xl font-semibold">
        <p className=" border-b-2 pb-1 border-black hover:border-emerald-500  transition-all hover:text-emerald-300 duration-300 cursor-pointer">
          Solutions
        </p>
        <p className=" border-b-2 pb-1 border-black hover:border-emerald-500  transition-all hover:text-emerald-300   duration-300 cursor-pointer">
          Careers
        </p>
        <p className=" border-b-2 pb-1 border-black hover:border-emerald-500  transition-all hover:text-emerald-300  duration-300 cursor-pointer">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;
