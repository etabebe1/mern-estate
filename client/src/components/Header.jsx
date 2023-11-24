import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Home from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-zinc-900 shadow-lg shadow-slate-300">
      <section className="flex justify-between items-center max-w-5xl mx-auto px-2 py-4">
        <Link to={"/"}>
          <h1 className="flex items-center gap-1 cursor-pointer text-base md:text-xl">
            <span className="text-amber-900">Vers</span>
            <span className="text-slate-400">Estate</span>
          </h1>
        </Link>
        <form>
          <div className="flex items-center justify-between rounded-lg bg-slate-200  px-3 py-0 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-28 bg-transparent sm:w-52 lg:w-80 focus:outline-none text-zinc-900 text-sm md:text-base md:py-1"
            />
            <SearchIcon className="text-zinc-900 cursor-pointer font-light " />
          </div>
        </form>
        <ul className="text-slate-300 flex gap-4 text-sm md:text-base">
          <li className="hidden sm:inline hover:underline">
            <Link to={"/"}>
              <Home />
            </Link>
          </li>
          <li className="hidden sm:inline hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="sm:inline hover:underline">
            <Link to={"/sign-in"}>Sign in</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
