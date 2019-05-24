import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import brandImage from "../images/img@eticaret-kutu.png"

const EasyIntegration = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              E-ticaret siteni entegre et. Kolayca gönder.
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  E-ticaret sitelerini tek tuşla entegre et. Tüm siparişlerini
                  ve kargo bilgilerini aynı ekranda gör, basitçe gönder.
                </p>
                <Link className="item-link one-item-link" to="/">
                  Daha Fazla
                </Link>
              </div>
            </div>
          </Col>
          <Col
            sm="12"
            md={{ size: 5, offset: 3 }}
            className="item-column-wrapper"
          >
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-big-img-wrapper">
                  <img src={brandImage} alt="best choice for cargo" />
                </figure>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default EasyIntegration
