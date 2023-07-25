import { useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import NewsRead from "../components/newsRead"
import NewsVid from "../components/newsVid"

function Blogs() {
    useEffect(()=>{
        document.title = "BLOGS"
    })
  return (
   <>
    <Header/>
    <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="module text news-video no-border base-theme" id="">
        <div className="container-sm">
          <h2 className="title text-center">
            WATCH RECENT NEWS
          </h2>
          <NewsVid />
          <h2 className="title text-center mt-5">
            READ RECENT NEWS
          </h2>
          <NewsRead />
        </div>
      </section>
    <Footer/>
   </>
  )
}

export default Blogs