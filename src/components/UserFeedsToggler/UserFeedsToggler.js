import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const UserFeedsToggler = ({ currentUserName }) => {
  let paramsUser = useParams().user;
  //   console.log("currentUserNameFromToggle >>>> ", paramsUser);
  return (
    <div className="feed-toggler">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink to={`/profiles/${paramsUser}`} className="nav-link" end>
            My Posts
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={`/profiles/${paramsUser}/favorites`}
            className="nav-link"
          >
            Favorited Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserFeedsToggler;
