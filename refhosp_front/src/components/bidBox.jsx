/* eslint-disable react/prop-types */
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useEffect } from 'react';
import axios from 'axios'
import FileDownload from 'js-file-download'
function BidBox(props)
{
	const bidName = props.name;
	const fileName = props.file;
	const id = props.id;
	async function handleDownload(e)
	{
		e.preventDefault();
		await axios.get(`http://localhost:5000/download${id}`, {
			responseType:{Blob}
		})
			.then(res =>
			{
				console.log(res);
				FileDownload(res.data, res.data)
			})
			.catch(err => console.log(err));
	}
	useEffect(() =>
	{
		
	});
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
							<IconContext.Provider value={{ size: "2em", color: "#fff" }}>

								<div>
									<button onClick={handleDownload} className="btn text-white"><BsDownload /></button>
								</div>
							</IconContext.Provider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BidBox;