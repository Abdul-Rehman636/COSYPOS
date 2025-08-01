import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

function App() {
  const token = "hf847ufhsjjue973392jdhke92032971khfhrhwkqiebsUyruwjg83626493";

  const routes = token ? PrivateRoutes : PublicRoutes;

  return (
    <div className="bg-[#111315] min-h-screen h-auto flex gap-12">
      <div>
        <Sidebar />
      </div>
      <div className="w-[90%]">
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
