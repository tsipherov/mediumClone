import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const FeedToggler = ({ tagName, page }) => {
  const [userState] = useContext(UserContext);
  console.log("userState >>> ", userState);
  return (
    <div className="feed-toggler">
      <ul className="nav nav-pills outline-active">
        {userState.isLogedIn && (
          <li className="nav-item">
            <NavLink to="/feed" className="nav-link">
              Your feed
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink to={`/articles/${page}`} className="nav-link">
            Global feed
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link">
              <span className="fw-bold">#</span>
              &nbsp;
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;
