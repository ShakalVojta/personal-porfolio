import "/resources/scss/portfolio-page/Homepage.scss";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import WelcomePage from "./WelcomePage";

function Homepage() {
    return ( 
        <>
            <WelcomePage />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>

     );
}

export default Homepage;