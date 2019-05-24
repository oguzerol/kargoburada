import React from "react"
import { Container, Row, Col } from "reactstrap"

import openCardImage from "../images/icon@opencart.png"
import nopCommerceImage from "../images/icon@nopcommerce.png"
import magentoImage from "../images/icon@magento.png"
import wooCommerceImage from "../images/icon@woocommerce.png"
import othersImage from "../images/icon@others.png"
import gittiGidiyorImage from "../images/icon@gitti.png"
import n11Image from "../images/icon@n11.png"
import hepsiBuradaImage from "../images/icon@hepsiburada.png"

const OurIntegrations = () => {
  return (
    <Container className="section-container section-integrations">
      <section>
        <h2 className="section-title">Api Entegrasyonu</h2>
        <Row>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={openCardImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Opencart Entegrasyonu</p>
                <p className="item-desc">
                  Opencart siparişlerinizi bir defada toplu olarak senkronize
                  edin ve gönderilerinizi kolayca yönetin
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={nopCommerceImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Nopcommerce Entegrasyonu</p>
                <p className="item-desc">
                  Nopcommerce siparişlerinizi bir defada toplu olarak senkronize
                  edin ve gönderilerinizi kolayca yönetin
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={magentoImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Magento Entegrasyonu</p>
                <p className="item-desc">
                  Magento siparişlerinizi bir defada toplu olarak senkronize
                  edin ve gönderilerinizi kolayca yönetin
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={wooCommerceImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Woocommerce Entegrasyonu</p>
                <p className="item-desc">
                  Woocommerce siparişlerinizi bir defada toplu olarak senkronize
                  edin ve gönderilerinizi kolayca yönetin
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={othersImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Ne Göndermek İstediğini Belirle.</p>
                <p className="item-desc">
                  Kendi e-ticaret altyapınız varsa Kargoburada fiyatları ile
                  gönderim yapmak için Kargoburada API'yi kullanın
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={gittiGidiyorImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Gittigidiyor Entegrasyonu</p>
                <p className="item-desc">
                  Gittigidiyor mağazanızı tek tuşla senkronize edin en uygun
                  fiyatlarla gönderim yapın.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={n11Image} alt="homepage banner" />
                </figure>
                <p className="item-title">N11 Entegrasyonu</p>
                <p className="item-desc">
                  N11 mağazanızı tek tuşla senkronize edin en uygun fiyatlarla
                  gönderim yapın.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="12" md="3" className="item-column-wrapper">
            <div className="section-item-wrapper">
              <div className="item-column">
                <figure className="item-img-wrapper">
                  <img src={hepsiBuradaImage} alt="homepage banner" />
                </figure>
                <p className="item-title">Hepsiburada Entegrasyonu</p>
                <p className="item-desc">
                  Hepsiburada mağazanızı tek tuşla senkronize edin en uygun
                  fiyatlarla gönderim yapın.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default OurIntegrations
