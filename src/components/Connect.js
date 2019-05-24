import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import brandImage from "../images/img@anasayfa-logolar.jpg"

const Connect = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              E-ticaret sitenle bağlan , kargo sipariş bilgilerini otomatik
              aktar.
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  Kullanıcı dostu panelimiz ile internet siparişlerini ve
                  kargolarını aynı ekranda gör . İstediğin siparişleri sistemden
                  kolayca gönder.
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

export default Connect
