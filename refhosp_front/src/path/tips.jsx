import { useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"


function Tips() {
    useEffect(()=>{
        document.title = "TIPS"
    })
  return (
    <>
    <Header/>
        <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="module text news-video no-border base-theme" id="">
		<div className="container-sm">
			<h2 className="title text-center">
				DOCUMENTARIES
			</h2>
			<div className="row py-4 gap-4">
				<div className="col-sm py-3 col-vid">
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjjushyrh%2Fvideos%2F8618879831486463%2F&show_text=true&width=560&t=0"
						width="100%" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></iframe>
				</div>
				<div className="col-sm py-3 col-vid">
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjjushyrh%2Fvideos%2F5487027758071876%2F&show_text=true&width=560&t=0"
						width="100%" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></iframe>
				</div>
			</div>

			<div className="row py-4 gap-4">
				<div className="col-sm py-3 col-vid">
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjjushyrh%2Fvideos%2F3240584836270505%2F&show_text=true&width=560&t=0"
						width="100%" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></iframe>
				</div>

				<div className="col-sm py-3 col-vid">
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjjushyrh%2Fvideos%2F648153356245117%2F&show_text=true&width=560&t=0"
						width="100%" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></iframe>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
    </>
  )
}

export default Tips