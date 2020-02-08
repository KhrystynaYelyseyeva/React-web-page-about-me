import React from "react";
import './Main.css';
import logo from "./img/IFlogo.svg";
import resume from "./img/CV.jpg";


class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="container" id="about">
                    <div className="about-div">
                        <p>I'm</p>
                        <h1>KHRYSTYNA YELYSEYEVA</h1>
                        <img className="mylogo" src={logo} alt="logo"/>
                        <p>I'm a passionate</p>
                        <p className="pr">Graphic Designer</p>
                        <p>and</p>
                        <p className="pr">Front-End Developer</p>

                        <section className="section1">
                            <a href="#resume"><span></span></a>
                        </section>
                    </div>
                </section>


                <section id="resume">
                    <div className="flex-container">
                        <div className="resume-container">
                            <a target="_self" href={resume}>
                                <img src={resume} alt="Resume"/>
                            </a>
                        </div>
                    </div>
                </section>


                <section id="portfolio">
                    <h2>Graphic Design</h2>
                    <hr/>
                    <div className="flex-container">
                        <div className="gallery">
                            <a target="_self" href="https://www.prostir.ua/wp-content/uploads/2018/11/31662264_1813125375648242_45236347908128768_n.png">
                                <img src="https://www.prostir.ua/wp-content/uploads/2018/11/31662264_1813125375648242_45236347908128768_n.png" alt="State Watch logo"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/475b1469422063.5b80624ab6e86.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/475b1469422063.5b80624ab6e86.jpg" alt="Kalush logo"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af081c69421583.5b805de5c00fe.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af081c69421583.5b805de5c00fe.jpg" alt="Marsala logo"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a778369420737.5b80573eaeb73.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a778369420737.5b80573eaeb73.jpg" alt="Ivodent logo"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4b84463764529.5abb88df49e48.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4b84463764529.5abb88df49e48.jpg" alt="Standard Design logo" className="x"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/460f1d74282837.5c2a1ca42fbd3.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/460f1d74282837.5c2a1ca42fbd3.jpg" alt="Tour Space logo"className="x"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/84a11069434125.5b810c36025e9.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/84a11069434125.5b810c36025e9.jpg" alt="B Weather logo" className="x"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f219e69404353.5b7fd62f74a81.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f219e69404353.5b7fd62f74a81.jpg" alt="Invest Grand logo" className="x"/>
                            </a>
                        </div>
                        <div className="gallery">
                            <a target="_self" href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2978069404939.5b7fdb94801c1.jpg">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2978069404939.5b7fdb94801c1.jpg" alt="Kremenchuk logo" className="x"/>
                            </a>
                        </div>
                    </div>
                </section>


                <section id="contact">
                    <div className="contact-container">
                        <div>
                            <h2>Contact Me</h2>
                            <hr style={{"backgroundColor": "#282c34"}}/>
                            <p>Swing by for a cup of coffee, or leave me a message:</p>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src="https://transparentcities.in.ua/storage/app/public/images/252/image/2/600/YifWD1557837334jVSIF.jpeg" alt="contact"/>
                            </div>
                            <div className="column">
                                <form action="">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname"
                                           placeholder="Your last name.."/>
                                    <label htmlFor="subject">Subject</label>
                                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                                    <input type="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        )
    }
}

export default Main;