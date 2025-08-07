import Stats from "../components/dashboard/Stats";
import PopularDishes from "../components/dashboard/PopularDishes";
import Overview from "../components/dashboard/Overview";

const Dashboard = () => {
  return (
    <div>
      <Stats />
      <div className="grid lg:grid-cols-2 grid-cols-1 max-[1024px]:w-[90%] max-[1024px]:mx-auto lg:mr-16 lg:mt-12 md:mt-8 mt-7 lg:gap-12 gap-7">
        <PopularDishes type="Dishes with servings" />
        <PopularDishes type="Dishes with orders" />
      </div>
      <div className="max-[1024px]:w-[90%] max-[1024px]:mx-auto lg:mr-16 lg:mt-12 md:mt-8 mt-7">
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
