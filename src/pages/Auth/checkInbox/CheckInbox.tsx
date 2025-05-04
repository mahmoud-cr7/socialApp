import checkIcon from "../../../assets/Icon.png"
const CheckInbox = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center bg-[#fafbff] px-4 py-12 mt-[70px]">
        <div className="bg-white p-8 rounded-xl w-full max-w-sm border border-[#ECF0F5]">
          <div className="flex justify-center mb-6">
            <img src={checkIcon} alt="Check Icon" className="w-16 h-16" />  
          </div>
          <div className="flex flex-col items-center text-center mb-6">
            <h1 className="text-lg font-semibold mb-2">Check your inbox!</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Simply open your inbox and click the link to
              <br />
              access your account. No passwords required!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckInbox;
