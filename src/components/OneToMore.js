import React from "react"
import { Container, Row, Col } from "reactstrap"

import brandImage from "../images/img@coklu-kargo.png"

const OneToMore = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              Çoklu kargo gönderimleri için basit araçlar.
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  Tüm kargolarınızı basit excel tablomuza girin. İsterseniz
                  düzenlemeler yapın, kargoburada sistemine yükleyin.
                </p>
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

export default OneToMore
