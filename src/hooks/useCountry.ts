import { useQuery } from "@tanstack/react-query";
import { fetchCountry } from "../libs/country_apis";

const useCountry = (country: string) => {
  return useQuery({
    queryKey: ["country", country],
    queryFn: ({ queryKey }) => fetchCountry(queryKey[1]),
    enabled: !!country,
  });
};

export default useCountry;
