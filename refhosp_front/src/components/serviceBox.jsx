import React from 'react';
import { Link } from 'react-router-dom';

function ServiceBox(props)
{
    const title = props.title;
    const desc = props.desc;
    const link = props.link;
    const img = props.img;

    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <Link to={{pathname: '/serviceDesc', search: `?title=${title}&image=${img}`}} >
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ServiceBox;