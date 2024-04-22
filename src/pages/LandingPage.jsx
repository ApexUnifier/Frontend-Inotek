import { Container } from "@chakra-ui/react";
import LandingNav from "../Components/LandingNav";
import LandingSec from "../Components/LandingSec";

export default function LandingPage() {
  
  return (
    <Container maxW="100%">
      <LandingNav />
      <LandingSec />
    </Container>
  );
}
