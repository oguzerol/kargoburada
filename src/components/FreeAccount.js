import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import brandImage from "../images/img@bilgisayar-kargo-fiyat.png"

const FreeAccount = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              Ücretsiz üye ol, ucuza gönder.
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  Önde gelen kargo şirketleri ile indirim anlaşmaları yapıyoruz.
                  Operasyonel maliyetlerinizi azalt, zamandan kazan. Kargonu
                  ucuza gönder.
                  <i>Ne kadar kazançlı olduğunu ücretsiz hesaplayabilirsin .</i>
                </p>
                <Link className="item-link one-item-link" to="/">
                  Hesaplama yap
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

export default FreeAccount
