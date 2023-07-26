import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import hello from "../assets/img/hello.png";
import ebirr from "../assets/img/ebirr.png";
import sahay from "../assets/img/sahay.png";
import cbe from "../assets/img/cbe.png";
import dahabsill from "../assets/img/dahab.png";
import sahal from "../assets/img/sahal.png";
function Donate() {
  useEffect(() => {
    document.title = "DONATE";
  });
  return (
    <>
      <Header />
      <main className="donate">
        <div className="container-sm">
          <div className="inner-box text-center">
            <h1>MAKE DONATION TO OUR DIALYSIS CENTER</h1>
          </div>
        </div>
      </main>

      <section className="pay_option py-4 text-center">
        <div className="container-sm">
          <h1 className="text-custom ">YOUR DONATION CAN SAVE LIVES</h1>
          <p className="py-3 text-cut mx-auto">
            WE CAN ONLY PROVIDE FREE, HIGH-QUALITY HEALTHCARE THANKS TO GENEROUS
            SUPPORTERS LIKE YOU. TO GET STARTED, PLEASE CHOOSE WHERE YOU LIVE:
          </p>
          <div className="row">
            <div className="col-sm">
              <h5 className="my-0">HELLO CASH</h5>
              <img src={hello} alt="" />
              <p className="fs-3">2830524</p>
            </div>
            <div className="col-sm">
              <h5 className="my-0">EBIRR</h5>
              <img src={ebirr} alt="" />
              <p className="fs-3">809999</p>
            </div>
            <div className="col-sm">
              <h5 className="my-0">SAHAY</h5>
              <img src={sahay} alt="" />
              <p className="fs-3">976973</p>
            </div>
            <div className="col-sm">
              <h5 className="my-0">CBE</h5>
              <img src={cbe} alt="" />
              <p className="fs-3">1000326891766</p>
            </div>
            <div className="col-sm">
              <h5 className="my-0">DAHABSHILL</h5>
              <img src={dahabsill} alt="" />
              <p className="fs-3">WJLD3834</p>
            </div>
            <div className="col-sm">
              <h5 className="my-0">SAHAL MICRO FINANCE</h5>
              <img className="mt-1" src={sahal} alt="" />
              <p className="fs-3">1100515</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Donate;
