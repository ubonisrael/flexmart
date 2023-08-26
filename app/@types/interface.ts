import React from "react";

export interface CARTITEM {
    id: number;
    name: string;
    price: number;
    thumbnail: string,
    num: number;
  }
  
  export interface CART {
    cart: CARTITEM[];
    handleAddToCart: (cart:CARTITEM[], item: CARTITEM) => void,
    handleRemoveFromCart: (cart:CARTITEM[], id:number) => void,
    handleClearCart: () => void,
    removeItem?: (val: number) => void;
    cartCount?: number;
    showCart?: boolean;
    openCart?: () => void;
    closeCart?: () => void;
  }

  export interface Product {
      id: number,
      title: string,
      description: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      brand: string,
      category: string,
      thumbnail: string,
      images: string[]
  }

  export interface Products {
    products: Product[];
  }

  export interface Header {
    showCart?: boolean;
    openCart?: () => void;
    closeCart?: () => void;
  }
  
  export interface MainProps {
    image: number,
    arr: string[],
    prev: () => void,
    next: () => void,
    addToCart: (val: CARTITEM) => void,
    imageNo: (value: number) => void,
    openBox: () => void
  }
  
  export interface imageSliderProps {
    image: number;
    arr: string[];
    prev: () => void;
    next: () => void;
    setImage: (value: number) => void;
    openBox: () => void;
    closeBox?: () => void;
    btnStyle?: { wrapper: string; next: string; prev: string };
  }

  export interface Props {
    children: React.ReactNode
  }

  export interface FilterProducts {
    isFilterOpen: boolean;
    toggleFilter: () => void;
    filterOptions: FilterOptions;
    handleFilterOptions: (value: string | number[]) => void;
    clearFilters: () => void
  }

  export interface FilterOptions {
    price_range: number[];
    categories: string[]
  }