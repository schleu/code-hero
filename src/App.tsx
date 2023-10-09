import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
