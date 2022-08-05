import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col text-left text-stone-900 font-black">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input
        {...field}
        {...props}
        className="border-b bg-transparent border-slate-900 focus:outline-none focus:border-blue-500 placeholder-gray-900"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
