import "./App.css";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RenderHome from "./components/RenderHome";
import RenderApp from "./components/RenderApp";

function App() {
  return (
    <div>
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <RenderHome />
          </Route>
          <Route exact path="/app">
            <RenderApp />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
