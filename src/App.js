import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=['Alomgir','Razzak','Rubel','Salmansa','Bappi','shuvo'];
  const Products=[
  {name:'PhotoShop',price:'$99.19'},
  {name:'Illustrator',price:'$89.19'},
  {name:'PDF Reader',price:'$79.19'},
  {name:'Adobe Premium',price:'$299.19'},
];
 const friends=[
   {name:'jamal',age:'23'},
   {name:'kamal',age:'33'},
   {name:'damal',age:'13'},
 ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>

             {/* <Product name={Products[0].name} price={Products[0].price}></Product>
        <Product name={Products[1].name} price={Products[1].price}></Product>
        <Product name={Products[2].name} price={Products[2].price}></Product>
        <Product name={Products[3].name} price={Products[3].price}></Product> */
        // <Product product={Products[0]}></Product>
        // <Product product={Products[1]}></Product>
        // <Product product={Products[2]}></Product>
        // <Product product={Products[3]}></Product>
  }
        <ul>
              {/* <li>{nayoks[0]}</li>
              <li>{nayoks[1]}</li>
              <li>{nayoks[2]}</li>
              <li>{nayoks[3]}</li> */}
              {
              nayoks.map(nayok=><li>{nayok}</li>)
              }
              {
               // Products.map(product=><li>{product.name} : {product.price}</li>)
                Products.map( product=> <Product product={product}></Product>)

              }
           

        </ul>
      
        
     
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    color:'teal',
    border:'5px solid green',
    backgroundColor:'lightgray',
    width:'200px',
    height:'200px',
    borderRadius:'10px',
    margin:'5px'

    }

    // const {name , price}=props.Product;
    // console.log(name,price);

  return (   
  <div style={productStyle}>

   {/* 
    <h3>{props.name}</h3>
   <h5>{props.price}</h5>
   <h3>{name}</h3>
   <h5>{price}</h5> 
    <button>Buy Now</button> 
   */}
   
   <h3>{props.product.name}</h3>
   <h5>{props.product.price}</h5>
    <button>Buy Now</button>
   
  

  </div>
  )
  
}

function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>setCount(count+1);

  return (
    <div>
      <h1> Count : {count} </h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onMouseMove={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[]);

  

  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          //console.log(users)
        }
        {
          users.map(users=><li> {users.name}  :  {users.phone} : {users.email}</li>)
        }
      </ul>
    </div>

  )
}




export default App;
