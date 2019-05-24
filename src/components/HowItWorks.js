import React from "react"
import { Container, Row, Col } from "reactstrap"

import howItWorksImage from "../images/item@entegre.png"
import cargoImage from "../images/img@kb_price_180.svg"
import packetImage from "../images/img@3-adim.png"
import followImage from "../images/img@4-adim.png"

const HowItWorks = () => {
  return (
    <Container className="section-container">
      <section>
        <h2 className="section-title">Nasıl Çalışır ?</h2>
        <Row>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={howItWorksImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Ne Göndermek İstediğini Belirle.</p>
                <p className="item-desc">
                  E-ticaret sitenle veya pazaryeri dükkanın ile entegre ol ,
                  siparişlerini otomatik aktar . Veya kargo bilgilerini tek tek
                  oluştur.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={cargoImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Kargo firmanı seç .</p>
                <p className="item-desc">
                  Önde gelen kargo firmalardan istediğini seç %70 indirimli
                  avantajlı öde .
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={packetImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Paketle ve gönder .</p>
                <p className="item-desc">
                  Sipariş numarasını not et , kargo şirketinin paketi almasını
                  bekle veya istediğin şubeye teslim et.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={followImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Takip et .</p>
                <p className="item-desc">
                  Kargonun nerede olduğunu , ne zaman teslim edildiğini
                  sistemden kolayca takip et.İstersen alıcıya, sms ve mail ile
                  bilgilendirmemizi iste
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default HowItWorks
