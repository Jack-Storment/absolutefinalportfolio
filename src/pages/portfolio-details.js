import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/details-1.jpg";
import imgS1 from "../assets/image/jpg/details/details-6.jpg";
import imgS2 from "../assets/image/jpg/details/details-5.jpg";
import imgS3 from "../assets/image/jpg/details/details-4.jpg";
import imgS4 from "../assets/image/jpg/details/details-3.jpg";
import imgS5 from "../assets/image/jpg/details/details-8.jpg";
import imgS6 from "../assets/image/jpg/details/details-7.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">React Native app</Text>
                <Title variant="secSm" className="my-4">
                Personalizing the Passenger Experience.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
               With 82,000,000,000 minutes per year spent in ride-hailing vehicles, rides should be more than just about getting from point A to point B. Ivee is creating personalized passenger experiences that make a ride as relaxing as a spa, as productive as your office, or as entertaining as a home theater.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  Ivee
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  June 1, 2020 - Present
                </Title>
              </Col>
              <Col lg="4">
                <Button onclick="location.href='https://goivee.com/'';" arrowRight>Website</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5">
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
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Key Findings
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Basics
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating an infotainment system in Uber and Lyft we had to think outside the box from the normal competitors like Octopus. The other competition had games but they did not have an immersive music, spa and theatre like experience.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                  The goal of Ivee ultimately is to provide better rides for people and the planet by offering passengers in ride-hailing vehicles a personalized passenger experiences that make a ride as relaxing as a spa, as productive as your office, or as entertaining as a home theater. Ivee partners with electric vehicles and offers an extra $100 per month on 40 hours of driving, or $2.50 for every hour of driving.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Problems
                </Title>
                <Text variant="p">
                  The main problem we ran into was scale. Ivee has a little over a hundred tablets out in the field in LA, Miami and Chicago but it was hard to get the venture capital funding necessary for achieving scale.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Solutions
                </Title>
                <Text variant="p">
                  To satisfy our goal of creating a brand that could adapt
                  across many use cases, we took the base design and applied it to different modes like Learn mode, Relax mode, Watch mode, etc. to offer a satisfying UI/UX that would set us apart from competitors. As long as the structural outline
                  of the mark stayed consistent their brand was allowed to flex
                  and adapt to specific uses.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section mt="22%" bg="dark">
          <Container>
            <Row
              css={`
                margin-top: -40%;
              `}
            >
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
                  //Replace
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
