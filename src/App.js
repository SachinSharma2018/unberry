import {useEffect} from "react";
import AppRouter from "./AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles
import "./styles/App.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;
