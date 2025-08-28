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

  const handleCloseSidebar = () => {
    setTimeout(() => {
      setOpenSidebar(false);
    }, 300);
  };

  return (
    <div className="bg-[#111315] min-h-screen h-auto flex gap-12">
      {routes === PrivateRoutes ? (
        <div
          className={`lg:block ${
            openSidebar ? "block" : "hidden"
          } max-[1024px]:absolute max-[1024px]:w-full max-[1024px]:top-[4.5rem]`}
        >
          <Sidebar handleCloseSidebar={handleCloseSidebar} />
        </div>
      ) : (
        ""
      )}
      <div className="w-full">
        {routes === PrivateRoutes ? (
          <Header openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
        ) : (
          ""
        )}
        <div
          className={`${
            openSidebar ? "max-[1024px]:hidden" : "max-[1024px]:block"
          }`}
        >
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
    </div>
  );
}

export default App;
