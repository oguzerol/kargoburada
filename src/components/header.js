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

class Header extends PureComponent {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">
          kargo<span>burada</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/kargo-cozumleri/">
                Kargo Çözümleri
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/entegrasyonlar">
                Entegrasyonlar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/fiyat">
                Fiyat
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/uye-ol">
                Üye ol
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header
