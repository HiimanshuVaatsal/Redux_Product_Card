import React, { useEffect } from "react";
import { ShoppingCart } from 'lucide-react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand><h2>Navbar</h2></MDBNavbarBrand>
        <span>
          <Link to="/"><button type="button" class="btn btn-success" data-mdb-ripple-init>All Product</button> </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart">  <ShoppingCart color="green" /><span className="rounded-circle bg-success bg-gradient p-1 text-white">{totalQuantity}</span></Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}