import { React, Component, useState } from "react";
import {
  Media,
  Card,
  CardImgOverlay,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  List,Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';


class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: props.dish,
    };
  }

  renderComments(comments) {
    if (comments != null) {
      const commentsElem = comments.map((comment, indx) => {
        return (
          <li key={comment.id}>
            <div>{comment.comment} </div>
            <div>
              ---{comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </div>
          </li>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          <List type="unstyled">{commentsElem}</List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardBody>{dish.description}</CardBody>
        </CardBody>
      </Card>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
                 <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {this.props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
