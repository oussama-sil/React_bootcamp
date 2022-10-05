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
import { postComment,fetchComments,fetchDishes, fetchPromos } from "../Redux/ActionCreators";
import *  as ActionTypes from '../Redux/ActionTypes';
import {actions} from 'react-redux-form';


//? State is available as props in the main component 
const mapStateToProps = state =>{
    return { //map to redux store to props
      dishes:state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders : state.leaders
    }
}


//? This are dispatches  
const mapDispatchToProps=(dispatch) =>({
  fetchDishes : () =>{dispatch(fetchDishes())},
  postComment: (dishId,rating,author,comment) =>{
    // console.log(JSON.stringify(addComment(dishID,rating,author,comment)));
    dispatch(postComment(dishId,rating,author,comment))
    // dispatch({
    //   type:ActionTypes.ADD_COMMENT,
    //         payload: {
    //             dishID:12,
    //             rating:5,
    //             author:"rer",
    //             comment:"comment"
    //         }
    // })
  },
  resetFeedbackForm : ()=>dispatch(actions.reset('feedback')),  //* to reset form to initiale state after submit 
  fetchPromos : () =>{dispatch(fetchPromos())},
  fetchComments : () =>{dispatch(fetchComments())},
});

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


  componentDidMount(){ //after the component is mounted 
    this.props.fetchDishes(); //fetch the data after the comment is mounted 
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }


  render() {
    const HomePage = ()=>{
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((prom)=>prom.featured)[0]}
                promosLoading = {this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
            />
        );
    }

    const DishWithID = ({match,location,history})=>{
        return(
            <DishDetail  dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishID,10))[0]} 
                comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishID,10))}
                postComment={this.props.postComment}
                commentsErrMess = {this.props.comments.errMess}
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
            />
        );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} /> 
            <Route exact path="/contactus" component ={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/> }/>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
