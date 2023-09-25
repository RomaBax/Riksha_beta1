import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import trash from '../assets/trash.svg'
export const Basket = () => {
  const { store ,setStore} = useContext(BasketContext);
  console.log(store);
  const onDelete = ()=>{
    setStore([])
  }

  const deleteOne = (id)=>{
    const newData = store.filter((item)=>item.id !== id)
    setStore(newData)
  }
  return (
    <Box>

      
      {
        !store.length && <Heading my={10}fontSize={60} textAlign={'center'}>Еще нет товара <span style={{fontSize:'70px'}}>!</span></Heading>
      }
      {store.map((item) => (
        <HStack mt={'2%'}  mb={5} key={item.id} borderRadius={'8px'} boxShadow={'0px 0px 14px 0px rgba(34, 60, 80, 0.2)'} > 
          <Box   width={'10%'} >
          <Image borderLeftRadius={'8px'} width={'100%'} objectFit={'cover'}  src={item.images[0]}  />
          </Box>
        <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'} width={'80%'}> 
        <Box p={2}>
            <Heading>{item.title}</Heading>
            <Text w={'450px'}>{item.description}</Text>
            <Text as={'b'}>${item.price}</Text>
          </Box>
          <Button  onClick={()=>deleteOne(item.id)}>Delete</Button>
        </Box>
        </HStack>
        
      ))}
      {store.length &&  <Button my={10} onClick={onDelete} colorScheme="orange"  justifyContent={'center'} gap={2}>Delete all <Image color={'white'} src={trash}/></Button>}
    </Box>
  );
};
