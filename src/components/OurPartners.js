import React from "react"
import { Container, Row, Col } from "reactstrap"

import pttImage from "../images/icon@ptt.png"
import suratImage from "../images/icon@surat.png"
import upsImage from "../images/icon@ups.png"

const OurPartners = () => {
  return (
    <Container className="section-container section-integrations">
      <section>
        <h2 className="section-title">Önde gelen kargo partnerlerimiz.</h2>
        <Row className="centered">
          <Col sm="12" md={{ size: 3 }} className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={pttImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Ptt Kargo</p>
                <p className="item-desc">
                  Entegre takip ve izleme özelliklerine sahip ekonomik,ulusal ve
                  uluslararası kargo şirketi.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={suratImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Sürat Kargo </p>
                <p className="item-desc">
                  Entegre takip ve izleme özelliklerine sahip ekonomik,ulusal ve
                  uluslararası kargo şirketi.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={upsImage} alt="homepage banner" />
                </figure>
                <p className="item-title">UPS</p>
                <p className="item-desc">
                  Entegre takip ve izleme özelliklerine sahip ekonomik,ulusal ve
                  uluslararası kargo şirketi.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default OurPartners
