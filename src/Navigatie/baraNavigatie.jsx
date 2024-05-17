import { NavLink } from "react-router-dom";
import logo from "../imagini/A.png";

function BaraNavigatie() {
  return (
    <>
      <nav className="bg-gray-600 text-white w-full block">
        <ul className="flex flex-col md:flex-row md:justify-center justify-center font-bold">
          <ul className="w-full">
            <NavLink to="/" className="btn items-center flex">
              <img
                className="m-auto justify-center itemns-center w-16 h-16"
                style={{ borderRadius: "50%" }}
                src={logo}
                alt="logo"
              />
            </NavLink>
          </ul>
          <li className="w-full">
            <NavLink
              to="/teorie/introducere"
              className={({ isActive }) =>
                isActive ? "text-pink-300 btn bg-slate-800 rounded-xl" : "btn"
              }
            >
              Teorie
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/paleta"
              className={({ isActive }) =>
                isActive ? "text-pink-300 btn bg-slate-800 rounded-xl" : "btn"
              }
            >
              Palete
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/quizz-uri"
              className={({ isActive }) =>
                isActive ? "text-pink-300 btn bg-slate-800 rounded-xl " : "btn"
              }
            >
              Quiz-uri
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/joc"
              className={({ isActive }) =>
                isActive ? "text-pink-300 btn bg-slate-800 rounded-xl" : "btn"
              }
            >
              Joc
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/cont"
              className={({ isActive }) =>
                isActive ? "text-pink-300 btn bg-slate-800 rounded-xl" : "btn"
              }
            >
              Cont
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BaraNavigatie;
