import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import productsList from '../data/products.json'
import { productProps } from '../interfaces/interfaces'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import Warning from './Warning'



export default function ProductSelection() {
   const { addToCart, MAX_NUM_PRODUCTS, cartItems } = useCart()

   const [amount, setAmount] = useState(0)
   const [selected, setSelected] = useState({
      id: '',
      productName: '',
      maxAmount: 0,
      taxRate: 0,
      price: 0
   })
   const [errMinAmount, setErrMinAmount] = useState(false)
   const [errMaxItems, setErrMaxItems] = useState(false)

   const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(parseInt(event.target.value, 10))
   }
   const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const currentId = event.target.value
      setSelected(productsList.find((i: productProps) => {
         return (i.id === currentId)
      }))      
      setAmount(0)
   }

   const handleAddProduct = () => {
      if ( amount == 0){
         setErrMinAmount(true)
      } else 
         if (cartItems.length >= MAX_NUM_PRODUCTS) {
            setErrMaxItems(true)
      }
      else {
         addToCart(selected,amount)
      }
   }

   return (
      <>
      {errMinAmount && 
      <Warning description={'Please choose an amount of items bigger than 0'}
      show={errMinAmount}
      onHide={() => setErrMinAmount(false)}/>}
      {errMaxItems && 
      <Warning description={'The maximum amount of different products is '+MAX_NUM_PRODUCTS}
      show={errMaxItems}
      onHide={() => setErrMaxItems(false)}/>}
      <Container className="border border-2 border-dark p-4 align-items-center justify-content-center">
         <h4>Product Selection</h4>
         <Row className="w-full align-items-center justify-content-between g-3">
         <Col>
               <select name="products" id="products" onChange={handleSelected} defaultValue=''>
                  <option value="" disabled>Choose a product</option>
                  {productsList.map((item: productProps, i: number) => (
                     <option key={i} value={item.id}>{item.productName}</option>
                  ))}
               </select>
         </Col>        

         <Col>
            <div className="text-center">
               <div>Amount: <span>{amount}</span></div>
               <input type="range" id="price" min="0" max={selected.maxAmount} value={amount}
                     onChange={handleAmount}/>
            </div>            
         </Col>

         <Col>
         <div className="p-2">
            <span className="p-2">{amount}</span>
            <span className="p-2">X</span>
            <span className="p-2">{formatCurrency(selected.price)}</span>
            <span className="p-2">=</span>
            <span className="p-2">{formatCurrency(selected.price*amount)}</span>
         </div>
         </Col>

         <Col>
            <Button onClick={handleAddProduct}>add to Cart</Button>
         </Col>
         </Row>
      </Container>
      </>
   )
}