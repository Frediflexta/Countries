import { Link } from "react-router-dom";

type CountryDetailsProps = {
  country: string;
};

const CountryDetails = ({ country }: CountryDetailsProps) => {
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
      <div>Country details: {country}</div>
    </div>
  );
};

export default CountryDetails;
