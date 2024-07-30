import { CartProvider, useCart } from "react-use-cart";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import Navbar from "../Navbar";



function Page() {
  const { addItem } = useCart();

  const products = [
    {
        "id": 1,
        "name": "University T-Shirt",
        "description": "Official university logo t-shirt",
        "price": 19.99,
        "image": "/img/51W6cv6rjuL._AC_UL320_.jpg"
      },
      { 
        "id": 2,
        "name": "University Hoodie",
        "description": "Warm hoodie with embroidered university name",
        "price": 34.99,
        "image": "/img/61gj2BZBfmL._AC_SX569_.jpg"
      },
      {
        "id": 3,
        "name": "University Backpack",
        "description": "Durable backpack with multiple compartments",
        "price": 29.99,
        "image": "/img/21nhdUF5MuL._AC_.jpg"
      },
      {
        "id": 4,
        "name": "University Mug",
        "description": "Ceramic mug with university emblem",
        "price": 9.99,
        "image": "/img/61uUvCNfPQL._AC_SL1500_.jpg"
      },
      {
        "id": 5,
        "name": "University Notebook",
        "description": "Spiral-bound notebook for all your notes",
        "price": 7.99,
        "image": "/img/51IHsIFoEXL._AC_UL320_.jpg"
      },
      {
        "id": 6,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id": 7,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id": 8,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id": 9,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id": 10,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id":11,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
      {
        "id": 12,
        "name": "Gradution Scarf",
        "description": "12 Pcs Class of 2023 Graduation Stole Unisex Adult Graduation Sash 60'' Long White Grad Stole for Adult Men Women School College University Anniversary, White With Yellow Patterns",
        "price": 30,
        "image": "/img/71PgcooJkpL._AC_SX679_.jpg"
      },
  ];

  return (
    <div>
         <Container>
                    <Row>
                        {products.map((result) => (

                            <Col key={result.id} md="4" >
                                <Card
                                className='mb-3'
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <img
                                    style={{height:"300px"}}
                                        src={result.image}
                                        className='img-fluid'
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            <h4>{result.name}</h4>
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {result.price}$
                                        </CardSubtitle>
                                        <CardText>
                                            {result.description}
                                        </CardText>
                                        <Button onClick={() => addItem(result)}>Add to cart</Button>
                                    </CardBody>
                                </Card>

                            </Col>



                        ))}
                    </Row>
                </Container>
    
    </div>
  );
}



function Shopping() {
  return (
    <CartProvider>
        <Navbar></Navbar>
      <Page />
      
    </CartProvider>
  );
}
export default Shopping;