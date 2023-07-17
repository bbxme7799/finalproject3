import React from "react";
import googleIcon from "../../../components/icons/google-iconlogin.png";
import MetamaskIcon from "../../../components/icons/Metamaskiconlogin.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const LoginHandler = () => {
    signIn("google");
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {/* <form className="space-y-4 md:space-y-6" action="#"> */}
            <button
              onClick={LoginHandler}
              type="submit"
              className="w-full text-white bg-[#53c28b] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <span className="flex items-center justify-center">
                <Image
                  src={googleIcon}
                  alt="Google Icon"
                  className="mr-2 h-18 w-6"
                />
                <span className="text-base">Google Login</span>
              </span>
            </button>

            <button className="w-full text-white bg-[#53c28b] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <span className="flex items-center justify-center">
                <Image
                  src={MetamaskIcon}
                  alt="Google Icon"
                  className="mr-2 h-18 w-6"
                />
                <span className="text-base">Metamask Login</span>
              </span>
            </button>

            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
