import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import staff from '../assets/img/staff.jpg'

function Academic()
{
    useEffect(() =>
    {
        document.title = 'ACADEMIC';
    });
    return (
        <>
            <Header />
            <section className="report">
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm px-0 d-flex bg-light align-items-start justify-content-center flex-column">
					<h4 className="text-cut mx-auto">Department Name</h4>
					<p className="text-cut-md mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
						aspernatur corrupti ea alias! Saepe, inventore rerum! Maxime eos porro magni voluptatem, neque
						possimus ipsum necessitatibus. Eligendi iure maxime voluptas ipsa itaque. Deleniti consectetur
						esse veniam ipsa, reprehenderit quisquam ipsum doloribus? Laudantium neque, distinctio dolorem
						consectetur commodi esse voluptas velit unde?</p>

				</div>
				<div className="col-sm px-0">
					<img src={staff} alt="" />
				</div>
			</div>
			<div className="row">
				<div className="col-sm px-0">
					<img src={staff} alt="" />
				</div>
				<div className="col-sm px-0 d-flex bg-light align-items-start justify-content-center flex-column">
					<h4 className="text-cut mx-auto">Department Name</h4>
					<p className="text-cut-md mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
						maiores reprehenderit fugit voluptatem dolor numquam facilis, ipsa, magnam aperiam debitis,
						recusandae deserunt quo? Laudantium adipisci consectetur dicta rerum quaerat nam, atque fuga,
						incidunt iure, harum ea nulla modi voluptatum sint voluptatibus nobis! Quibusdam neque, placeat
						labore molestiae veniam dolor ducimus.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm px-0 d-flex bg-light align-items-start justify-content-center flex-column">
					<h4 className="text-cut mx-auto">Department Name</h4>
					<p className="text-cut-md mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						esse, animi facilis quam perspiciatis porro nostrum quo laboriosam, minus culpa deserunt
						architecto vero repudiandae! Magnam unde tempore animi, rem, maiores possimus obcaecati quo illo
						consectetur ab accusamus sequi ut alias cupiditate veniam, corporis dicta nostrum debitis
						delectus illum repellat nobis?
					</p>
				</div>
				<div className="col-sm px-0">
					<img src={staff} alt="" />
				</div>

			</div>
			<div className="row">
				<div className="col-sm px-0">
					<img src={staff} alt="" />
				</div>
				<div className="col-sm px-0 d-flex bg-light align-items-start justify-content-center flex-column">
					<h4 className="text-cut mx-auto">Department Name</h4>
					<p className="text-cut-md mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
						excepturi laudantium, veritatis quas libero sint accusamus in magnam quia ullam unde consectetur
						aspernatur qui tempora beatae voluptatibus autem reprehenderit. Nam beatae animi laboriosam
						tenetur, vel maxime explicabo obcaecati, doloribus similique rerum id, sed fugiat expedita
						recusandae? Quidem obcaecati corrupti ipsam.
					</p>
				</div>

			</div>

		</div>
	</section>
            <Footer />
        </>
    );
}

export default Academic;