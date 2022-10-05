import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  // Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import {Control, LocalForm, Errors,actions,Form} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (length) => (val) =>!(val) || (val.length <= length);
const minLength = (length) => (val) =>!(val) || (val.length >= length);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {
  constructor(props) {
    super(props);
      //? will be handled by react-redux-form

    // this.state = {
    //   firstname: "",
    //   lastname: "",
    //   telnum: "",
    //   email: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   touched: {
    //     firstname: false /*this tells wether the value have been touched */,
    //     lastname: false,
    //     telnum: false,
    //     email: false,
    //   },
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  //? will be handled by react-redux-form
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  handleSubmit(values) {
    alert("Form Submitted : " + JSON.stringify(values));
    console.log(JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

    //? will be handled by react-redux-form

  // validate(firstname, lastname, telnum, email) {
  //   const errors = {
  //     firstname: "",
  //     lastname: "",
  //     telnum: "",
  //     email: "",
  //   };
  //   if (this.state.touched.firstname && firstname.length < 3)
  //     errors.firstname = "First name should be >= 3 caracters";
  //   else if (this.state.touched.firstname && firstname.length > 10)
  //     errors.firstname = "First name should be <= 10 caracters";

  //   if (this.state.touched.lastname && lastname.length < 3)
  //     errors.lastname = "Last name should be >= 3 caracters";
  //   else if (this.state.touched.lastname && lastname.length > 10)
  //     errors.lastname = "Last name should be <= 10 caracters";

  //   const telreg = /^\d+$/;
  //   if (this.state.touched.telnum && !telreg.test(telnum))
  //     errors.telnum = "Tel number should contain only numbers";

  //   if (
  //     this.state.touched.email &&
  //     email.split("").filter((x) => x === "@").length != 1
  //   )
  //     errors.email = "Email should contain @ sign";

  //   return errors;
  // }

  render() {
      //? will be handled by react-redux-form

    // const errors = this.validate(
    //   this.state.firstname,
    //   this.state.lastname,
    //   this.state.telnum,
    //   this.state.email
    // );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us you feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form model= 'feedback' onSubmit={(values)=>this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  {" "}
                  {/*from medium to extra large */}
                  <Control.text
                  model=".firstname"
                  className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name "
                    validators = {
                      {required, minLength : minLength(3),maxLength : maxLength(15)}
                    }
                  />
                  <Errors  className="text-danger"  model=".firstname" show="touched" messages={{
                    required: 'Required',
                    minLength : 'Must Be greater than 2 caracters',
                    maxLength : 'Must Be 15 caracters or less'
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  {" "}
                  {/*from medium to extra large */}
                  <Control.text
                  model=".lastname"
                  className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name "
                    validators = {
                      {required, minLength : minLength(3),maxLength : maxLength(15)}
                    }
                  />
                  <Errors  className="text-danger"  model=".lastname" show="touched" messages={{
                    required: 'Required',
                    minLength : 'Must Be greater than 2 caracters',
                    maxLength : 'Must Be 15 caracters or less'
                  }}/>
                </Col>
                </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Phone number
                </Label>
                <Col md={10}>
                  {" "}
                  {/*from medium to extra large */}
                  <Control.text
                  model=".telnum"
                  className="form-control"
                    id="telnum"
                    name="telnum"
                    placeholder="Phone number"
                    validators = {
                      {required, minLength : minLength(3),maxLength : maxLength(15),  isNumber}
                    }
                  />
                    <Errors  className="text-danger"  model=".telnum" show="touched" messages={{
                      required: 'Required',
                      minLength : 'Must Be greater than 2 caracters',
                      maxLength : 'Must Be 15 caracters or less',
                      isNumber : "Caracters are not allowed"
                    }}/>
                </Col>
                </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  {" "}
                  {/*from medium to extra large */}
                  <Control.text
                  model=".email"
                  className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators = {
                      {required, validEmail}
                    }
                  />
                  <Errors  className="text-danger"  model=".email" show="touched" messages={{
                      required: 'Required, ',
                      validEmail : " email should be of format xxxx@yyy.zzz"
                    }}/>
                </Col>
                </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                      model=".agree"
                      className="form-check-input"
                        name="agree"
                      />{" "}
                      <strong>May we contact you ?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select model=".contactType" className="form-control"
                    name="contactType"
                  >
                    <option>Tel. </option>
                    <option>Email</option>
                  </Control.select>
                </Col>
                </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  {" "}
                  {/*from medium to extra large */}
                  <Control.textarea model=".message" 
                    id="message"
                    name="message"
                    placeholder="Your feedback"
                    rows="12"
                    className="form-control"
                  />
                </Col>
                </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send feedback
                  </Button>
                </Col>
                </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
