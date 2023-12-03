import { NavLink } from "react-router-dom";
import classes from "./styles.module.css";
import { ROUTE_PATHES } from "../../router/pathes";

function setActiveClass({ isActive }) {
  return isActive ? classes.isActive : "";
}

export function Header() {
  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink to={ROUTE_PATHES.home} className={setActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTE_PATHES.about} className={setActiveClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTE_PATHES.users} className={setActiveClass}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTE_PATHES.comics} className={setActiveClass}>
            Comics
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTE_PATHES.root}>Root</NavLink>
        </li>
      </ul>
    </div>
  );
}
