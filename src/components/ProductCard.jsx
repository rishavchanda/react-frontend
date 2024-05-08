import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 170px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 240px;
  }
`;
const Menu = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:hover ${Image} {
    opacity: 0.9;
  }
  &:hover ${Menu} {
    display: flex;
  }
`;
const MenuItem = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const Rate = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;

const Details = styled.div`
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 4px 10px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: green;
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Top>
        <Image src={product?.img} />
        <Rate>
          <Rating value={product?.rating} sx={{ fontSize: "14px" }} />
        </Rate>
      </Top>
      <Details onClick={() => navigate(`/shop/${product._id}`)}>
        <Title>{product?.productName}</Title>
        <Price>
          ${product?.price}
          <Percent>${product?.discount}% Off</Percent>
        </Price>
      </Details>
    </Card>
  );
};

export default ProductCard;
