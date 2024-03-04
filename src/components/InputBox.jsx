import React from "react";

function InputBox({ label }) {
  return (
    <div className="w-full">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating"
          id="floating"
          className="block py-2.5 px-0 w-full text-sm text-[#003149] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#003149] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating"
          className="peer-focus:font-medium absolute text-[#003149ae] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#003149] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default InputBox;