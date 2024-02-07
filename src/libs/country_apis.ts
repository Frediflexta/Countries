export const fetchAllCountries = async (): Promise<CountryData[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Network went to shit!!");
  }
  const json = (await res.json()) as CountryData[];
  return json;
};
