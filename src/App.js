import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { StatusProvider } from "./StatusContext";
import { ROUTES } from "./routes";
import "./styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <StatusProvider>
        <Header />
        <main className="container">
          <Routes>
            {ROUTES.map(({ key, path, component: Component }) => {
              return <Route key={key} path={path} element={<Component />} />;
            })}
          </Routes>
        </main>
      </StatusProvider>
    </BrowserRouter>
  );
};

export default App;
