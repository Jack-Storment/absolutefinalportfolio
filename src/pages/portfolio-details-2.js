import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/jpg/details/details-42.jpg";
import imgS1 from "../assets/image/jpg/details/details-12.jpg";
import imgS2 from "../assets/image/jpg/details/details-11.jpg";
import imgS3 from "../assets/image/jpg/details/details-10.jpg";
import imgS4 from "../assets/image/jpg/details/details-9.jpg";
import imgS5 from "../assets/image/jpg/details/details-14.jpg";
import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper darkTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Text variant="tag">Trinagle Web Solutions</Text>
                  <Title className="my-4">
                    Highcraft Craft Beer Market <br /> Downtown Apex.
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                  Highcraft is passionate about bringing y'all the best quality craft beer on the market. Highcraft offers the best beer in North Carolina and arguably the entire world 🌎. Whether it is local beer like Raleigh Brewing Company or New Belgium and Sierra Nevada from Asheville! Their goal is to truly empower the communities that bring amazing beer to you.
                  </Text>
                </Box>
              </Col>
            </Row>

            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>

        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  Highcraft Downtown Apex
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Oct 15, 2021
                </Title>
              </Col>
              <Col lg="4" className="d-flex justify-content-lg-end">
                <Button arrowRight>Live work</Button>
                <Link to="https://wwww.highcraftapex.com"></Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5 pb-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>

        <Section bg="dark" className="pt-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="portfolio-details">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Replace
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
