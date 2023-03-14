import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ROUTES } from "./routes";
import "./styles/global.scss";
import { useState } from "react";
import { STATUS_FETCH } from "./utils/constants";

const App = () => {
  const [status, setStatus] = useState(STATUS_FETCH.INITIAL);
  return (
    <BrowserRouter>
      <Header status={status} />
      <main className="container">
        <Routes>
          {ROUTES.map(({ key, path, component: Component }) => {
            return (
              <Route
                key={key}
                path={path}
                element={<Component changeStatus={setStatus} />}
              />
            );
          })}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
