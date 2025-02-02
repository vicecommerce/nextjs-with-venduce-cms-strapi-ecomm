import React from "react";
import { Container, Media, Row, Col } from "reactstrap";
import five from "../../../../../public/assets/images/electronics/5.jpg";
import six from "../../../../../public/assets/images/electronics/6.jpg";
import seven from "../../../../../public/assets/images/electronics/7.jpg";

const Data = [
  { img: five, item: "speaker", offer: "10% off" },
  { img: six, item: "earplug", offer: "10% off" },
  { img: seven, item: "best deal", offer: "50% off" },
];

const Banner = ({ img, item, offer }) => {
  return (
    <Col md="4">
      <a href="#">
        <div className="collection-banner p-right text-right">
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

const Collection = () => {
  return (
    <section className="banner-padding banner-goggles ratio2_1">
      <Container>
        <Row className="partition3">
          {/* <Col md="4">
            <a href="#">
              <div className="collection-banner p-right text-right">
                <div className="img-part">
                  <Media
                    src={five}
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
              <div className="collection-banner p-right text-right">
                <div className="img-part">
                  <Media
                    src={six}
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
              <div className="collection-banner p-right text-right">
                <div className="img-part">
                  <Media
                    src={seven}
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
              <Banner img={data.img} item={data.item} offer={data.offer} />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Collection;
