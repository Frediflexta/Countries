import { ActionType } from "../global";

type InititalState = {
  region: string;
  country: string;
};

export const initialState: InititalState = {
  region: "",
  country: "",
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
    default:
      return state;
  }
};
