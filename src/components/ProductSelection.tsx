import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ProductSelection() {
   return (
      <>
      <Container className="border border-2 border-dark p-4 align-items-center justify-content-center">
         <h4>Product Selection</h4>
         <Row className="w-full align-items-center justify-content-between g-3">
         <Col>
               <select name="products" id="products">
                  <option value="" disabled>Choose a product</option>
                  <option value="saab">Option 1</option>
                  <option value="mercedes">Option 222222222222222</option>
               </select>
         </Col>        

         <Col>
            <div className="text-center">
               <div>Amount: <span>3</span></div>
               <input type="range" id="price" min="0" max="12" value="3"/>
            </div>            
         </Col>

         <Col>
            2 x 1.99 = 3,99
         </Col>

         <Col>
            <Button>add to Cart</Button>
         </Col>

      
         </Row>

      </Container>
 
      </>
   )
}
