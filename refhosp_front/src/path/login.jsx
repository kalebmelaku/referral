import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stat, setStat] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          document.body.classList.remove("modal-open");
          console.log(document.body.classList);
          navigate("/dashboard");
          setStat(false);
        } else {
          setStat(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setStat(true);
      });
  }
  return (
    <>
      <Header />
      <div className="container-sm">
        <div className="col-sm-6 my-4 mx-auto">
          <div
            className=""
            id=""
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="">
                  <h5 className=" text-center" id="exampleModalLabel">
                    Login Page
                  </h5>
                </div>
                <div className="modal-body">
                  {stat ? (
                    <p className="text-danger">
                      Incorrect username or password
                    </p>
                  ) : null}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 btn btn-primary btn-login"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
