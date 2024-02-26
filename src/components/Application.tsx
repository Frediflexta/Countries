import { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { regionCountryReducer, initialState } from "../libs/reducer";
import Countries from "./Countries";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CountryDetails from "./CountryDetails";

const Application = () => {
  const [isDark, setIsDark] = useState(false);
  const [{ country, region, countryData }, dispatch] = useReducer(
    regionCountryReducer,
    initialState,
  );

  // const location = useLocation();
  console.info({ countryData });

  return (
    <main className="w-screen font-nunito dark:bg-[#202C36] sm:w-screen">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchFilter
                country={country}
                region={region}
                dispatch={dispatch}
              />
              <Countries />
            </>
          }
        />
        <Route
          path="/countrydetails/:name"
          element={<CountryDetails country={countryData} />}
        />
      </Routes>
    </main>
  );
};

export default Application;
