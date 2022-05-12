import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {loginServices} from "../services/loginServices"

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()
  const handlerLogin = async () => {
    try{
      const reps = await loginServices.Login({
        username,
        password
      })
      localStorage.setItem('token', reps.data.token);
      localStorage.setItem('idUser', reps.data.id);
      navigate('/choose-quiz')
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <>
      <section className="h-screen">
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
                  <h1 className="text-4xl font-bold text-center">Login</h1>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={() => handlerLogin()}
                    type="button"
                    className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold text-center mt-4 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/signup">
                      <button className="underline ml-1">Register</button>
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

export default Login;
