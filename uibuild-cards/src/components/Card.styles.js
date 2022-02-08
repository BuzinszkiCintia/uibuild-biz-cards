import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  column-gap: 62px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const CardWrapper = styled.div`
  width: 290px;
  height: 416px;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 27px;

  @media only screen and (max-width: 600px) {
    width: 290px;
    height: 416px;
    top: 50%;
    transform: translateY(10%);
    margin-bottom: 20px;
  }
`;
export const Name = styled.h2`
  color: #33793f;
  font-size: 48px;
  font-family: "EB+Garamond";
  font-weight: normal;
  margin-top: 20px;
`;
export const RestaurantName = styled.h6`
  color: #999;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 20px;
`;
export const Address = styled.p`
  color: #999;
  font-size: 24px;
  font-family: "EB+Garamond";
  font-weight: normal;
  margin-top: 20px;
`;
export const Address2 = styled.p`
  color: #999;
  font-size: 24px;
  font-family: "EB+Garamond";
  font-weight: normal;
  margin-top: 50px;
`;
