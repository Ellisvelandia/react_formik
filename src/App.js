import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Pexels from "./components/video/pexels.mp4";
import CustomInput from "./components/CustomInput/CustomInput";
import PasswordInput from "./components/PasswordInput/PasswordInput";

function App() {
  const InitialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string()
      .required("Required")
      .matches(/[A-Z]/, "Must have at least one capital letter")
      .min(8, "Password Too short"),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-blue-600 to-amber-300 h-full w-full  absolute -z-50">
        <video
          id="myVideo"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-overlay "
        >
          <source src={Pexels} type="video/mp4" />
        </video>
        <div className="App h-screen flex justify-center items-center">
          <Formik
            initialValues={InitialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form
                onSubmit={handleSubmit}
                className="p-8 w-96 mb-20 rounded-lg font-sans shadow-lg shadow-yellow-900/50  z-0"
              >
                <h1 className="text-4xl font-bold text-center origin-top-left rotate-2 hover:origin-top bg-slate-900 text-white shadow-lg shadow-blue-900/50">
                  Signup
                </h1>
                <div className="mt-8">
                  <CustomInput
                    name="name"
                    id="name"
                    label="Name"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mt-8">
                  <CustomInput
                    name="email"
                    id="email"
                    label="Email"
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="mt-8">
                  <PasswordInput
                    name="password"
                    id="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mt-8">
                  <PasswordInput
                    name="confirm_password"
                    id="confirm_password"
                    label="confirm_password"
                    placeholder="confirm_password"
                  />
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 p-4 text-white mt-4 font-black
                    rounded-lg
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                    focus:ring-opacity-75
                    shadow-lg shadow-blue-900/50
                    "
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default App;
