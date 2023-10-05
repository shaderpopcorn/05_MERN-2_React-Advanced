import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>SHADREPOCORN's WEATHERSTATION</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={""}>Home 🏠</NavLink>
            {/* <NavLink to={"heroes"}>Heroes 🦸‍♀️</NavLink> */}
            {/* <NavLink to={"about"}>About ℹ</NavLink> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
