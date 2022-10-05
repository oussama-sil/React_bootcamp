import { Component } from "react";

import { Navbar, NavbarBrand ,Nav, NavbarToggler,Collapse,NavItem,Button, 
    Modal, ModalHeader, ModalBody, FormGroup, Label, Input,FormCol,
    FormFeedback,
    Row,Col} from "reactstrap";
import {Control, LocalForm, Errors} from 'react-redux-form';


const maxLength = (length) => (val) =>!(val) || (val.length <= length);
const minLength = (length) => (val) =>!(val) || (val.length >= length);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isModelOpen : false
        }
        this.toggleModel = this.toggleModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModel(){
        this.setState({
          isModelOpen : !this.state.isModelOpen
        })
      }

      handleSubmit(values) {
        // this.toggleModel(); //? to close the model
            console.log("Form Submitted : "+ this.props.dishID+ JSON.stringify(values));

        this.props.postComment(this.props.dishID,values.rating,values.name,values.comment);
        // alert("Form Submitted : " + JSON.stringify(values));
        // console.log(JSON.stringify(values));
      }
    
    //   handleLogin(event){
    //     this.toggleModel();
    //     alert("Username : "+this.username.value +"\n Password : "+this.password.value+"\n Remeber : "+this.remember.checked);
    //     event.preventDefault();
    //   }
    render(){
        return(
            <div>
              <Button onClick={this.toggleModel}>
                <span className="fa fa-pencil fa-l" ></span> Add a comment
              </Button>    
              <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel }> {/* Model will pop up in the screen when we click on the button*/}
                <ModalHeader toggle={this.toggleModel }>Add a comment</ModalHeader>
                <ModalBody>
                    <div>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}> 
                            <Row className="form-group">
                                <Label htmlFor="rating" >
                                    Rating
                                </Label>
                                <Col >
                                    <Control.select model=".rating"     defaultValue={"1"}   // So the object values don't be empty
                                    className="form-control" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="name">
                                    Your Name
                                </Label>
                                <Col>
                                    <Control.text model=".name"
                                    className="form-control" name="name" id="name" placeholder="Your name"
                                    validators = {
                                        {minLength : minLength(3),maxLength : maxLength(15)}
                                      }/>
                                    <Errors  className="text-danger"  model=".name" show="touched" messages={{
                                        minLength : 'Must Be greater than 2 caracters',
                                        maxLength : 'Must Be 15 caracters or less'
                                    }}/>  
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="comment">
                                    Comment
                                </Label>
                                <Col>
                                    <Control.textarea  model=".comment"
                                    className="form-control" name="comment" id="comment" rows="6"/>
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>

                    {/* <Form onSubmit={this.handleLogin}>
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
                    </Form> */}
                </ModalBody>
                </Modal>
            </div>
        );
        
    }
}

export default CommentForm;