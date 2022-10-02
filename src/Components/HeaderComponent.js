import { Component } from "react";
import { Navbar, NavbarBrand ,Nav, NavbarToggler,Collapse,NavItem,Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input,Form} from "reactstrap";
import {NavLink} from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isNavOpen:false,
      isModelOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModel = this.toggleModel.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  }

  toggleModel(){
    this.setState({
      isModelOpen : !this.state.isModelOpen
    })
  }

  handleLogin(event){
    this.toggleModel();
    alert("Username : "+this.username.value +"\n Password : "+this.password.value+"\n Remeber : "+this.remember.checked);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <div>
          <Navbar dark  expand="md" color="primary">
            {/* <div className="container"> */}
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand  className="mr-auto" href="/">
                <img src="assets/images/logo.png" high="30" width="41" alt="Ristaurent name" />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="me-auto">
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
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button outline onClick={this.toggleModel}>
                      <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            {/* </div> */}
          </Navbar>
          <div class="p-5 mb-4 bg-light rounded-3">
              <div class="container-fluid py-5">
                  <h1 class="display-5 fw-bold">Ristorante Con Fusio</h1>
                  <p class="col-md-8 fs-4">We take inspiration from the world's best cuisine and create a unique experience.</p>
              </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel }> {/* Model will pop up in the screen when we click on the button*/}
          <ModalHeader toggle={this.toggleModel }>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username"> Username </Label>
                <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password"> Password </Label>
                <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input}/>
              </FormGroup>
              <FormGroup check>
                <Label check> 
                  <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}/>
                  Remeber me
                 </Label>
              </FormGroup>
              <Button type="submit" value="submit" className="bg-primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;