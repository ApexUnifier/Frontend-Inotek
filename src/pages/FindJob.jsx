import { Box } from "@chakra-ui/react";
import FindJobNav from "../Components/FindJobNav";
import FilterNav from "../Components/FilterNav";
import FindJobSecMain from "../Components/FindJobSecMain";
import FindJobSecSideBar from "../Components/FindJobSecSideBar";

export default function FindJob() {
  return (
    <Box>
      <FindJobNav feature="FindJob" />
      <FilterNav />
      <Box display="flex" W="100%" p="30px">
          <FindJobSecSideBar />
          <FindJobSecMain />
      </Box>
    </Box>
  );
}
