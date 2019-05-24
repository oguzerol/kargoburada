import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import truckImage from "../images/img@kamyon_2-1.jpg"

const ChooseBest = () => {
  return (
    <Container className="section-container">
      <section>
        <Row>
          <Col sm="12" md="4" className="item-column-wrapper">
            <h2 className="section-title section-title-big">
              Kargo şirketlerinin özel fiyatlarını gör , en iyisini ve en
              ucuzunu seç .
            </h2>
            <div className="section-item-wrapper">
              <div className="item-column">
                <p className="item-title one-item-title">
                  Önde gelen kargo şirketlerinin size özel fiyatlarını gör ,
                  gönderim zamanlarını ve kargo fiyatlarını karşılaştır ,
                  seçtiğin kargo şirketi ile ürünlerini indirimli gönder .
                </p>
                <Link className="item-link one-item-link" to="/">
                  Daha fazla
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="12" md={{ size: 5, offset: 3 }} className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-big-img-wrapper">
                  <img src={truckImage} alt="best choice for cargo" />
                </figure>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default ChooseBest
