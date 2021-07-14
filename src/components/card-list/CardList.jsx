import React from 'react';
import ReactDom from 'react-dom';
import SingleCard from '../single-card/SingleCard';
import './cardlist.css';
import Search from '../search/Search';
class CardList extends React.Component{
    constructor(){
        super();
       this.state={
           monster:[],
           inputval:""
       };
       
    }
    
        componentDidMount(){
    
            fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>this.setState({monster:data}));
        
        }

    render(){
      const {monster,inputval} = this.state;
    let filterdata = monster.filter((element)=>{
        return(
            element.name.toLowerCase().includes(inputval.toLowerCase())
        )

      })
const search =(e)=>{
    this.setState({inputval:e.target.value})
}
        return(
            <>
            <div className="list">
            <h1>Monster Rolode</h1>
            <Search find={search}/>
            </div>
          
            <div className="card-list">
            
            {
                filterdata.map((element)=>{
return(
    <>
    
    <SingleCard id={element.id} name={element.name} email={element.email}/>
    </>
    
)
    })
  } 
            </div>
           
</>
        )
    }

}


export default CardList;