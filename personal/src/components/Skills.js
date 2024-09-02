import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Mission</h2>
              <p>
                The Organization shall have the general objective of improving
                the overall competitiveness and viability of the agriculture
                industry, and to contribute to a sustainable and thriving
                agriculture sector and specific objectives.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    Promoting knowledge sharing and best practices in
                    agriculture
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    Facilitating networking and collaboration among agriculture
                    bractitioners
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Providing education and training opportunities</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    Advocating for the needs and interests of the agriculture
                    community and industry
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />

                  <h5>
                    Supporting the development of new and innovative
                    technologies
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    Encouraging sustainability and environmental responsibility
                    within the agriculture industry.
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
