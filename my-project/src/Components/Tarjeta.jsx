import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const POKEAPIURL = "https://pokeapi.co/api/v2/pokemon/ditto";
// const response = "https://rickandmortyapi.com/api/character";


// export const Api = () =>{

//   const [data, setData] =useState([])

//   useEffect(()=>{
//     PokeApi()
//   }, [])

//   async function PokeApi() {

//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const responseData = await response.json();

//     setData(responseData.results)

//     console.log(response);

//     console.log(responseData);

//   }

//   return(
//     <div>
//       {data.map((item)=>(
//         <div>
//           {item.id}
//           {item.name}
//           <img src={...item.image} alt="" srcset="" />
//         </div>
//       ))}
//     </div>
//   );
// };

export const Api = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    GetPokeApi()
  }, [])

  // async function GetPokeApi(){
  //   const response = await axios.get("https://rickandmortyapi.com/api/character");
  //   setData(response.data.results);
  // };

  function GetPokeApi() {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    data.map((item) => (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title><strong>Name: </strong> {item.name}</Card.Title>
      <Card.Text>
        <strong>Gender: </strong>
        {item.gender}

        <strong>Species: </strong>
        {item.species}

        <strong>Status: </strong>
        {item.status}

        <strong>Origin: </strong>
        {item.origin.name}
      </Card.Text>
    </Card.Body>
  </Card>)));
    

      

  // return(
  //   <div>
  //     {data.map((item)=>(
  //       <div>
  //         {/* {item.id} */}
  //         {item.name}
  //         <img src={...item.image} alt="" {...item.id} />
  //       </div>
  //     ))}
  //   </div>
  // );
}
// export default GetPokeApi();


// function Tarjetas() {

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Tarjetas()

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;