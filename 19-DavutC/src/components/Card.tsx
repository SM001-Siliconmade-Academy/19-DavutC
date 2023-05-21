import React from "react";
import { Box, Button, Typography } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Card(props: { imageUrl: string; title: string; description: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        width: "25%",
        maxWidth: "25%",
      }}
    >
      <img src={props.imageUrl} width={"auto"} height={"auto"} />
      <Typography
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          marginTop: 1,
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          marginTop: 1,
          fontSize: 12,
          width: "50%",
          textAlign: "center",
        }}
      >
        {props.description}
      </Typography>
      <Button>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 12,
          }}
        >
          Daha Fazlasını Gör
        </Typography>
        <ArrowRightAltIcon />
      </Button>
    </Box>
  );
}

export default Card;
