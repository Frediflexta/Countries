import { Link } from "react-router-dom";
import { CountryData } from "../global";

type CountryDetailsProps = {
  country: CountryData | null;
};

const CountryDetails = ({ country }: CountryDetailsProps) => {
  console.log({ country_Details: country });
  return (
    <div>
      <div className="w-full p-20">
        <Link to="/">
          <figure
            className="flex h-5 cursor-pointer items-center font-semibold"
            role="presentation"
          >
            <img src="../Web/svg/back-icon.svg" alt="go back icon" />
            <figcaption className="pl-2">Back</figcaption>
          </figure>
        </Link>
      </div>
      <div>Country details: {JSON.stringify(country, null, 2)}</div>
    </div>
  );
};

export default CountryDetails;
