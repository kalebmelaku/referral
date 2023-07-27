/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGrip,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function SideNav(props) {
  const state = props.state;
  return (
    <>
      <nav id="sidebar" className={state ? "shrinked" : ""}>
        <ul className="list-unstyled">
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/dashboard">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faHouse} />
              </svg>
              <span>Bids </span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/researchupload">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faGrip} />
              </svg>
              <span>Research</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                <FontAwesomeIcon icon={faChartLine} />
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
