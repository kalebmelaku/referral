/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
function Bids() {
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");
  const [status, setStatus] = useState('');
  const setdata = (e) => {
    setFName(e.target.value);
  };
  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleForm(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/uploadBid",
      formData,
      config
    );
    if (res.data.status == 201) {
      setStatus('Successfully Uploaded')
    } else {
      setStatus('Error uploading')
    }
  }

  // function handleFile(e){
  // e.preventDefault();
  // setFile(e.target.files[0])
  // console.log(file);
  // }
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row gy-4 mx-auto">
            <div className="brand-text d-flex align-items-center justify-content-between mx-auto text-uppercase brand-big">
              <div className="texts mx-auto">
                <h3 className="text-center">Upload Bids</h3>
                <p className="my-3 text-center">
                  {status}
                </p>
              </div>
            </div>
            <div className="col-sm-6 mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <form onSubmit={handleForm} encType="multipart/form-data">
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputEmail1">Bid Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        onChange={setdata}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">File</label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".doc,.docx,.pdf"
                        name="photo"
                        // value={file}
                        onChange={setimgfile}
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
