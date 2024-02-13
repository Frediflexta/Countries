interface Name {
  common: string;
  official: string;
  nativeName: Record<
    string,
    {
      official: string;
      common: string;
    }
  >;
}

interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Capital {
  latlng: number[];
}

interface Translation {
  official: string;
  common: string;
}

interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CountryData {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Record<string, { f: string; m: string }>;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number | string;
  gini?: { [year: number]: number };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flag;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: Capital;
  postalCode: PostalCode;
}

export type CountryResponse = CountryData[];

export declare type Regions =
  | "Africa"
  | "America"
  | "Asia"
  | "Europe"
  | "Oceania";
