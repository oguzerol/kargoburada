import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks"
import OurIntegrations from "../components/OurIntegrations"
import OurPartners from "../components/OurPartners"

import ECommerceBannerImage from "../images/banner@eticaret-banner.jpg"

const Entegrasyonlar = () => (
  <Layout>
    <SEO title="Entegrasyonlar" />
    <Container fluid>
      <div className="banner-wrapper--big">
        <figure className="banner-wrapper--big--img-wrapper">
          <img src={ECommerceBannerImage} alt="eticaret banner" />
        </figure>
        <div className="banner-wrapper--big--text">
          <h1 className="banner-wrapper--big--title">
            Siz satın biz gönderelim.
          </h1>
          <p className="banner-wrapper--big--desc">
            Sorunsuz entegrasyonla çevrimiçi satış yapmak hiç bu kadar kolay
            olmamıştı. Ücretsiz üye olun ve Kargoburada'nın gönderimlerinizi
            nasıl optimize ettğini görün.
          </p>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="signup-holder">
              <p>
                Göndermek için hazır mısın? Ücretsiz üye ol, %70 indirimli
                gönder.
              </p>
              <Button tag={Link} to="uye-ol" outline color="warning">
                 Üye ol
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className="page-content-wrapper">
      <HowItWorks />
      <OurIntegrations />
      <OurPartners />
    </Container>
  </Layout>
)

export default Entegrasyonlar
