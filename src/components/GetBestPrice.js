import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import computerImage from "../images/img@bilgisayar-kargo-fiyat.png"

const GetBestPrice = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              En İyi fiyatları al , %70 indirimli gönder.
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  Kargo şirketlerinin size özel fiyatlarını karşılaştır , en
                  ucuza kolayca gönder.Aylık çoklu gönderimlerde ekstra
                  indirimler kazan.
                  <i>Ne kadar kazançlı olduğunu ücretsiz hesaplayabilirsin .</i>
                </p>
                <Link className="item-link one-item-link" to="/">
                  Hesaplama Yap
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
                  <img src={computerImage} alt="best choice for cargo" />
                </figure>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default GetBestPrice
