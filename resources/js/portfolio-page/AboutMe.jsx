import "/resources/scss/portfolio-page/AboutMe.scss";
import Notebook from "/public/img/about-img.webp"
import SVG from "/public/img/circle.svg"
import icon from "/public/img/ntb-icon.png"

function AboutMe() {
    return ( 
        <section id="about-me" className="about-me">
            <div className="container">
                <div className="image-side">
                    <img src={icon} alt="humin with computer icon" className="work-icon"/>
                    <img src={Notebook} alt="Working table" className="main-img"/>
                    <span>
                        <img src={SVG} alt="circle full stack developer" />
                    </span>
                </div>
                <div className="text-side">
                    <h3>About me</h3>
                    <h4>Full-stack Developer based in Prague and České Budějovice, Czech republic 📍</h4>
                    <p>Hey, my name is Vojtěch, and I'm a Full-Stack Developer. My goal is to work in a company where I can delivery a bussiness value while also leveling up my skills as a developer.</p>
                    <p>I develop full-stack web apps with JavaScript and PHP, combining front-end and back-end technologies for user-friendly solutions. I enjoy coding and continually seek to enhance and expedite my work.</p>
                </div>
            </div>
        </section>
     );
}

export default AboutMe;