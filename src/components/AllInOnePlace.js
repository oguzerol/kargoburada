import React from "react"
import { Container, Row, Col } from "reactstrap"

import allInOneImage from "../images/img@bekleyenler.png"

const AllInOnePlace = () => {
  return (
    <Container className="section-container">
      <section>
        <h2 className="section-title section-title-big">Siparişlerin ve kargoların tek yerde.</h2>
        <h5 className="section-desc">
          Kargoları aktarın, gönderin, takip edin. Kargo gönderildiğinde
          müşterileri bilgilendirin.
        </h5>
        <Row>
          <Col sm="12" className="item-column-wrapper">
            <div className="section-item-wrapper section-item-wrapper-one-image">
              <figure className="item-big-img-wrapper">
                <img src={allInOneImage} alt="homepage banner" />
              </figure>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default AllInOnePlace
