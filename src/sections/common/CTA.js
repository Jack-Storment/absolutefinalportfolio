import React, { useContext, iframe } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Box, Title, Text, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";
import iframe from 'react-iframe';

const CTA = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability />
              <div className="text-center my-5">
                <Title>Do you have a project? Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
              </div>
              <div>
              <iframe src="https://jackstorment.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>  
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default CTA;
