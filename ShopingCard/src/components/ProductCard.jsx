import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3 ">
          {items.map((item) => (
            <MDBCol key={item.id}  size="md">
              <MDBCard >
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <button type="button" onClick={() => dispatch(addToCart(item))} class="btn btn-success" data-mdb-ripple-init>Add to card</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}