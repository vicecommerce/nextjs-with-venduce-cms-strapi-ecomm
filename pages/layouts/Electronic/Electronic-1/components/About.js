import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import sub1 from "../../../../../public/assets/images/electronics/sub1.jpg";
import sub2 from "../../../../../public/assets/images/electronics/sub2.jpg";
import sub3 from "../../../../../public/assets/images/electronics/sub3.jpg";

const Data = [
  { img: sub1, item: "speaker", offer: "10% off" },
  { img: sub2, item: "earplug", offer: "10% off" },
  { img: sub3, item: "best deal", offer: "50% off" },
];

const Banner = ({ img, item, offer }) => {
  return (
    <Col md="4">
      <a href="#">
        <div className="collection-banner">
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <div className="contain-banner banner-3">
            <div>
              <h4>{offer}</h4>
              <h2>{item}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
const About = () => {
  return (
    <Fragment>
      <section className="banner-goggles ratio2_3">
        <Container fluid={true}>
          <Row className="partition3">
            {/* <Col md="4">
              <a href="#">
                <div className="collection-banner">
                  <div className="img-part">
                    <Media
                      src={sub1}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="contain-banner banner-3">
                    <div>
                      <h4>10% off</h4>
                      <h2>speaker</h2>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col md="4">
              <a href="#">
                <div className="collection-banner">
                  <div className="img-part">
                    <Media
                      src={sub2}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="contain-banner banner-3">
                    <div>
                      <h4>10% off</h4>
                      <h2>earplug</h2>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col md="4">
              <a href="#">
                <div className="collection-banner">
                  <div className="img-part">
                    <Media
                      src={sub3}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="contain-banner banner-3">
                    <div>
                      <h4>50% off</h4>
                      <h2>best deal</h2>
                    </div>
                  </div>
                </div>
              </a>
            </Col> */}
            {Data.map((data) => {
              return (
                <Banner img={data.img} offer={data.offer} item={data.item} />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default About;
