import { Container, Divider } from "@mantine/core";
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";

import "./css/Sections.module.css";

export default function Sections() {
  return (
    <Container>
      {/* <Grid gutter="md">
        <Grid.Col span={{ base: 12, xs: 12 }}> */}
      <HeroSection />
      <Divider />
      <FeaturedSection />
      {/* </Grid.Col>
      </Grid> */}
    </Container>
  );
}
