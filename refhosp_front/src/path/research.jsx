import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import FileDownload from 'js-file-download'
import axios from 'axios'
function Research()
{

  const [data, setData] = useState([]);

  const getUserData = async () =>
  {
    const res = await axios.get("http://localhost:5000/research", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.data.status == 201) {
      console.log("data get");
      setData(res.data.data);

    } else {
      console.log("error");
    }
  };
  async function handleDownload(id)
  {
    // e.preventDefault();

    await axios.get(`http://localhost:5000/researchdownload${id}`, {
			responseType:{Blob}
		})
			.then(res =>
			{
				console.log(res);
				FileDownload(res.data, 'Research Document')
			})
			.catch(err => console.log(err));
  }
  useEffect(() =>
  {
    getUserData();
    document.title = "RESEARCH";
  }, []);
  return (
    <>
      <Header />
      <section className="py-5 research">
        <div className="container-sm">
          <div className="title d-flex align-items-center justify-content-between mb-2">
            <h3>Researches Made </h3>
            {/* <a className="btn btn-primary btn-login" href="./library.html">LIbrary</a> */}
            {/* <Link className="btn btn-primary btn-login" to="/library">
              Library
            </Link> */}
          </div>
          <table className="table">
            <thead className="thead-dark bg-custom text-white">
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Author</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {
                
                data.length > 0 ? data.map((el) =>
                {
                  return (
                    <>
                      <tr>
                        {/* <th scope="row">{el.id</th> */}
                        <td>{el.author}</td>
                        <td>{ el.title}</td>
                        <td>{ el.year}</td>
                        <td>
                          <a href="#"
                          onClick={()=> handleDownload(el.id)}
                          >
                            Download link
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                }) : <p>No Researched Available</p>
              }
              {/* <tr>
                <th scope="row">1</th>
                <td>Name of Author</td>
                <td>Title of the research</td>
                <td>Year the research is made</td>
                <td>
                  <a href="#">
                    Download link{" "}
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </td>
              </tr> */}

            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Research;
