import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';


export const Api = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    GetPokeApi()
  }, [])

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
    <div className="row my-3 mx-5">{data.map((item) => (

      <div key={item.id} className="col-md-4 card-wrapper">
        <Card className="mb-4">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title><strong>Name: </strong> {item.name}</Card.Title>
            <Card.Text>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <strong>Gender:</strong>
                  </div>
                  <div className="col-6">
                    {item.gender}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <strong>Species:</strong>
                  </div>
                  <div className="col-6">
                    {item.species}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <strong>Status:</strong>
                  </div>
                  <div className="col-6">
                    {item.status}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <strong>Origin:</strong>
                  </div>
                  <div className="col-6">
                    {item.origin.name}
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

 
))}
    
    </div>)
}
