import React from "react"
import { Container, Row, Col } from "reactstrap"

import featureImgOne from "../images/icon@integrations.svg"
import featureImgTwo from "../images/icon@tracking.svg"
import featureImgThree from "../images/icon@carrier_options.svg"
import featureImgFour from "../images/icon@contract.svg"
import featureImgFive from "../images/icon@returns.svg"
import featureImgSix from "../images/icon@price.svg"
import featureImgSeven from "../images/icon@support.svg"

const FeatureList = () => {
  return (
    <Container>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgOne} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">
                E-ticaret entegrasyonu.
              </span>
            </Col>
            <Col sm="2" className="feature-list-item-soon">
              <span>Yakında</span>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>Siparişlerinizi ve kargo bilgilerinizi otomatik aktarın.</span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgTwo} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">Kargo Takip</span>
            </Col>
            <Col sm="2" className="feature-list-item-soon" />
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>Kargo gönderimlerinizi gerçek zamanlı takip edin.</span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgThree} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">
                Fiyat karşılaştırma.
              </span>
            </Col>
            <Col sm="2" className="feature-list-item-soon" />
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>
            Önde gelen kargo şirketlerinin özel fiyatlarını karşılaştırın.
          </span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgFour} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">
                Ücretsiz aylık üyelik.
              </span>
            </Col>
            <Col sm="2" className="feature-list-item-soon" />
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>Ücretsiz üye olun, kullandığınız kadar ödeyin.</span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgFive} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">
                Ön ödemeli iade kargo.
              </span>
            </Col>
            <Col sm="2" className="feature-list-item-soon">
              <span>Yakında</span>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>
            Iade kargo ödemelerini üstlenin, müşteri memnuniyetini arttırın.
          </span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgSix} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">
                Kapıda sipariş ödeme.
              </span>
            </Col>
            <Col sm="2" className="feature-list-item-soon">
              <span>Yakında</span>
            </Col>
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>
            Müşterileriniz kargo tesliminde kapıda ürün ödemesi yapabilir.
          </span>
        </Col>
      </Row>
      <Row className="feature-list-item">
        <Col sm="12" md="6">
          <Row>
            <Col sm="10" className="feature-list-item-info">
              <figure className="feature-list-item-img">
                <img src={featureImgSeven} alt="feature img" />
              </figure>
              <span className="feature-list-item-title">Müşteri destek.</span>
            </Col>
            <Col sm="2" className="feature-list-item-soon" />
          </Row>
        </Col>
        <Col sm="12" md="6" className="feature-list-item-desc">
          <span>Entegrasyonlar için size özel e-posta ve telefon desteği.</span>
        </Col>
      </Row>
    </Container>
  )
}

export default FeatureList
