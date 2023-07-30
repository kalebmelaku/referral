import { useState } from "react";
import axios from "axios";
function ResearchUploadComp()
{
  const [feedback, setFeedback] = useState(false);
  const [status, setStatus] = useState('')
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState("");

  const handleInputChange = (event) =>
  {
    setYear(event.target.value);
  };

  const handleInputBlur = () =>
  {
    if (year < 1900 || year > 2099) {
      setFeedback(!feedback);
      setYear("");
    } else {
      setFeedback(false);
    }
  };

  const setimgFile = (e) =>
  {
    setFile(e.target.files[0]);
  };
  const setResTitle = (e) =>
  {
    setTitle(e.target.value);
  };
  const setResAuthor = (e) =>
  {
    setAuthor(e.target.value);
  };
  async function handleForm(e)
  {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("year", year);
    formData.append("title", title);
    formData.append("author", author);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/uploadres",
      formData,
      config
    );
    if (res.data.status == 201) {
      setStatus('Successfully Uploaded')
    } else {
      setStatus('Error uploading')
    }
  }

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row gy-4 mx-auto">
            <div className="brand-text d-flex align-items-center justify-content-between mx-auto text-uppercase brand-big">
              <div className="texts mx-auto">
                <h3 className="text-center">Upload Research Publications</h3>
                <p className="my-3 text-center">{status}</p>
              </div>
            </div>
            <div className="col-sm-6 mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <form onSubmit={handleForm}>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputEmail1">Name of Author</label>
                      <input
                        type="text"
                        className="form-control"
                        name="bidName"
                        onChange={setResAuthor}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Title of Research
                      </label>
                      <input type="text" className="form-control"
                      onChange={setResTitle}
                      />
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
                        name="photo"
                        onChange={setimgFile}
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
