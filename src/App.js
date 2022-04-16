import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesFile from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <RoutesFile />
    </BrowserRouter>
  );
}

export default App;
