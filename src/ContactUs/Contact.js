import React from 'react'
import Navbar from '../Navbar'
import { CartProvider } from 'react-use-cart'

function Contact() {
  return (
    <CartProvider>
        <Navbar></Navbar>
        <div className="container1">
  <h1>Contact Us</h1>
  <form action="#" method="post">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required="" />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required=""
      defaultValue={""}
    />
    <button type="submit">Submit</button>
  </form>
</div>

    </CartProvider>
  )
}

export default Contact