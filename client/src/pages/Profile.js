import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/pagestyle.css";
// import profileImage from "../images/about.jpg";
import Modal from 'react-bootstrap/Modal'




import ProjectCard from "../components/ProjectCard";
import image1 from '../images/about.jpg';


const API = {
    getAppart: () => {
        return ([{
            image: image1,
            title: "New Appartment"
        },
        {
            image: image1,
            title: "New Appartment"
        },
        {
            image: image1,
            title: "New Appartment"
        },
        {
            image: image1,
            title: "New Appartment"
        },
        {
            image: image1,
            title: "New Appartment"
        },
        {
            image: image1,
            title: "New Appartment"

        }])
    }
}




class Profile extends Component {

    state = {
        appartments: [],
        showModal: false,
        catchid: ""


    };

    componentDidMount() {
        this.loadAppart();
    }

    open = (id) => {
        this.setState({ showModal: true, catchid: id });

    }

    close = (event) => {
        if (event) event.preventDefault();
        this.setState({ showModal: false });
    }






    loadAppart = () => {
        // API.getAppart()
        // .then(res =>
        //   this.setState({ appartments: res.data })
        // )
        // .catch(err => console.log(err));

        const appartments = API.getAppart()

        this.setState({ appartments: appartments })

    };


    render() {
        return (
            <body>
                <div id="colorlib-page">
                    <div class="container-wrap">

                        <aside id="colorlib-aside" role="complementary" className="border ">

                            <div class="text-center">


                                <img class="author-img" src={require('../images/about.jpg')} />
                                {/* <div class="author-img" style={{ backgroundImage: "url(" + { profileImage } + ")" }}></div> */}


                                <h1 id="colorlib-logo"><a href="/profile">Julian Ayllon</a></h1>
                                {/* <span class="position"><a href="#">Full Stack Web Developer</a><br /> in New Jersey</span> */}
                            </div>

                            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                                <div id="navbar" className="collapse">
                                    <ul>
                                        <li><Link to="#" data-nav-section="images">Images</Link></li>
                                        <li><Link to="#" data-nav-section="about">About</Link></li>
                                        <li><Link to="/">Main</Link></li>
                                        {/* <li><a href="#" data-nav-section="about">About</a></li>
                                <li><a href="#" data-nav-section="services">Projects</a></li>
                                <li><a href="#" data-nav-section="skills">Skills</a></li>
                                <li><a href="#" data-nav-section="education">Education</a></li>
                                <li><a href="#" data-nav-section="contact">Contact</a></li> */}
                                    </ul>
                                </div>
                            </nav>

                            <div className="colorlib-footer">
                                {/* <p>
                            <a href="https://github.com/cusco1982" style="color:black" target="_blank">Check out my
							GitHub!</a>
                        </p> */}
                                <ul>
                                    <li>
                                        <a className="icon-facebook2" style={{ color: "black" }} href="https://www.facebook.com/hooleean28" target="_blank" rel="noopener noreferrer">FB</a>
                                    </li>
                                    <li>
                                        <a className="twitter-logo" style={{ color: "black" }} href="https://twitter.com/hooleean28" target="_blank" rel="noopener noreferrer">Twitter</a>
                                    </li>
                                    <li>
                                        <a className="instagram-logo" style={{ color: "black" }} href="https://www.instagram.com/hooleean28" target="_blank" rel="noopener noreferrer">iG</a>
                                    </li>
                                    <li>
                                        <a className="linkedin-logo" style={{ color: "black" }} href="https://www.linkedin.com/in/julian-ayllon" target="_blank" rel="noopener noreferrer">linkedIn</a>
                                    </li>


                                    {/* <li><a href="https://www.facebook.com/hooleean28" target="_blank"><i class="icon-facebook2"
                                style="color:black"></i></a></li>
                            <li><a href="https://twitter.com/hooleean28" target="_blank"><i class="icon-twitter2"
                                style="color:black"></i></a></li>
                            <li><a href="https://www.instagram.com/hooleean28/" target="_blank"><i class="icon-instagram"
                                style="color:black"></i></a></li>
                            <li><a href="www.linkedin.com/in/julian-ayllon" target="_blank"><i class="icon-linkedin2"
                                style="color:black"></i></a></li> */}
                                </ul>
                            </div>

                        </aside>


                        {/*  <Link className="main-link" to="/">Main</Link>  */}

                    </div>
                </div>




                <div className="right-side-container">

                    <div id="image-container">
                        <div className="container-fluid">
                            {this.state.appartments.map(appartment => {
                                return <ProjectCard id={appartment._id} image={appartment.image}
                                    title={appartment.title} open={this.open}
                                />

                            })}
                        </div>


                        </div>
                        
                        <Modal
                            size="lg"
                            show={this.state.showModal} onHide={this.close}
                            aria-labelledby="example-modal-sizes-title-lg">
                            <Modal.Header closeButton>
                                {this.state.appartments.filter(appartment => {
                                    console.log(appartment)
                                    return appartment._id === this.state.catchid
                                }).map((appartment) => {
                                    return <Modal.Title id="example-modal-sizes-title-lg">
                                    
                                        {appartment.image}
                                    </Modal.Title>
                                })}
                            </Modal.Header>

                            <Modal.Body>


                            </Modal.Body>
                        </Modal>




                    <div className="about-me">
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, exercitationem numquam adipisci commodi quisquam quos reiciendis repellat laboriosam rerum et, doloribus neque? Expedita, accusantium necessitatibus dicta provident debitis nesciunt deleniti quibusdam id similique ratione ipsa laudantium distinctio repudiandae ducimus error. Quod cupiditate similique quam recusandae ipsam ea voluptatem magnam quasi totam, harum itaque sunt neque officia ad explicabo assumenda eos modi repellendus odio tempora, non minus maxime pariatur temporibus. At voluptas suscipit ad ut optio et dignissimos earum cum delectus, facere, doloremque neque unde enim fuga itaque! Fugit impedit enim qui tempore nulla, suscipit reiciendis at aspernatur earum fuga consectetur.</p>
                    </div>



                </div>





            </body>


        );
    }
}

export default Profile;