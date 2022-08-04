import React from "react";
import { useField} from "formik";


const CustomInput = ({ label, ...props }) => {
const [field, meta] = useField(props);

  return (
    <div className="flex flex-col text-left text-stone-900 font-black">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input {...field} {...props} className="border-b border-slate-600  focus:border-blue-900"/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
