import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllInOnePlace from "../components/AllInOnePlace"
import FeatureList from "../components/FeatureList"
import FreeAccount from "../components/FreeAccount"
import EasyIntegraton from "../components/EasyIntegration"
import OneToMore from "../components/OneToMore"
import ChooseBest from "../components/ChooseBest"
import Connect from "../components/Connect"

import ECommerceBannerImage from "../images/banner@eticaret-banner.jpg"

const KargoCozumleri = () => (
  <Layout>
    <SEO title="Page two" />
    <Container fluid>
      <div className="banner-wrapper--big">
        <figure className="banner-wrapper--big--img-wrapper">
          <img src={ECommerceBannerImage} alt="eticaret banner" />
        </figure>
        <div className="banner-wrapper--big--text">
          <h1 className="banner-wrapper--big--title">
            E-ticaret kargo maliyetlerinizi azaltın.
          </h1>
          <p className="banner-wrapper--big--desc">
            Ücretsiz üye ol, %70 indirimle gönderim yap. Önde gelen kargo
            şirketlerinin sana özel indirimlerini karşılaştır, istediğini seç.
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
      <AllInOnePlace />
      <FeatureList />
      <FreeAccount />
      <EasyIntegraton />
      <OneToMore />
      <Connect />
      <ChooseBest />
    </Container>
  </Layout>
)

export default KargoCozumleri
