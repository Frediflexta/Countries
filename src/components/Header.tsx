const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-white pl-6 leading-9 shadow-md">
      <h3 className="text-2xl font-extrabold">Where in the world?</h3>
      <figure className="flex h-5 items-center justify-between pr-16 font-semibold">
        <img
          className="pr-2"
          src="../Web/svg/dark_mode-icon.svg"
          alt="cresent moon"
        />
        <figcaption className="text-base">Dark Mode</figcaption>
      </figure>
    </header>
  );
};

export default Header;
