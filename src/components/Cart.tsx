import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export default function Cart() {
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
               <tr>
                  <td>TV</td>
                  <td>2</td>
                  <td>1,99</td>
                  <td>19</td>
                  <td>3,98</td>
                  <td>3,98</td>
                  <td><Button variant="danger">X</Button></td>
               </tr>
               <tr>
                  <td>TV</td>
                  <td>2</td>
                  <td>1,99</td>
                  <td>19</td>
                  <td>3,98</td>
                  <td>3,98</td>
                  <td><Button variant="danger">X</Button></td>
               </tr>
               </tbody>
               <tfoot>
               <tr>
                  <td className="p-3 text-end fw-bold" colSpan={4}>Total:</td>
                  <td className="p-3 text-primary fw-bold" >19,98</td>
                  <td className="p-3 text-primary fw-bold" >19,98</td>
                  <td ></td>
               </tr>
               </tfoot>
            </Table>
         </Container>

         <Container className="pt-4">

            <Row className="w-full align-items-center justify-content-between g-3">
            <Col>
               <Button variant="danger">Clear Cart</Button>
            </Col>        

            <Col>
            <div className="text-center">
               <p>Number of products 3/10<i className="bi bi-6-square-fill"></i></p>
               <progress id="numproducts" value="2" max="10"> 3 </progress>

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
