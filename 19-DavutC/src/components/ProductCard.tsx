import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type ProductCardProps = {
  imageURL: string;
  brand: string;
  description: string;
  price: string;
};

function ProductCard({
  imageURL,
  brand,
  description,
  price,
}: ProductCardProps) {
  return (
    <Box sx={{ flex: 1, width: "auto" }}>
      <Image src={imageURL} height={400} width={400} alt={"Product Image"} />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 1,
          textAlign: "left",
        }}
      >
        {brand}
      </Typography>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          marginTop: 1,
          fontSize: 12,
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 1,
          textAlign: "right",
        }}
      >
        {price}
      </Typography>
    </Box>
  );
}

export default ProductCard;
