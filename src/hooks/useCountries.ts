import { useQuery } from "@tanstack/react-query";
import { fetchAllCountries } from "../libs/country_apis";

const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchAllCountries,
  });
};

export default useCountries;
