import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";

const LogIn = () => {
  return (
    <>
      {" "}
      <div className=" flex items-center justify-center bg-[#fafbff] px-4 py-16">
        <div className="bg-white p-8 rounded-xl w-full max-w-sm py-20 border border-[#ECF0F5]">
          {/* Social login buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-[#ECF0F5] rounded-md py-2 text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
              <FcGoogle className="w-5 h-5" />
              Log in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-[#ECF0F5] rounded-md py-2 text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
              <MdOutlineEmail className="w-5 h-5 text-gray-500" />
              Log in with Email
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-2 text-sm text-gray-400">OR</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          {/* Email/password login */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#ECF0F5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-[#ECF0F5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right text-sm">
              <a href="#" className="text-gray-500 hover:no-underline">
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0f172a] text-white py-2 rounded-md hover:bg-[#1e293b] transition cursor-pointer    "
            >
              Log in
            </button>
          </form>

          {/* Sign up link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-indigo-600 font-medium hover:no-underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
