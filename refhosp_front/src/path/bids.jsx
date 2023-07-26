import Header from "../components/header";
import Footer from "../components/footer";
import BidBox from "../components/bidBox";
import { useEffect } from "react";
function Bids() {
  useEffect(() => {
    document.title = "BIDS";
  });
  return (
    <>
      <Header />
      <div className="container my-3 bids">
        <div className="row justify-content-center gap-4 align-items-stretch">
          <BidBox name="Bid Name 1" file="File Name 1" />
          <BidBox name="Bid Name 2" file="File Name 2" />
          <BidBox name="Bid Name 3" file="File Name 3" />
          <BidBox name="Bid Name 4" file="File Name 4" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bids;
