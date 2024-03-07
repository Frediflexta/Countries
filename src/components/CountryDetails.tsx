import { Link } from "react-router-dom";
import { CountryResponse } from "../global";

type CountryDetailsProps = {
  country: CountryResponse | null;
};

const CountryDetails = ({ country }: CountryDetailsProps) => {
  console.log({ country_Details: country });
  return (
    <div className="sm-flex flex h-screen w-screen flex-col sm:flex-col">
      <Link to="/" className="pl-14">
        <button className="mb-10 mt-10 flex h-[40px] w-[136px] flex-col items-center justify-center shadow-custom dark:bg-[#2B3844] sm:m-20">
          <figure
            className="flex items-center font-semibold"
            role="presentation"
          >
            <img src="../Web/svg/back-icon.svg" alt="go back icon" />
            <figcaption className="pl-2 font-thin">Back</figcaption>
          </figure>
        </button>
      </Link>
      <div className="flex w-screen flex-col sm:h-screen sm:flex-row ">
        <div className="pl-14 sm:pl-20">
          <img
            className="h-[229px] w-[320px] rounded-lg sm:h-[401px] sm:w-[560px]"
            src={country[135].flags.svg}
            alt={country[135].flags.alt}
          />
        </div>
        <div className="items-center justify-center pl-14 sm:pl-28">
          <h1 className="pb-8 pt-10 text-[32px] font-extrabold sm:pb-8 sm:pt-0">
            {country[135].name.common}
          </h1>
          <div className="flex flex-col sm:flex-row ">
            <div className="pb-8">
              <p className="padding-bottom">
                <span className="bold_span">Native Name: </span>
                <span className="extra_thin_span">
                  {country[135].translations.nld.common}
                </span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Population: </span>
                <span className="extra_thin_span">
                  {country[135].population.toLocaleString()}
                </span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Region: </span>
                <span className="extra_thin_span">{country[135].region}</span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Sub Region: </span>
                <span className="extra_thin_span">
                  {country[135].subregion}
                </span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Capital: </span>
                <span className="extra_thin_span">
                  {country[135]?.capital[0] ?? null}
                </span>
              </p>
            </div>
            <div className="sm:pl-52 ">
              <p className="padding-bottom">
                <span className="bold_span">Top Level Domain: </span>
                <span className="extra_thin_span">
                  {country[135]?.tld[0] ?? null}
                </span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Currencies: </span>
                <span className="extra_thin_span">
                  {country[135].currencies?.EGP?.name}
                </span>
              </p>
              <p className="padding-bottom">
                <span className="bold_span">Languages: </span>
                <span className="extra_thin_span">
                  {country[135]?.languages?.ara}
                </span>
              </p>
            </div>
          </div>
          <div className="sm:pt-12">
            <span className="bold_span pt-24">Border Countries: </span>
            {country[135].borders?.map((border) => (
              <button
                className="extra_thin_span mx-2 px-4 shadow-sm dark:bg-[#2B3844]"
                key={border}
              >
                {border}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
