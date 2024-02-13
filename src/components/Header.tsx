import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);

  return (
    <header className="flex h-28 w-full items-center justify-between bg-white px-5 leading-9 shadow dark:bg-[#2B3844] dark:text-white sm:h-20 sm:px-20">
      <h3 className="text-xl font-extrabold sm:text-2xl">
        Where in the world?
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
