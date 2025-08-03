import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { useState } from "react";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const token = "hf847ufhsjjue973392jdhke92032971khfhrhwkqiebsUyruwjg83626493";

  const routes = token ? PrivateRoutes : PublicRoutes;

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="bg-[#111315] min-h-screen h-auto flex gap-12">
      {routes === PrivateRoutes ? (
        <div
          className={`lg:block ${
            openSidebar ? "block" : "hidden"
          } max-[1024px]:absolute max-[1024px]:w-full max-[1024px]:top-[4.5rem]`}
        >
          <Sidebar />
        </div>
      ) : (
        ""
      )}
      <div className={`${routes === PrivateRoutes ? "lg:w-[90%]" : ""} w-full`}>
        {routes === PrivateRoutes ? (
          <Header openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
        ) : (
          ""
        )}
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
