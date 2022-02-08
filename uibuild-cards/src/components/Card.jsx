import React from "react";
import {
  Wrapper,
  CardWrapper,
  Name,
  RestaurantName,
  Address,
  Address2,
} from "./Card.styles";

const Card = (props) => {
  console.log(props);
  return (
    <Wrapper>
      {props.data.map((item, i) => {
        return (
          <CardWrapper key={i}>
            <Name>{item.name}</Name>
            <RestaurantName>{item.restaurant}</RestaurantName>
            <Address>
              {item.address + ", "}
              {item.city + ", "}
            </Address>
            <Address2>
              {item.postal_code + ", "}
              {item.country}
            </Address2>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Card;
