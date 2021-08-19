import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Tile extends React.Component{



    render(){
        return(
            <img src={this.props.imgUrl}/>
        );
    }
}
