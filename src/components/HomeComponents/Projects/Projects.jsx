import "animate.css";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import checkCircle from "../../../images/check-circle.svg";
import projectThumb from "../../../images/project-thumb.svg";
import "./Projects.css";

// slider next prev
const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"PreviousArrow"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"NextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: false,
    thumb: projectThumb,
  },
  {
    id: 2,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 5,
    thumb: projectThumb,
  },
  {
    id: 3,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 2,
    thumb: projectThumb,
  },
  {
    id: 4,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 10,
    thumb: projectThumb,
  },
];

const Projects = () => {
  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // handle onclick
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const [like, setLike] = useState(0);

  const handleOnclick = (id) => {
    setIsClicked("clicked");
    setClickedId(id);
  };

  const handleLike = (id) => {
    projects.find((project) => project.id === id).like += 1;
    setLike(projects.find((project) => project.id === id).like);
  };

  return (
    <div id="projects" className="projects-section">
      <Container className="py-5">
        <h3 className="section-title">PROJECTS</h3>
        <div className="mt-5">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                key={project.id}
                className="single-slide"
              >
                <Card className="pt-2 pt-md-4 ps-2 ps-md-4 pe-2 pe-md-4">
                  <Card.Img variant="top" src={project.thumb} />
                  <Card.Body>
                    <Card.Title
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      className="project-title"
                    >
                      {project.title}
                    </Card.Title>
                    <div className="d-flex justify-content-center  justify-content-md-end align-items-center gap-2 gap-md-4">
                      <div
                        data-aos="fade-up-right"
                        data-aos-duration="1500"
                        onClick={() => handleLike(project.id)}
                        className="like-button"
                      >
                        {!project.like ? <AiOutlineHeart /> : <AiFillHeart />}
                        <span>{project.like}</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="link-button"
                      >
                        <a
                          href="http://example.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLink2 />
                        </a>
                      </div>
                      <div>
                        <Button
                          data-aos="fade-up-left"
                          data-aos-duration="1500"
                          variant="text"
                          style={{
                            backgroundColor: "#EBF3F9",
                            color: "#315CA7",
                          }}
                          onClick={() => handleOnclick(project.id)}
                          className="d-flex gap-1 gap-md-2 align-items-center view-button"
                        >
                          View Details
                          {isClicked && clickedId === project.id ? (
                            <BsChevronUp />
                          ) : (
                            <BsChevronDown />
                          )}
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <div
                  className={`${"project-details-box p-4"} ${
                    isClicked === "clicked" && clickedId === project.id
                      ? "clicked-box"
                      : ""
                  } ${
                    isClicked === "clicked" && clickedId === project.id
                      ? "animate__animated animate__fadeInUp animate__faster"
                      : "animate__animated animate__fadeOutDown"
                  }`}
                >
                  {isClicked === "clicked" && clickedId === project.id ? (
                    <div>
                      <div className="project-des">
                        <h3 data-aos="fade-down" className="project-box-title">
                          Description
                        </h3>
                        <p data-aos="fade-down" className="project-des">
                          {project.description}
                        </p>
                      </div>
                      <div className="features">
                        <h3 data-aos="fade-right" className="project-box-title">
                          Features
                        </h3>
                        <div className="my-3">
                          {project.features.map((feature) => (
                            <div
                              data-aos="fade-right"
                              className="d-flex align-items-start gap-1 gap-md-2"
                            >
                              <img
                                src={checkCircle}
                                className="check-circle"
                                alt="check-circle"
                              />
                              <p className="project-des">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="tech-used">
                        <h3 data-aos="fade-up" className="project-box-title">
                          Tech Used
                        </h3>
                        <div className="my-3 d-flex gap-1 gap-md-3 flex-wrap">
                          {project.technologies.map((tech) => (
                            <div
                              data-aos="fade-up"
                              className="d-flex flex-row align-items-start gap-1 gap-md-2"
                            >
                              <img
                                src={checkCircle}
                                className="check-circle"
                                alt="check-circle"
                              />
                              <p className="project-des">{tech}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
