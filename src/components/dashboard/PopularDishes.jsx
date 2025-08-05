import { NavLink } from "react-router-dom";
import DishesData from "../../assets/data/PopularDishes.json";

const PopularDishes = () => {
  return (
    <div className="md:h-[466px] overflow-y-auto custom-scrollbar h-[429px] bg-[#292C2D] rounded-[10px] font-poppins">
      <div>
        <div className="bg-[#292C2D] flex justify-between items-center sticky top-0 xl:px-8 xl:py-6 lg:p-5 max-[1024px]:pt-6 max-[1024px]:pb-[18px] md:px-4 max-[768px]:px-2.5">
          <p className="md:text-[25px] text-[16px] font-medium text-white">
            Popular Dishes
          </p>
          <NavLink className="md:text-[16px] text-xs font-normal text-[#FAC1D9] underline">
            See All
          </NavLink>
        </div>
        <div className="flex flex-col md:gap-4 gap-2.5 xl:px-8 xl:pt-0 xl:pb-8 lg:px-5 lg:pt-0 lg:pb-5 max-[1024px]:pb-6 md:px-4 max-[768px]:px-2.5">
          {DishesData.map((dish) => {
            return (
              <div
                key={dish.id}
                className="h-[77px] bg-[#3D4142] rounded-[7.5px] flex justify-between items-center pl-1.5 pr-4"
              >
                <img
                  src={dish.image}
                  alt="Dish-Image"
                  className="md:w-[19%] w-[24%] md:h-[67px] h-[64px] rounded-[5.2px] object-cover"
                />
                <div className="md:w-[77.5%] w-[71%] flex flex-col md:gap-1.5 gap-2">
                  <div className="flex justify-between">
                    <p className="md:text-[16px] text-xs font-medium text-white">
                      {dish.name}
                    </p>
                    <p className="md:text-[16px] text-xs font-normal text-[#FAC1D9]">
                      {dish.stock > 0 ? "In Stock" : "Out of stock"}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="md:text-[14px] text-xs font-normal text-[#777979]">
                      Serving : 01 person
                    </p>
                    <p className="md:text-[14px] text-xs font-normal text-white">
                      $55.00
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
