import React, { FC } from "react";
import { Paper, Box } from "@mui/material";
import styled from "styled-components";
import { BusinessInfo } from "../../../utils/interfaces";
import { AiFillHeart, AiOutlineWhatsApp } from "react-icons/ai";
import Button from "@mui/material/Button";
import { BsTelephoneOutbound } from "react-icons/bs";

interface ListPropsInterface {
  biz: BusinessInfo;
}
const ListComponent: FC<ListPropsInterface> = ({ biz }) => {
  return (
    <ListItems>
      <Paper
        sx={{
          mt: "16px",
          p: "8px",
          background: "#f8f9fc",
          alignItems: "flex-start",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "24px",
          gap: "8px",
          position: "relative",
          zIndex: 0,
          textDecoration: "none",
        }}
      >
        {/*icon*/}
        <div style={{ position: "absolute", right: 0, top: 0 }}>
          <AiFillHeart size={30} color="red" style={{ margin: "16px" }} />
        </div>
        {/*image*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <a href={`/biz/${biz.slug}`}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: "120px", md: "180px" },
                width: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
              alt={biz.name}
              src={`https://penji.co/wp-content/uploads/2022/08/8-cameo.jpeg`}
            />
          </a>
        </div>
        {/*title*/}
        <TitleWrapper>
          <Title>
            <a
              href={`/biz/${biz.slug}`}
              style={{ textDecoration: "none", color: "#384047" }}
            >
              {biz.name}
            </a>
          </Title>
          <div>My Service</div>
          <div>Address: {biz.address}</div>
        </TitleWrapper>
        {/*phone + address*/}
        <ContactButtons>
          <Button variant="outlined">
            <BsTelephoneOutbound />
            {biz.phoneNumber}
          </Button>
          <Button variant="outlined" color="success">
            <AiOutlineWhatsApp /> WhatsApp
          </Button>
        </ContactButtons>
      </Paper>
    </ListItems>
  );
};

export default ListComponent;
const ListItems = styled.li`
  display: list-item;
  background-color: #f8f9fc;
  border-radius: 24px;
`;
const TitleWrapper = styled.div`
  min-width: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  width: auto;
  align-items: flex-start;
  align-self: stretch;
`;
const Title = styled.h2`
  display: flex;
  flex: 1 1 100%;
  //flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 700px) {
    flex: 1 1 70%;
  }
`;
const ContactButtons = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
