import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signServices } from "../services/signServices";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  let navigate = useNavigate();

  const handlerSingUp = async () => {
    try {
      await signServices.SignUp({
        username,
        password,
        email,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      alert("Sign up fail");
      console.log(e);
    }
  };
  return (
    <>
      {showToast ? (
        <div className="flex absolute left-0 right-0 top-10  ease-in duration-300 flex-col justify-center">
          <div
            className="bg-green-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
          >
            <div className="bg-green-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-500 rounded-t-lg">
              <p className="font-bold text-white flex items-center">SUCCESS</p>
            </div>
            <div class="p-3 bg-green-600 rounded-b-lg break-words text-white">
              <p class="font-bold">Sign up success</p>
            </div>
          </div>
        </div>
      ) : null}
      <section className="h-screen ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="User name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={() => handlerSingUp()}
                    type="button"
                    className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-semibold text-center mt-4 pt-1 mb-0">
                    Already have an account
                    <Link to="/">
                      <button className="underline ml-1">Login</button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
