import { useState } from "react";
import Categories from "../components/menu/Categories";
import AllMenu from "../components/menu/AllMenu";
import Table from "../components/menu/Table";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Normal Menu");

  return (
    <div className="flex flex-col lg:pt-[42px] md:pt-9 pt-7">
      <div className="lg:pl-[166px] mb-4.5">
        <Categories />
        <AllMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="lg:pl-[123px] overflow-x-auto w-full">
        <Table activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Menu;
