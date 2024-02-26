import { ActionType, CountryData } from "../global";

type InititalState = {
  region: string;
  country: string;
  countryData: CountryData | null;
};

export const initialState: InititalState = {
  region: "",
  country: "",
  countryData: null,
};

export const regionCountryReducer = (
  state: InititalState,
  action: ActionType,
) => {
  switch (action.type) {
    case "updateRegion":
      return { ...state, region: action.payload };
    case "updateCountry":
      return { ...state, country: action.payload };
    case "updateCountryData":
      return { ...state, countryData: action.payload };
    default:
      return state;
  }
};
