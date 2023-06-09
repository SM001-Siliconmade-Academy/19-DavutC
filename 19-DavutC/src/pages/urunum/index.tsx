import { NextPage } from 'next';
import { Head } from 'next/document';
import React from 'react'
import { api } from 'y/utils/api';
import {Box, Stack, Typography}from '@mui/material';
import ProductCard from '../../components/ProductCard';

const Urunum: NextPage= () => {
  const products = api.products.getAll.useQuery();
  console.log(products.data);
  return (
    <>
    <Head><title>Ürünler Hopi</title>
    <meta name="description" content="Generated by create-t3-app" />
    <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main className="bg flex flex-col items-center justify-center">
      <Box>
        <Typography
        sx={{
          fontWeight:"bold",
          fonstSize:20,
          marginBottom:3,
          marginTop:3,
          textAlign:"left",
        }}
        >
          {products.data?.length} Ürün mevcut
        </Typography>
        <Stack 
        direction="row"
        display={"grid"}
        gripTemplateColumns={"repeat(3,1fr)"}
        rowGap={3} 
        >
          {products.data?.map(product)=>(
            <ProductCard
            key={products.id}
            brand={products.brand}
            description={products.description}
            price={products.price}
            imageUrl={products.imageURL}
            />
          )}
        </Stack>
      </Box>
    </main>
    </>
    
  )
}

export default Urunum