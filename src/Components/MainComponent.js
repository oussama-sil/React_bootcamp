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
import About from "./AboutComponent";
import {Switch, Route,Redirect, withRouter} from 'react-router-dom'
import Contact from "./ContactComponent";
import {connect} from 'react-redux'; // connect the main component to the store

const mapStateToProps = state =>{
    return { //map to redux store to props
      dishes:state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders : state.leaders
    }
}

//? Main component takes it's informations from the store


class Main extends Component {
  constructor(props) {
    super(props);
    //! state will be props from store
    // this.state = {
    //   dishes: DISHES,    !
    //   promotions : PROMOTIONS,
    //   leaders : LEADERS,
    //   comments:COMMENTS,
    //   selectedDish: null,
    // };
  }


  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }


  render() {
    const HomePage = ()=>{
        return(
            <Home  dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
                promotion={this.props.promotions.filter((prom)=>prom.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
            />
        );
    }

    const DishWithID = ({match,location,history})=>{
        return(
            <DishDetail  dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishID,10))[0]} 
                comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishID,10))}
            />
        );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} /> 
            <Route exact path="/contactus" component ={Contact} />
            <Route path="/menu/:dishID" component={DishWithID} />
            <Route path="/aboutus" component={()=><About leaders={LEADERS} />} />
            <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes}  onClick={(dishID)=>{this.onDishSelect(dishID)}} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0] || null   } /> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
