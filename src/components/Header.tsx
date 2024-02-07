const Header = () => {
  return (
    <header className="flex h-28 w-full items-center justify-between bg-white px-5 leading-9 shadow sm:h-20 sm:px-20">
      <h3 className="text-xl font-extrabold sm:text-2xl">
        Where in the world?
      </h3>
      <figure className="flex h-5 items-center justify-between font-semibold">
        <img
          className="pr-2"
          src="../Web/svg/dark_mode-icon.svg"
          alt="cresent moon"
        />
        <figcaption className="pr-2 text-base font-normal">
          Dark Mode
        </figcaption>
      </figure>
    </header>
  );
};

export default Header;
