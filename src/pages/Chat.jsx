import { Box, Grid, GridItem } from "@chakra-ui/react";
import Contacts from "../Components/Contacts";
import Messaging from "../Components/Messaging";
import FindJobNav from "../Components/FindJobNav";
export default function Chat() {
  return (
    <Box>
      <FindJobNav feature="Messages" />
      <Grid templateColumns="300px 1fr" height="100vh">
        <GridItem>
          <Contacts />
        </GridItem>
        <GridItem>
          <Messaging />
        </GridItem>
      </Grid>
    </Box>
  );
}
