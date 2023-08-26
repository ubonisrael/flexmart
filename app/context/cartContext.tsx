"use client"

import { createContext, useEffect, useState } from "react";
import { CART, CARTITEM, Props } from "../@types/interface";
import { useLocalStorage } from "usehooks-ts";

export const CartContext = createContext<CART | null>(null)

const CartContextProvider: React.FC<Props> = ({children}) => {
    const [cart, setCart] = useLocalStorage<CARTITEM[]>('cart', [])

    const handleAddToCart = (cart:CARTITEM[], item: CARTITEM) => {
        if (cart.find(c => c.id === item.id)) {
            setCart(prev => prev.map(c => {
                if (c.id === item.id) return item
                return c
            }))
        } else {
            setCart(prev => [...prev, item])
        }
    }

    const handleRemoveFromCart = (cart:CARTITEM[], id:number) => {
        if (cart.find(c => c.id === id)) setCart(prev => prev.filter(c => c.id !== id))
    }

    const handleClearCart = () => setCart([])

    return (
        <CartContext.Provider value={{cart, handleAddToCart, handleRemoveFromCart, handleClearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider