import Cards from "../Commonpages/Cards";
import Faq from "../Commonpages/Faq";
import Footer from "../Commonpages/Footer";
import Hero from "../Commonpages/Hero";
import Navbar from "../Commonpages/Navbar";


function Home() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <Cards/>
        <Faq/>
        <Footer/>
        </>
    )
}
export default Home;