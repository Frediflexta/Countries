import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../libs/country_apis";

const useRegions = ({ region }) => {
  return useQuery({
    queryKey: ["regions", region],
    queryFn: () => fetchRegions(region),
  });
};

export default useRegions;
