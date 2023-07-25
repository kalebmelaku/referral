import React, { useEffect } from 'react'
import Footer from '../components/footer';
import Header from '../components/header';

function Library()
{
    useEffect(() =>
    {
        document.title = 'LIBRARY';
    })
  return (
      <>
          <Header/>
          	<div className="container my-3 bids">
		
		<div className="row justify-content-center gap-4 align-items-stretch">
			<div className="col-md-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Title</h5>
						<div className="row-bid justify-content-between align-items-center">
							<div>
								<p className="card-text">File Name</p>
							</div>
							<div>
								<a href="#" className=""><i className="fas fa-download"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Title</h5>
						<div className="row-bid justify-content-between align-items-center">
							<div>
								<p className="card-text">File Name</p>
							</div>
							<div>
								<a href="#" className=""><i className="fas fa-download"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Title</h5>
						<div className="row-bid justify-content-between align-items-center">
							<div>
								<p className="card-text">File Name</p>
							</div>
							<div>
								<a href="#" className=""><i className="fas fa-download"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Title</h5>
						<div className="row-bid justify-content-between align-items-center">
							<div>
								<p className="card-text">File Name</p>
							</div>
							<div>
								<a href="#" className=""><i className="fas fa-download"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
          </div>
          <Footer/>
      </>
  )
}

export default Library