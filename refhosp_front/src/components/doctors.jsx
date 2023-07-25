import React, { useEffect, useState } from 'react';

function Doctors(props)
{
    const [clamp, setClamp] = useState(false)
    const docName = props.doc_name;
    const img = props.img;
    const title = props.title;
    const desc = props.desc;
    const email = props.email;
    function handleClick(event)
    {
        const clickedDiv = event.target.closest('.docs');
        if (clickedDiv) {
            setClamp(!clamp)
        }

    }
    return (
        <>
            <div className="py-2 col-md-5 bg-light docs " onClick={handleClick}>
                <div className="title">
                    <h4 className="text-center">{docName}</h4>
                </div>
                <div className="contents">
                    <div className="left-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="right-text">
                        <h5>{title}</h5>
                        <p className={clamp ? '' : 'clamp'}>{desc}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doctors;