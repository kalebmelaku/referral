import { useEffect, useState } from "react";
// import Dark from './img/icons/moon.png';
import Bids from "./components/bids";
import SideNav from "./components/sideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./style/custom.css";
import "./style/light_mode.css";
import "./style/style.default.css";
export default function DashBoard() {
  const [navstate, setNavState] = useState(false);
  function sidebarToggler() {
    setNavState(!navstate);
  }
  const navigate = useNavigate()
  useEffect(() =>
  {
    
      const status = localStorage.getItem('status')
      if (status !== 'logged in') {
        navigate('/login')
      }
    
  })
  return (
    <div className="light App" id={"app"}>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">
          <div className="container-fluid d-flex align-items-center justify-content-between py-1">
            <div className="navbar-header d-flex align-items-center">
              <Link
                className={
                  navstate
                    ? "navbar-brand text-uppercase text-reset active"
                    : "navbar-brand text-uppercase text-reset"
                }
                to="#"
              >
                <div className="brand-text brand-big">
                  <strong>SHYCRH</strong>
                </div>
                <div className="brand-text brand-sm">
                  <strong>R</strong>
                  <strong>H</strong>
                </div>
              </Link>
              <button
                className={
                  navstate ? "sidebar-toggle active" : "sidebar-toggle"
                }
                onClick={sidebarToggler}
              >
                <svg className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="d-flex custom">
        <SideNav state={navstate} />
        <div className={navstate ? "page-content" : "page-content active"}>
          <Bids />
        </div>
      </div>
    </div>
  );
}
