import "./App.css";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Container maxWidth={false}>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </Container>
  );
}

export default App;
