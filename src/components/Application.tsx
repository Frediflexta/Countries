import { useReducer, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { regionCountryReducer, initialState } from "../libs/reducer";
import Countries from "./Countries";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CountryDetails from "./CountryDetails";

const Application = () => {
  const [isDark, setIsDark] = useState(false);
  const [{ country, region }, dispatch] = useReducer(
    regionCountryReducer,
    initialState,
  );

  const location = useLocation();

  return (
    <main className="w-screen font-nunito dark:bg-[#202C36] sm:w-screen">
      <Header isDark={isDark} setIsDark={setIsDark} />
      {location.pathname === "/" && (
        <>
          <SearchFilter country={country} region={region} dispatch={dispatch} />
          <Countries country={country} />
        </>
      )}
      <Routes>
        <Route
          path="/countrydetails/:name"
          element={<CountryDetails country={country} />}
        />
      </Routes>
    </main>
  );
};

export default Application;
