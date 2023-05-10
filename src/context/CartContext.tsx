import { createContext, ReactNode, useState } from "react"
import { productProps } from '../interfaces/interfaces'

type CartProviderProps = {
   children: ReactNode
}

type CartItem = { // We store this type
   prod: productProps,
   amount: number
}



type CartContext = {
   cartItems: CartItem[] // array with all selected products
   clearCart: () => void
   addToCart: (prod: productProps, amount: number) => void
   removeFromCart: (id: string) => void
   MAX_NUM_PRODUCTS: number  // max number of products we can add to the Cart
}

export const CartContext = createContext({} as CartContext)

export function CartProvider ({children}: CartProviderProps) {
   const MAX_NUM_PRODUCTS = 10
   const [cartItems, setCartItems] = useState<CartItem[]>([]) 

   function clearCart() {
      setCartItems([])
   }

   function addToCart(prod: productProps, amount: number) {
      if (cartItems.length >= MAX_NUM_PRODUCTS) {
         alert('Maximum number of products reached.')

      } else {
         setCartItems(currentItems => {
            if (currentItems.find(item => item.prod.id === prod.id) == null) { //if it doesn't exist we add it
               return [...currentItems, {prod, amount}]
            } else {
               return  currentItems.map(item => {
                  if (item.prod.id === prod.id){
                     return {...item, amount: amount} // we update the amount for this already selected product
                  } else {
                     return item 
                  }
               })
            }
         })
      }

   }   

   function removeFromCart(id: string) {
      setCartItems(currentItems => {
         return currentItems.filter(item => item.prod.id !== id)
      })
   }


   return (
      <CartContext.Provider value={{
         cartItems,
         clearCart,
         addToCart,
         removeFromCart,
         MAX_NUM_PRODUCTS
      }}>
         {children}
      </CartContext.Provider>
   )
}
