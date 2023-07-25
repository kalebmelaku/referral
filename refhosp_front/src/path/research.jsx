import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Research()
{
    useEffect(() =>
    {
        document.title = 'RESEARCH';
    });
    return (
        <>
            <Header />
            <section className="py-5 research">
                <div className="container-sm">
                    <div className="title d-flex align-items-center justify-content-between mb-2">
                        <h3>Researches Made </h3>
                        {/* <a className="btn btn-primary btn-login" href="./library.html">LIbrary</a> */}
                        <Link className="btn btn-primary btn-login" to='/library'>Library</Link>
                    </div>
                    <table className="table">
                        <thead className="thead-dark bg-custom text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Year</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Name of Author</td>
                                <td>Title of the research</td>
                                <td>Year the research is made</td>
                                <td><a href="#">Download link <i className="fa fa-download" aria-hidden="true"></i></a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Name of Author</td>
                                <td>Title of the research</td>
                                <td>Year the research is made</td>
                                <td><a href="#">Download link <i className="fa fa-download" aria-hidden="true"></i></a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Name of Author</td>
                                <td>Title of the research</td>
                                <td>Year the research is made</td>
                                <td><a href="#">Download link <i className="fa fa-download" aria-hidden="true"></i></a></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Name of Author</td>
                                <td>Title of the research</td>
                                <td>Year the research is made</td>
                                <td><a href="#">Download link <i className="fa fa-download" aria-hidden="true"></i></a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Research;