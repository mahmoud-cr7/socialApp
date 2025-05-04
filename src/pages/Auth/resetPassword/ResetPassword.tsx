
const ResetPassword = () => {
  return (
    <>
      {" "}
      <div className=" flex items-center justify-center bg-[#fafbff] px-4 py-1 my-auto mt-[80px]">
        <div className="bg-white p-8 rounded-xl w-full max-w-sm border border-[#ECF0F5]">
          <div className="space-y-3">
            <div className="flex justify-center">
              <h1 className="text-xl font-bold my-7 text-center">
                Reset Password
              </h1>
            </div>
          </div>
          {/* Email/password login */}
          <form className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-[#ECF0F5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-[#ECF0F5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-[#0f172a] text-white py-2 rounded-md hover:bg-[#1e293b] transition cursor-pointer    "
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
