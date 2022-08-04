import "./App.css";
import { Formik } from "formik";
import Pexels from "./components/video/pexels.mp4";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  const InitialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-blue-700 to-amber-400 h-full w-full absolute">
        <video
          id="myVideo"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-45 mix-blend-overlay"
        >
          <source src={Pexels} type="video/mp4" />
        </video>
        <div className="App h-screen flex justify-center items-center">
          <Formik initialValues={InitialValues} onSubmit={handleSubmit}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="bg-white p-8 w-96">
                <h1 className="text-4xl font-bold text-primary text-left">
                  Signup
                </h1>
                <CustomInput
                  name="name"
                  id="name"
                  label="Name"
                  placeholder="Enter your full name"
                />
                <CustomInput
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Enter your Email"
                />
                <CustomInput
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <CustomInput
                  name="confirm_password"
                  id="confirm_password"
                  label="confirm_password"
                  placeholder="confirm_password"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 p-4 text-white mt-4 font-black"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default App;
