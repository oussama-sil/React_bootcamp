import {React,Component, useState} from 'react';
import {Media,Card,CardImgOverlay,CardImg,CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import DishDetail from './dishDetailComponent';
import { Link } from 'react-router-dom';
//? Card as functional component 

function RenderMenuItem({dish,onClick}) {
    return (
            <Card tag="li" >
                <Link to={`/menu/${dish.id}`} >
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                </Link>
            </Card>
    );
}


//? MenuComponent implemented as a functional component 

    const Menu = (props)=>{
        const menu= props.dishes.map((dishe)=>{
            return (
                <div key={dishe.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dishe} />
                </div>
            );
        });
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                        {menu}
                </div>
            </div>
        );
    }



//? MenuComponent implemented as a class component 
class Menu2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes : props.dishes,
            selectedDish : null
        }
    }
    // componentDidMount(){  //!After the component is mounted
    //     console.log("hello ")
    // }
    // onDishSelect(dishe){
    //     this.setState({selectedDish:dishe})
    // }

    renderDishe(dishe){
        return(
            <DishDetail dish={dishe}/>
        );
    }
    render(){
        const menu= this.state.dishes.map((dishe)=>{
            return (
                <div key={dishe.id} className="col-12 col-md-5 m-1">
                    <Card tag="li" onClick={()=>this.props.onClick(dishe.id)}>
                        <CardImg width='100%' src={dishe.image} alt={dishe.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dishe.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>
            );
        });
        return(
            <div className='container'>
                <div className='row'>
                        {menu}
                </div>
                {/* <div className='row'>
                    {this.renderDishe(this.state.selectedDish)}
                </div> */}
            </div>
        );
    }
}

export default Menu;