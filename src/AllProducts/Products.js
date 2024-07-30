// import React, { Component } from 'react'
// import axios from 'axios'
// import Navbar from '../Navbar'
// import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
// import { CartProvider } from 'react-use-cart'

// class Products extends Component {
//     state = {
//         product: []
//     }
//     componentDidMount() {
//         axios.get('/Api.json')
//             .then((item) => {
//                 this.setState(
//                     {
//                         product: item.data.products
//                     }
//                 )
//             })
//     }
//     render() {

//         return (
//             <CartProvider>
//                 <Navbar></Navbar>
//                 <Container>
//                     <Row>
//                         {this.state.product.map((result) => (

//                             <Col key={result.id} md="4" >
//                                 <Card
//                                 className='mb-3'
//                                     style={{
//                                         width: '18rem'
//                                     }}
//                                 >
//                                     <img
//                                     style={{height:"300px"}}
//                                         src={result.image}
//                                         className='img-fluid'
//                                     />
//                                     <CardBody>
//                                         <CardTitle tag="h5">
//                                             <h4>{result.name}</h4>
//                                         </CardTitle>
//                                         <CardSubtitle
//                                             className="mb-2 text-muted"
//                                             tag="h6"
//                                         >
//                                             {result.price}$
//                                         </CardSubtitle>
//                                         <CardText>
//                                             {result.description}
//                                         </CardText>
//                                         <Button>
//                                             Button
//                                         </Button>
//                                     </CardBody>
//                                 </Card>

//                             </Col>



//                         ))}
//                     </Row>
//                 </Container>


//             </CartProvider>
//         )
//     }
// }

// export default Products