
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          fav: 0,
        };
      }
    

render() {
    
      // let heart = require('./assets/heart.svg');
   const favHandler = () => {
          this.setState({fav: this.state.fav + 1})
      }
        

    return (
      <div>
      <Card style={{wdith: '8rem'}}>
        <Card.Body>
        <Card.Img src={this.props.url} onClick={favHandler} alt={this.props.alt} />
        
        <Card.Text>♥️ {this.state.fav}</Card.Text>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>{this.props.desc} </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
    )
}

}

export default HornedBeast;

