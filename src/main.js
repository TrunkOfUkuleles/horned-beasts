
import React from 'react';
import HornedBeast from './horned.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'


//iterating through (got it working)

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {

    var data = require('./assets/data.json');

    return(
      
      <>
      <CardColumns>
     { data.map((el, index) => (
    <div key={index}><HornedBeast url={el.image_url} name={el.title} desc={el.description} alt={el.keyword} /></div>
     ))}
 </CardColumns>
 </>
    )
    
  }
}

export default Main;


