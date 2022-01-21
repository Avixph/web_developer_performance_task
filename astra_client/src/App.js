import "./App.css";
import { Route } from "react-router-dom";
import Main from "./screens/Main";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
    </div>
  );
}

export default App;
