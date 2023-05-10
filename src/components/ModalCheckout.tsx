import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import Warning from './Warning'

interface ModalCheckoutProps {
  show: boolean;
  onHide: () => void;
}

export default function ModalCheckout(props: ModalCheckoutProps) {
   const { cartItems, clearCart } = useCart()
   const [toast, setToast] = useState({ isOpen: false, title: '', message: '', type: '', delay: 3500 })

   const handleConfirm = () => {
      setToast({
          isOpen: true,
          title: 'Congratulations!',
          message: 'Your purchase has been processed.',
          type: 'success',
          delay: 4500
      })       
      props.onHide()
      clearCart()
   }


  return (
    <>
    <Warning
          body={toast}
          onHide={() => setToast({...toast, isOpen:false})}
    />
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Checkout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Purchase</h4>
        <p>
          Please press <span className="fw-bold text-success">Confirm</span> to proceed to deliver or <span className="fw-bold text-danger">Cancel</span> if you need to do some changes. Your cart will be empty after confirming.
        </p>
        <Table  >
            <thead>
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Unit Price</th>
              <th>Tax</th>
              <th>Price (no Tax)</th>
              <th>Price (incl.Tax)</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((item, idx: number) => (
              <tr key={idx} >
                  <td>{item.prod.productName}</td>
                  <td>{item.amount}</td>
                  <td>{formatCurrency(item.prod.price)}</td>
                  <td>{item.prod.taxRate}%</td>
                  <td>{formatCurrency(item.prod.price*item.amount)}</td>
                  <td>{formatCurrency(item.prod.price*(100+item.prod.taxRate)/100*item.amount)}</td>
              </tr>                  
            ))}
            </tbody>
            <tfoot>
            <tr>
              <td className="p-3 text-end fw-bold" colSpan={4}>Total:</td>
              <td className="p-3 text-primary fw-bold" >
                  {formatCurrency(cartItems.reduce((total, cartItem) => {
                                    return total + (cartItem.prod.price) * cartItem.amount
                                  }, 0))}
              </td>
              <td className="p-3 text-primary fw-bold" >
                  {formatCurrency(cartItems.reduce((total, cartItem) => {
                                    return total + (cartItem.prod.price) * ((100+cartItem.prod.taxRate)/100) * cartItem.amount
                                  }, 0))}
              </td>
            </tr>
            </tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide} >Cancel</Button>
        <Button variant="success" onClick={handleConfirm}>Confirm</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}