import { Link } from "gatsby"
import React from "react"
import { Container, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorks from "../components/HowItWorks"
import AllInOnePlace from "../components/AllInOnePlace"
import ChooseBest from "../components/ChooseBest"
import GetBestPice from "../components/GetBestPrice"
import Connect from "../components/Connect"

import bannerImage from "../images/banner@homepage.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Anasayfa" />
    <Container>
      <div className="banner-wrapper">
        <img src={bannerImage} alt="homepage banner" />
      </div>
      <div className="signup-holder">
        <p>
          Göndermek için hazır mısın? Ücretsiz üye ol, %70 indirimli gönder.
        </p>
        <Button tag={Link} to="uye-ol" outline color="warning">
           Üye ol
        </Button>
      </div>
    </Container>
    <Container fluid className="page-content-wrapper">
      <AllInOnePlace />
      <HowItWorks />
      <ChooseBest />
      <GetBestPice />
      <Connect />
    </Container>
  </Layout>
)

export default IndexPage
