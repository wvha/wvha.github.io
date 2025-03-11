import "@mantine/core/styles.css";
import Header from "./components/Header";
import Sections from "./components/Sections";
import "./App.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div>
        <Header />
        <Sections />
      </div>
    </MantineProvider>
  );
}

export default App;
