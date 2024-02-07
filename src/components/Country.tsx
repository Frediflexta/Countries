type CountryProps = {
  name: string;
  image: string;
  population: number;
  region: string;
  capital: string;
};

const Country = ({
  name,
  image,
  population,
  region,
  capital,
}: CountryProps) => {
  return (
    <div className="h-[336px] sm:w-[264px] rounded-md bg-white text-[#111517] shadow-md">
      <img className="max-h-40 w-full block object-cover rounded-tl-md rounded-tr-md" src={image} alt="" />
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
