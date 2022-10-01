import { Component } from "react";
import { Navbar, NavbarBrand ,Nav, NavbarToggler,Collapse,NavItem} from "reactstrap";
import {NavLink} from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isNavOpen:false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  }

  render() {
    return (
      <>
        <Navbar dark  expand="md" color="primary">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand  className="mr-auto" href="/">
              <img src="assets/images/logo.png" high="30" width="41" alt="Ristaurent name" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" ></span> Home  
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg" ></span> About Us  
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg" ></span> Menu  
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg" ></span> Contact Us  
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Ristorante Con Fusio</h1>
                <p class="col-md-8 fs-4">We take inspiration from the world's best cuisine and create a unique experience.</p>
            </div>
        </div>

      </>
    );
  }
}

export default Header;