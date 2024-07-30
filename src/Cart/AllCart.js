import React from 'react'
import { CartProvider,useCart } from 'react-use-cart';
import {  Container } from 'reactstrap';
import Navbar from '../Navbar';
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        emptyCart,
        cartTotal,
    } = useCart();

    if (isEmpty) return <p className="text-center">Your cart is empty</p>;

    return (
        <Container>
            <h1 className="text-center" style={{fontFamily:"serif"}}>Cart ({totalUniqueItems})</h1>
            <button className="btn btn-danger text-center mb-3 " onClick={() =>  emptyCart()}>Delete All</button>

        

            <table className="table table-bg-dark">
                <thead>
                    <tr>
                        <th>lmage</th>
                        <th>Name</th>
                        <th>Quantitiy</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                {items.map((result) => (
                    <tr key={result.id}>
                       <td><img src={result.image} style={{height:"60px",width:"60px"}}></img></td>
                       <td>{result.name}</td>
                       <td>{result.quantity}</td>
                       <td>{result.price*result.quantity}</td>
                       <td>
                       <button
                       className="btn btn-warning"
                            onClick={() => updateItemQuantity(result.id, result.quantity - 1)}
                        >
                            -
                        </button>
                        <button
                        className="mx-1 btn btn-success"
                            onClick={() => updateItemQuantity(result.id, result.quantity + 1)}
                        >
                            +
                        </button>
                        <button className="btn btn-danger" onClick={() => removeItem(result.id)}>&times;</button>
                       </td>
                      
                    </tr>
                    
                ))}
                <tr>
                    <td>total</td>
                    <td>-------------</td>
                    <td>{totalItems}</td>
                    <td>{cartTotal}</td>
                    <td><a href='#' className='btn btn-success'>Payment</a></td>
                </tr>
            </table>
            <a href="/shopping" className="btn btn-primary">continuo shopping</a>
        </Container>
    );
}

function AllCart() {
  return (
    <CartProvider>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Cart></Cart>
         

    </CartProvider>
  )
}

export default AllCart;