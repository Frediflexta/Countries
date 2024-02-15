import { CountryData, CountryResponse } from "../global";

export const fetchAllCountries = async (): Promise<CountryResponse> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Network went to shit!!");
  }
  const json = (await res.json()) as CountryResponse;
  return json;
};

export const fetchRegions = async (
  region: string,
): Promise<CountryResponse> => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  if (!res.ok) {
    throw new Error("Network went to shit!!");
  }
  const json = (await res.json()) as CountryResponse;
  return json;
};

export const fetchCountry = async (country: string): Promise<CountryData> => {
  console.log("fectchCountry", country);
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`,
  );

  if (!res.ok) {
    throw new Error("Network went to shit!");
  }

  const json = (await res.json()) as CountryData;
  return json;
};
