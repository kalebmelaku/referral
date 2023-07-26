/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

function Bids() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row gy-4 mx-auto">
            <div className="brand-text d-flex align-items-center justify-content-between mx-auto text-uppercase brand-big">
              <div className="texts mx-auto">
                <h3 className="text-center">Upload Bids</h3>
              </div>
            </div>
            <div className="col-sm-6 mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <form>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputEmail1">Bid Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="bidName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">File</label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".doc,.docx,.pdf"
                      />
                    </div>
                    <button type="submit" className="btn-primary btn my-3">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bids;
