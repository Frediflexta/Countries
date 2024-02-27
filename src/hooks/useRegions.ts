import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../libs/country_apis";

const useRegions = (region: string) => {
  return useQuery({
    queryKey: ["regions", region],
    queryFn: ({ queryKey }) => fetchRegions(queryKey[1]),
    enabled: !!region,
  });
};

export default useRegions;
