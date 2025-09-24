const PersonalDetails = () => {
  const details = [
    {
      name: "Full Name",
      value: "Watson Joyce",
    },
    {
      name: "Email",
      value: "watsonjoyce112@gmail.com",
    },
    {
      name: "Phone number",
      value: "+1 (123) 123 4654",
    },
    {
      name: "Date of birth",
      value: "01-Jan-1983",
    },
    {
      name: "Address",
      value: "House # 114 Street 123 USA, Chicago",
    },
  ];

  return (
    <div className="font-poppins flex flex-col">
      <p className="text-[25px] font-medium text-white">
        Employee Personal Details
      </p>
      <div className="bg-[#292C2D] min-h-[255px] mt-6 rounded-[10px]">
        {details.map((detail, index) => {
          return (
            <div key={index}>
              <p>{detail.name}</p>
              <p>{detail.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalDetails;
