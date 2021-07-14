import React from 'react';
import ReactDom from 'react-dom';
import './singlecard.css';

class SingleCard extends React.Component{
    


 

    render(){
        return(
            <>
            <div className="card-container">
            <img src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`} />
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
            </div>
           
            </>
        )
    }

}


export default SingleCard;