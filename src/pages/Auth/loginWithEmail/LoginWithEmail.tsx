const LoginWithEmail = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center bg-[#fafbff] px-4 py-12 mt-[70px]">
        <div className="bg-white p-8 rounded-xl w-full max-w-sm border border-[#ECF0F5]">
          <div className="flex flex-col items-center text-center mb-6">
            <h1 className="text-lg font-semibold mb-2">Enter your email</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              We'll send a secure link for instant
              <br />
              access to your account.
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#ECF0F5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-[#0f172a] text-white py-2 rounded-md hover:bg-[#1e293b] transition"
            >
              Send link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginWithEmail;
