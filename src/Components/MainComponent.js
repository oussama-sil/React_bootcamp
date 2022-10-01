// import logo from './logo.svg';
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../Shared/dishes";
import {PROMOTIONS} from '../Shared/promotions';
import {LEADERS} from '../Shared/leaders';
import {COMMENTS} from '../Shared/comments';
import DishDetail from "./dishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route,Redirect} from 'react-router-dom'
import Contact from "./ContactComponent";



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments:COMMENTS,
      selectedDish: null,
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }


  render() {
    const HomePage = ()=>{
        return(
            <Home  dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
                promotion={this.state.promotions.filter((prom)=>prom.featured)[0]}
                leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
            />
        );
    }

    const DishWithID = ({match,location,history})=>{
        return(
            <DishDetail  dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishID,10))[0]} 
                comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishID,10))}
            />
        );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} /> 
            <Route exact path="/contactus" component ={Contact} />
            <Route path="/menu/:dishID" component={DishWithID} />
            <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes}  onClick={(dishID)=>{this.onDishSelect(dishID)}} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0] || null   } /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
