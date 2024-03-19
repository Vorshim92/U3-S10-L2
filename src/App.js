import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import AlertComponent from "./components/AlertComponent";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
        <AlertComponent />
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <CardComponent />
      </main>
      <footer className="mt-5">
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
