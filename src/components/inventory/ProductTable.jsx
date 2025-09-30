import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Data from "../../assets/data/InventoryProducts.json";

const ProductTable = ({ setDeleteItem, setShowDeletePopup }) => {
  const handleDelete = (id) => {
    setDeleteItem(id);
    setShowDeletePopup(true);
  };

  return (
    <table className="w-full max-[1024px]:overflow-x-auto no-scrollbar font-poppins text-nowrap">
      <thead className="hidden bg-[#292C2D]">
        <tr className="text-left">
          {Data.head.map((head, index) => {
            return (
              <th
                key={index}
                className="pt-3 pb-2.5 px-4 text-[16px] font-light text-[#777979]"
              >
                {head.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {Data.body.map((body, index) => {
          return (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#292C2D]" : "bg-[#3D4142]"}`}
            >
              <td className="pt-3 pb-2.5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-[71px] flex-shrink-0">
                    <img
                      src={body.image}
                      alt="inventory-image"
                      className="w-full h-full object-cover rounded-[5.2px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-normal text-white">
                      {body.name}
                    </p>
                    <p className="flex items-center gap-2 text-[14px] font-light text-[#777979]">
                      Stocked Product:{" "}
                      <span className="text-[14px] font-normal text-[#F8C0D7]">
                        {body.stock} In Stock
                      </span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="pt-3 pb-2.5 px-4">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-light text-[#777979]">
                    Status
                  </p>
                  <span className="text-[14px] font-normal text-white">
                    {body.status}
                  </span>
                </div>
              </td>
              <td className="pt-3 pb-2.5 px-4">
                <div className="flex items-center gap-9">
                  <div className="flex flex-col gap-1">
                    <p className=" text-[16px] font-light text-[#777979]">
                      Category
                    </p>
                    <span className="text-[14px] font-normal text-white">
                      {body.category}
                    </span>
                  </div>
                  <span className="h-12 border border-[#5E5E5E]"></span>
                  <div className="flex flex-col gap-1">
                    <p className=" text-[16px] font-light text-[#777979]">
                      Retail Price
                    </p>
                    <span className="text-[14px] font-normal text-white">
                      ${body.price}.00
                    </span>
                  </div>
                </div>
              </td>
              <td className="pt-3 pb-2.5 px-4">
                <div className="flex items-center justify-center gap-4">
                  <HiOutlinePencil
                    color="white"
                    className="cursor-pointer w-5 h-5"
                  />
                  <RiDeleteBin6Fill
                    color="#E70000"
                    className="cursor-pointer w-5 h-5"
                    onClick={() => handleDelete(body.id)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
