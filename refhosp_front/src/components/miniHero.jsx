import React from 'react';
import howtohelp from '../assets/img/howtohelp.jpg'
function MiniHero(props)
{
    const text = props.text
    const img = props.img
    return (
        <main className="whoweare short text-cut">
		<img src={img} alt="" />
		<div className="container-sm my-0">
			<div className="inner-box">
				<h1 className="title text-light text-center my-0 ">
					{text}
				</h1>

			</div>
		</div>
	</main>
    );
}

export default MiniHero;