import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const POKEAPIURL = "https://pokeapi.co/api/v2/pokemon/ditto";
const POKEAPIURL = "https://rickandmortyapi.com/api/character";


export default function getPokeApi(){
  axios.get("https://rickandmortyapi.com/api/character")

  .then((response)=>{
    console.log(POKEAPIURL);

    setData(response.data.results);
  })
  .catch((error)=>{
    console.log(error);
  });
}



export default function Tarjetas() {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

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