import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-md mx-auto p-3">
      <h1 className=" my-7 text-3xl text-center font-semibold text-slate-300">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="py-2 px-2 rounded-lg border text-sm md:text-base focus:outline-none"
          placeholder="username"
        />
        <input
          type="email"
          className="py-2 px-2 rounded-lg border text-sm md:text-base focus:outline-none"
          placeholder="email"
        />
        <input
          type="password"
          className="py-2 px-2 rounded-lg border text-sm md:text-base focus:outline-none"
          placeholder="password"
        />
        <button className="bg-amber-900 py-2 px-2 rounded-lg uppercase text-slate-300 hover:opacity-90">
          Sign Up
        </button>
      </form>
      <div className="flex gap-1 mt-5">
        <p className="text-slate-300">Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-amber-900">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
