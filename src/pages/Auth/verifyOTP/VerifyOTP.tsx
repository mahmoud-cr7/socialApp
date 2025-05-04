import { useState, useEffect, useRef } from "react";

export default function VerifyOTP() {
  const [timer, setTimer] = useState(45);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Move to next input if number is valid
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      // Clear invalid input
      e.target.value = "";
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className=" flex items-center justify-center bg-[#fafbff] px-4 py-12 mt-[70px]">   
      <div className="bg-white p-8 rounded-xl w-full max-w-sm border border-[#ECF0F5] text-center">
        <h1 className="text-lg font-semibold mb-2">Enter verification code</h1>
        <p className="text-sm text-gray-500 mb-6">
          Code sent to{" "}
          <span className="text-gray-700">anorouzi.work@gmail.com</span>
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-[#ECF0F5] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => {
                if (el) inputsRef.current[i] = el;
              }}
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Resend in{" "}
          <span className="font-semibold text-gray-700">
            0:{timer < 10 ? `0${timer}` : timer}
          </span>
        </p>

        <button
          type="button"
          className="w-full bg-[#0f172a] text-white py-2 rounded-md hover:bg-[#1e293b] transition cursor-pointer"
        >
          Verify
        </button>
      </div>
    </div>
  );
}