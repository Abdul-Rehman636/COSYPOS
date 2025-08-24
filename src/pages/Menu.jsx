import Categories from "../components/menu/Categories";
import AllMenu from "../components/menu/AllMenu";
import Table from "../components/menu/Table";

const Menu = () => {
  return (
    <div className="flex flex-col lg:pt-[42px] md:pt-9 pt-7">
      <div className="lg:pl-[166px]">
        <Categories />
        <AllMenu />
      </div>
      <div className="lg:pl-[123px]">
        <Table />
      </div>
    </div>
  );
};

export default Menu;
