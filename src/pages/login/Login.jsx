import React, { useState } from "react";
import loginBanner from "../../assets/loginBanner.jpg";
import loginLogic from "./loginLogic";
import { IoMdArrowRoundBack } from "react-icons/io";

function Login() {
  const { loggedIn, forgetPassword, isLoading } = loginLogic();
  const [loginPage, setLoginPage] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    loginPage ? loggedIn(formData) : forgetPassword(formData);
    // setFormData({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="relative h-[100vh]">
      {/* Background Image Layer */}
      <div
        className="h-full w-full brightness-50 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginBanner})`,
        }}
      ></div>

      {/* Form Layer */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[90%] max-w-md p-6 bg-white rounded-2xl shadow-lg z-10 ">
          <div className="relative flex items-center">
            {!loginPage && (
              <span
                className="absolute top-[10%]"
                onClick={() => setLoginPage(true)}
              >
                <IoMdArrowRoundBack size={25} className="cursor-pointer" />
              </span>
            )}
            <h1 className="text-2xl font-bold text-center mb-6 mx-auto">
              {loginPage ? "Sign In" : "Forget Password"}
            </h1>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {loginPage && (
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>

          <div className="text-right mt-2">
            {loginPage && (
              <span
                className="text-sm text-blue-600 hover:underline cursor-pointer"
                onClick={() => {
                  setLoginPage(false);
                }}
              >
                Forgot password?
              </span>
            )}
          </div>

          <div className="mt-6">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleFormSubmit}
            >
              {loginPage ? "Sign in" : "Reset password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
