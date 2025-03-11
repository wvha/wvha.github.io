import classes from "../css/Sections.module.css";
import { Center } from "@mantine/core";

export default function HeroSection() {
  return (
    <Center className={classes.heroSection}>
      <div>
        <p>Software Engineer</p>
        <p>Frontend - Fullstack</p>
      </div>
    </Center>
  );
}
