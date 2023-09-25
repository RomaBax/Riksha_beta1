import React from 'react'
import Logo from '../assets/logo.png'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { BsFacebook,BsInstagram,BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
    <Box position={''} bottom={'0'} mt={'15%'}  gap={'5%'} display={'grid'}  gridTemplateColumns={{base:"auto auto",sm:'auto auto',md:"auto auto",md:'auto auto',lg:'auto auto auto auto',xl:'auto auto auto auto','2xl':'auto auto auto auto'}} bg={'#1B1B1B'} p={'1% 5% 5% 5%'} w={'100%'} >

        <Image w={'15%'} src={Logo}/>
<Box>
        <Box mt={'1%'} width={'100%'}  display={'grid'} gridTemplateColumns={{base:"auto",sm:'auto',md:"auto ",md:'auto ',lg:'auto auto auto',xl:'auto auto auto','2xl':'auto auto auto'}}>
            <Text color={'white'}>О нас</Text>
            <Text color={'white'}>Доставка и оплата</Text>
            <Text color={'white'}>Контакты</Text>
        </Box>
        <Box mt={'5%'} width={'30%'}  display={'grid'} gridTemplateColumns={{base:"auto",sm:'auto',md:"auto ",md:'auto ',lg:'auto auto auto',xl:'auto auto auto','2xl':'auto auto auto'}} gap={'2%'}>
            <BsFacebook size={'70%'} w={'100%'} color={'white'}/>
            <BsInstagram size={'70%'} w={'100%'} color={'white'}/>
            <BsGithub w={'100%'} size={'70%'} color={'white'}/>
        </Box>
</Box>
        <Box>
        <Box display={'grid'} gridTemplateColumns={{base:"auto auto",sm:'auto auto',md:"auto auto auto auto",md:'auto auto auto auto',lg:'auto auto auto auto auto',xl:'auto auto auto auto auto','2xl':'auto auto auto auto auto'}} w={'100%'}>
        <Text color={'white'}>Пицца</Text>
        <Text color={'white'}>Суши</Text>
        <Text color={'white'}>Роллы</Text>
        <Text color={'white'}>Сеты</Text>
        <Text color={'white'}>Wok</Text>
        </Box>
        <Box mt={'5%'} display={'grid'} gridTemplateColumns={{base:"auto auto",sm:'auto auto',md:"auto auto auto auto",md:'auto auto auto auto',lg:'auto auto auto auto auto',xl:'auto auto auto auto auto','2xl':'auto auto auto auto auto'}} w={'100%'}>
        <Text color={'white'}>Супы</Text>
        <Text color={'white'}>Салаты</Text>
        <Text color={'white'}>Десерты</Text>
        <Text color={'white'}>Напитки</Text>
        <Text color={'white'}>Акции</Text>
        </Box>
        </Box>
        <Box w={'100%'} color={'white'}>
        <Heading ml={'10%'} size={'md'} w={'100%'}>+998(93)-891-88-11</Heading>
        <Box  w={'100%'}  textAlign={'center'}><Text> 10:00 до 23:00</Text></Box>
        <Box mt={'3%'} w={'100%'}>© Рикша. Все права защищены.</Box>
        </Box>
    </Box>
    </>
  )
}

export default Footer