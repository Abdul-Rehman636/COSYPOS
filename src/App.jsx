import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes";

function App() {
  const routes = PublicRoutes;

  return (
    <div className="bg-[#111315] min-h-screen h-auto">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
