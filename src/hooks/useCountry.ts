import { useQuery } from "@tanstack/react-query";
import { fetchCountry } from "../libs/country_apis";

const useCountry = (country: string) => {
  console.log("useCountry =>", country);
  return useQuery({
    queryKey: ["country", country],
    queryFn: ({ queryKey }) => fetchCountry(queryKey[1]),
  });
};

export default useCountry;
