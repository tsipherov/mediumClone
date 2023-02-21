import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
// import { createOutlineIcon } from "./icons";
import logo from "../../create-outline.svg";
import "./TopBar.css";

function TopBar() {
  const [currentUserState] = useContext(UserContext);
  // console.log("first", currentUserState.currentUser);
  return (
    <nav className="navbar navbar-light bg-dark-subtle">
      <div className="container">
        <Link to="/articles/1" className="navbar-brand">
          Medium
        </Link>
        <ul className="navbar-nav flex-row pull-xs-right">
          <li className="nav-item">
            <NavLink to="/articles/1" className="nav-link">
              Home
            </NavLink>
          </li>
          {currentUserState.isLogedIn ? (
            <>
              <li className="nav-item ">
                <NavLink
                  to="/article/new"
                  className="nav-link d-flex align-items-center"
                >
                  <img
                    src={logo}
                    className="link-icon ion-compose"
                    alt="logo"
                  />
                  {/* <i className="link-icon me-1 ion-compose">
                    {createOutlineIcon()}
                  </i> */}
                  New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <img
                    className="user-pic"
                    src={currentUserState.currentUser.image}
                    alt="user avatar"
                  />
                  &nbsp;
                  {currentUserState.currentUser.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default TopBar;
