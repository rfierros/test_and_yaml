import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useCart } from '../hooks/useCart'


export default function Cart() {
   const { cartItems, MAX_NUM_PRODUCTS, clearCart, removeFromCart } = useCart()

   return (
      <>
      <Container className="border border-2 border-dark p-4">
         <h4>Cart</h4>
         <Container>
            <Table striped bordered hover>
               <thead>
               <tr>
                  <th>Product Name</th>
                  <th>Amount</th>
                  <th>Unit Price</th>
                  <th>Tax</th>
                  <th>Price</th>
                  <th>Price (incl.Tax)</th>
                  <th>Remove</th>
               </tr>
               </thead>
               <tbody>
               {cartItems.map((item, idx: number) => (
                  <tr key={idx} >
                     <td>{item.prod.productName}</td>
                     <td>{item.amount}</td>
                     <td>{item.prod.price}</td>
                     <td>{item.prod.taxRate}</td>
                     <td>{item.prod.price*(100+item.prod.taxRate)/100}</td>
                     <td>{item.prod.price*(100+item.prod.taxRate)/100*item.amount}</td>
                     <td><Button variant="danger" onClick={() => removeFromCart(item.prod.id)}>X</Button></td>
                  </tr>                  
               ))}              


               
               </tbody>
               <tfoot>
                <tr>
                  <td className="p-3 text-end fw-bold" colSpan={4}>Total:</td>
                  <td className="p-3 text-primary fw-bold" >0</td>
                  <td className="p-3 text-primary fw-bold" >0</td>
                  <td ></td>
               </tr>
               </tfoot>
            </Table>
         </Container>

         <Container className="pt-4">

            <Row className="w-full align-items-center justify-content-between g-3">
            <Col>
               <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
            </Col>        

            <Col>
            <div className="text-center">
               <p>Number of products {cartItems.length}/{MAX_NUM_PRODUCTS}<i className="bi bi-6-square-fill"></i></p>
               <progress id="numproducts" value={cartItems.length} max={MAX_NUM_PRODUCTS}> {cartItems.length} </progress>

            </div>
            </Col>


            <Col>
               <Button variant="success">Buy!</Button>
            </Col>

         
            </Row>

         </Container>
      </Container>
      </>
   )
}
