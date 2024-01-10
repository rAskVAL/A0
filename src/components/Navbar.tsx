export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-10 w-full flex-col items-center justify-center bg-white">
      <div className="absolute top-0 flex h-14 w-2/3 items-center justify-center bg-white py-2 before:absolute before:-left-5 before:bottom-2 before:h-10 before:w-10 before:rotate-45 before:bg-white before:content-[''] after:absolute after:-right-5 after:bottom-2 after:h-10 after:w-10 after:rotate-45 after:bg-white after:content-[''] md:w-1/3">
        <img
          src="https://media.zenfs.com/en/globenewswire.com/c6e127ae59f15125ce5899b3fa7e4187"
          alt="a0 logo"
          className="z-50 h-2/3 object-contain md:h-full"
        />
      </div>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full justify-between ">
        <div className="w-[10%] bg-gradient-to-r from-midnight-400/20 to-transparent md:w-1/4"></div>
        <div className="w-[10%] bg-gradient-to-l from-midnight-400/20 to-transparent md:w-1/4"></div>
      </div>
    </header>
  );
}
