import TableData from "../../assets/data/MenuTable.json";
import { HiOutlinePencil } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Table = () => {
  return (
    <table className="font-poppins mt-4.5 w-full">
      <thead>
        <tr>
          <th className="px-2.5 py-2">
            <input
              type="checkbox"
              className="appearance-none md:w-[11px] w-2 md:h-[11px] h-2 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
            />
          </th>
          {TableData.head.map((head, index) => {
            return (
              <th
                key={index}
                className="text-[14px] font-medium text-white text-start"
              >
                {head.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {TableData.body.map((body, index) => {
          return (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#292C2D]" : "bg-[#3D4142]"}`}
            >
              <td className="px-2.5 flex justify-center">
                <input
                  type="checkbox"
                  className="appearance-none md:w-[11px] w-2 md:h-[11px] h-2 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
                />
              </td>
              <td className="py-3.5">
                <img
                  src={body.productImage}
                  alt="Product Image"
                  className="w-[80px] h-[80px] rounded-[5.2px] object-cover"
                />
              </td>
              <td className="max-w-[200px]">
                <p className="text-[14px] font-normal text-white">
                  {body.productName}
                </p>
                <p className="text-[14px] font-light text-[#ADADAD] mt-1">
                  {body.productDescription}
                </p>
              </td>
              <td className="text-[14px] font-normal text-white">
                #{body.itemID}
              </td>
              <td className="text-[14px] font-normal text-white">
                {body.stock} items
              </td>
              <td className="text-[14px] font-normal text-white">
                {body.category}
              </td>
              <td className="text-[14px] font-normal text-white">
                ${body.price}.00
              </td>
              <td
                className={`text-[14px] font-normal ${
                  body.stock > 0 ? "text-[#F8C0D7]" : "text-[#F60000]"
                }`}
              >
                {body.stock > 0 ? "In Stock" : "Out of Stock"}
              </td>
              <td className="flex items-center gap-3 py-12">
                <HiOutlinePencil color="white" className="cursor-pointer" />
                <RiDeleteBin6Fill color="#E70000" className="cursor-pointer" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
