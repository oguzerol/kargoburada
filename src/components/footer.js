import { Link } from "gatsby"
import React, { PureComponent } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <Navbar light expand="md">
          <NavbarBrand tag={Link} to="/">
            kargo<span>burada</span>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            Copyright © 2019 Kargoburada.com. Tüm hakları saklıdır.
          </Nav>
        </Navbar>
      </footer>
    )
  }
}

export default Footer
