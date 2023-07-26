import Header from "../components/header";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

function BloodBank() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  const img = new URLSearchParams(location.search).get("image");
  let desc;
  switch (title) {
    case "Blood Bank":
      desc =
        "Our hospital has a well-equipped blood bank with all blood types readily available. We maintain the highest standards of safety and cleanliness in our blood bank.";
      break;
    case "Ambulance":
      desc =
        "Our ambulance service is available 24/7 to transport patients to and from our hospital. Our ambulances are equipped with all necessary medical equipment and staffed by trained professionals.";
      break;
    case "Kidney Dialysis":
      desc =
        "Kidney dialysis is a service offered by hospitals to patients suffering from kidney failure. It involves the use of a machine to filter the patient blood removing waste products and excess fluids that would normally be eliminated by the kidneys";
      break;
    case "Cancer Treatment":
      desc =
        "Cancer treatment is a vital service provided by hospitals to patients diagnosed with cancer. The service includes a wide range of medical interventions, such as chemotherapy, radiation therapy, surgery, and immunotherapy.";
      break;
    default:
      break;
  }
  return (
    <>
      <Header />
      <section className="slides">
        <div className="container-sm">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="img-responsive" src={img} alt="First slide" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services py-3 bg-light">
        <div className="container-sm">
          <div className="row gap-3 justify-content-center">
            <div className="col-sm-5">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BloodBank;
