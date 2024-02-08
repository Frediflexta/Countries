import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../libs/country_apis";

type Region = {
  region: string;
};

const useRegions = ({ region }: Region) => {
  return useQuery({
    queryKey: ["regions", region],
    queryFn: () => fetchRegions(region),
  });
};

export default useRegions;
