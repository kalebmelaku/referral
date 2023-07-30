/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faGavel,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
function SideNav(props) {
  const state = props.state;
  const navigate = useNavigate()
  function logout(){
    navigate('/')
    localStorage.removeItem('status')
  }
  return (

    <>
      <nav id="sidebar" className={state ? "shrinked" : ""}>
        <ul className="list-unstyled">
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/dashboard">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faGavel} />
              </svg>
              <span>Bids </span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/researchupload">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faBookAtlas} />
              </svg>
              <span>Research</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" onClick={logout}>
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </svg>
              <span>Logout </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNav;
