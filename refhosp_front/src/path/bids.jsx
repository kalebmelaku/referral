import Header from "../components/header";
import Footer from "../components/footer";
import BidBox from "../components/bidBox";
import axios from "axios";
import { useEffect, useState } from "react";
function Bids() {

  const [data, setData] = useState([]);

  const getUserData = async () => {
      const res = await axios.get("http://localhost:5000/bids", {
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (res.data.status == 201) {
          console.log("data get");
          setData(res.data.data)

      } else {
          console.log("error")
      }
  }
  useEffect(() => {
    getUserData()
    document.title = "BIDS";
  }, []);
  return (
    <>
      <Header />
      <div className="container my-3 bids">
        <div className="row justify-content-center gap-4 align-items-stretch">
          {
            data.length > 0 ? data.map((el)=>{
              return(
                  <>
                  <BidBox name={el.name} file={el.file} />
                  </>
                )
              }) : <p>No Bids Available</p>
            }
          {/* <BidBox name="Bid Name 2" file="File Name 2" />
          <BidBox name="Bid Name 3" file="File Name 3" />
          <BidBox name="Bid Name 4" file="File Name 4" /> */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bids;
