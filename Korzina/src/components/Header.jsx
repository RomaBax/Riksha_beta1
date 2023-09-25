import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";

export const Header = () => {
  const {store} = useContext(BasketContext)
  return (
    <Box position={''} top={'0'} bg={'white'} borderBottom={"1px solid grey"}>
      <Container
        maxW={"1280px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        py={"20px"}
      >
        <Link to={'/'}>
        <Heading>Products</Heading>
        </Link>
        <Link to={'/basket'}>
        <Box position={"relative"}>
          <Text
            right={'-15px'}
            top={-2}
            background={"red"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={150}
            w={'25px'}
            h={'25px'}
            position={"absolute"}
            color={"white"}>
            {store.length}
          </Text>
          <StarIcon fontSize={'30px'} />
        </Box>
              </Link>
      </Container>
    </Box>
  );
};
