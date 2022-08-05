import React, { useState } from "react";
import { useField } from "formik";

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState("password");

  return (
    <div className="flex flex-col text-left text-stone-900 font-black">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <div className="relative flex items-center">
        <input
          {...field}
          {...props}
          className="border-b border-slate-900 focus:outline-none focus:border-blue-500 w-full bg-transparent placeholder-gray-900"
          type={type}
        />
        {type === "password" ? (
          <span
            class="material-symbols-outlined  absolute right-0 cursor-pointer select-none"
            onClick={() => {
              setType("text");
            }}
          >
            visibility
          </span>
        ) : (
          <span
            class="material-symbols-outlined  absolute right-0 cursor-pointer select-none"
            onClick={() => {
              setType("password");
            }}
          >
            visibility_off
          </span>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PasswordInput;
