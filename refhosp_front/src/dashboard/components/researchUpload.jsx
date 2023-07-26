import { useState } from "react";
function ResearchUploadComp() {
  const [year, setYear] = useState("");
  const [feedback, setFeedback] = useState(false);

  const handleInputChange = (event) => {
    setYear(event.target.value);
  };

  const handleInputBlur = () => {
    if (year < 1900 || year > 2099) {
      setFeedback(!feedback);
      setYear("");
    } else {
      setFeedback(false);
    }
  };
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row gy-4 mx-auto">
            <div className="brand-text d-flex align-items-center justify-content-between mx-auto text-uppercase brand-big">
              <div className="texts mx-auto">
                <h3 className="text-center">Upload Research Publications</h3>
              </div>
            </div>
            <div className="col-sm-6 mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <form>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputEmail1">Name of Author</label>
                      <input
                        type="text"
                        className="form-control"
                        name="bidName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Title of Research
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1">
                        Publication Year
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        min={1900}
                        max={2099}
                        step={1}
                        value={year}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {feedback ? (
                        <p className="text-danger text-xs italic mt-1">
                          Please enter a year between 1900 and 2099.
                        </p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Research File
                      </label>
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

export default ResearchUploadComp;
