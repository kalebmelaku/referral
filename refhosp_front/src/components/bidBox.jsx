/* eslint-disable react/prop-types */
import {BsDownload} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function BidBox(props) {
    const bidName = props.name
    const fileName = props.file
  return (
   <>
   <div className="col-md-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{bidName}</h5>
						<div className="row-bid justify-content-between align-items-center">
							<div>
								<p className="card-text">{fileName}</p>
							</div>
							<div>
								<Link to={fileName} className=""><BsDownload/></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
   </>
  )
}

export default BidBox