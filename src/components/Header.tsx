import { Link } from "react-router-dom";

type HeaderProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isDark, setIsDark }: HeaderProps) => {
  return (
    <header className="flex h-28 w-full items-center justify-between bg-white px-5 leading-9 shadow dark:bg-[#2B3844]  sm:h-20 sm:px-20">
      <h3 className="text-xl font-extrabold sm:text-2xl">
        <Link to="/">Where in the world?</Link>
      </h3>
      <figure
        className="flex h-5 cursor-pointer items-center justify-between font-semibold"
        role="presentation"
        onClick={() => {
          setIsDark(!isDark);
          document.body.classList.toggle("dark"); // Apply the 'dark' class to the body
        }}
      >
        {!isDark ? (
          <img
            className="pr-2"
            src="../Web/svg/dark_mode-icon.svg"
            alt="cresent moon"
          />
        ) : (
          <img
            className="pr-2"
            src="../Web/svg/sun-2-svgrepo-com.svg"
            alt="cresent moon"
          />
        )}

        <figcaption className="pr-2 text-base font-normal">
          {!isDark ? "Dark Mode" : "Light Mode"}
        </figcaption>
      </figure>
    </header>
  );
};

export default Header;
