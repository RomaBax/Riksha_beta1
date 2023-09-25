import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import axios, { formToJSON } from "axios";
  import React from "react";
  import { useEffect, useState, useContext } from "react";
  
  import Ellipse from "../assets/Ellipse 8.svg";
  import Pizza_Captain from "../assets/Sushi.png";
  import Pizza1 from "../assets/Pizza.png";
  import Hot from "../assets/hot.png";
  import Baked from "../assets/baked.png";
  import Button1 from "../assets/path22.png";
  
  import { BasketContext } from "../context/BasketContext";
  import { json } from "react-router-dom";
  
  export const Pizza = () => {
    const [data, setData] = useState([]);
      const {setBasket} = useContext(BasketContext)
  
  
      // useEffect(() => {
      //   const raw = localStorage.getItem('data') || []
      //   setData(JSON.parse(raw))
      // })
  
    useEffect(() => {
    
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setData(res.data.products))
        .catch((error) => console.log(error));
    }, []);
  
    const addToBasket = (pizza) => {
      setBasket(pizza);
    };
  
    return (
      <Box  w={'100%'} h={'auto'}>
      <Box>
  
  <Box bg={'white'} display={'flex'} mb={'2%'}  gap={'1%'} mt={'10%'}>
                  <Image w={'4%'} src={Pizza1} />
                  <Heading>Пицца</Heading>
              </Box>
        <Grid mb={'5%'} mt={"4%"}   templateColumns={{base:"auto ", sm:'auto',md:'auto auto',lg:'auto auto',xl:"auto auto auto" , '2xl':'auto auto auto '}} gap={"1%"}>
          {data.slice(13,16).map((product) => (
            <GridItem borderRadius={'10px'} p={'0% 0% 5% 0%'} boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} bg={'white'} key={product.id}  >
  
              <Image
              borderRadius={'10px'}
                src={product.images[0]}
                w={"100%"}
                h={250}
                objectFit={"cover"}
                mb={"3%"}
              />
               <Box ml={'3%'} display={'flex'} gap={'3%'} mb={'1%'}>
                              <Text color={'gray'}>200 грамм</Text>
                              <Image src={Ellipse} />
                              <Text color={'gray'}>130 Ккал</Text>
                          </Box>
              <Heading ml={'3%'} size={"md"}>{product.title}</Heading>
              <Box ml={'3%'} w={'90%'} height={'80px'}  gap={2} display="flex" alignItems={"center"}>
                <Text   >
                  {product.description}
                </Text>
              </Box >
              <Box w={'100%'} justifyContent={'center'} alignItems={'center'} pl={'20%'} gap={'3%'} display={'flex'} mt={'5%'}>
              <Button size={'lg'}>Купить</Button>
                <Button size={'lg'} bgImage={Button1} colorScheme='orange' onClick={() => addToBasket(product)} >
                  <Text>В корзину</Text>
                </Button>
                </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      </Box>
  
      
    );
  };