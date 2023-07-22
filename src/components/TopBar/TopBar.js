import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
// import { createOutlineIcon } from "./icons";
// import logo from "../../create-outline.svg";
import "./TopBar.css";

function TopBar() {
  const [currentUserState] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    setCurrentUser(currentUserState.currentUser);
    setIsLogedIn(currentUserState.isLogedIn);
  }, [currentUserState]);
  // console.log("first", currentUserState.currentUser);
  return (
    <nav className="navbar navbar-light bg-dark-subtle">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="navbar-nav flex-row pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {isLogedIn ? (
            <>
              <li className="nav-item ">
                <NavLink to="/article/new" className="nav-link">
                  <i className="ion-compose" />
                  &nbsp; New Post
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a" />
                  &nbsp; Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUser.username}`}
                  className="nav-link d-flex align-items-center"
                >
                  <img
                    className="user-pic"
                    // src="https://www.gravatar.com/avatar/86c9a73ce8f4e6eceed1a3ffeb4f2c37"
                    src={currentUser.image}
                    alt="user avatar"
                  />
                  {/* &nbsp; */}
                  {currentUser.username}
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
