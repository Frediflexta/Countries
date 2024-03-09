import { useNavigate } from "react-router-dom";
import { ActionType, CountryData } from "../global";
import { Dispatch } from "react";

type CountryProps = {
  name: string;
  image: string;
  population: number | string;
  region: string;
  capital: string;
  alt: string;
  data: CountryData;
  dispatch: Dispatch<ActionType>;
};

const Country = ({
  name,
  image,
  population,
  region,
  capital,
  alt,
  dispatch,
  data,
}: CountryProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="h-[336px] cursor-pointer rounded-md bg-white text-[#111517] shadow-sm dark:bg-[#2B3844] dark:text-white sm:w-[264px] md:w-[264px]"
      role="presentation"
      onClick={() => {
        // dispatch an action to set data to countryData before navigating
        if (data && data.name) {
          dispatch({ type: "updateCountryData", payload: [data] });
          navigate(`/countrydetails/${name}`);
        }
      }}
    >
      <img
        className="block max-h-40 w-full rounded-tl-md rounded-tr-md object-cover"
        src={image}
        alt={alt}
      />
      <p className="pl-6 pt-6 text-lg font-extrabold">{name}</p>
      <div className="pl-6 pt-3 text-sm">
        <p>
          <span className="bold_span">Population:</span>
          <span className="extra_thin_span">
            {" "}
            {population.toLocaleString()}
          </span>
        </p>
        <p>
          <span className="bold_span">Region:</span>{" "}
          <span className="extra_thin_span">{region}</span>
        </p>
        <p>
          <span className="bold_span">Capital:</span>{" "}
          <span className="extra_thin_span">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
