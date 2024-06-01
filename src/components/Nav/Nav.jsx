import { useState } from "react";
import Route from "../Route/Route";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, route_name: "Home", path: "/home" },
    { id: 2, route_name: "About", path: "/about" },
    { id: 3, route_name: "Services", path: "/services" },
    { id: 4, route_name: "Contact", path: "/contact" },
    { id: 5, route_name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-gray-200 p-3 shadow-sm px-10">
      <div className="container mx-auto flex justify-between">
        <h3 className="text-2xl font-bold">Nav</h3>
        <ul
          className={`flex flex-col md:flex-row absolute md:static duration-1000 ${
            open === true
              ? "top-20 right-16 bg-slate-300 rounded-lg shadow-lg p-4"
              : "-right-60 top-20"
          }`}
        >
          {routes.map((route, idx) => (
            <Route key={idx} route={route}></Route>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden text-3xl"
        >
          {open === true ? <RxCross2 /> : <RiMenu4Line />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
