import React from 'react'
import { Box, Center, Heading,  Image, Text } from '@chakra-ui/react'
import Dostavka_ic from './Img/ic 1.png'
import Oplata_ic from './Img/ic 2.png'
import Info_ic from './Img/ic info.png'
import Card_img1 from './Img/01.png'
import Card_img2 from './Img/02.png'
import Frame1 from './Img/Frame1.svg'
import Frame2 from './Img/Frame2.svg'
import Frame3 from './Img/Frame3.svg'


function Dostavka() {
  return (
    <>
    <Box m={'1% 0% 2% 15%'} display={'flex'} gap={'1%'}>
                <Heading>Доставка</Heading>

                <Image w={'1.5%'} src={Dostavka_ic} />
                </Box>


                <Box w={'60%'} ml={'16%'}   display={'grid'} gridTemplateColumns={{base:"auto",sm:'auto',md:"auto",md:'auto',lg:'auto auto',xl:'auto auto','2xl':'auto auto'}}>

                    <Box gap={'5%'} w={'100%'} display={'flex'} >
                        <Image w={'35%'} src={Card_img1}/>
                        <Box  mt={'5%'}>
                            <Heading  color={'#7E9E1E'} size={'md'}>Зеленая зона</Heading>
                            <Box mt={'2%'} display={'flex'}>
                                <Text >Доставка: <Text display='initial' fontWeight='600'>до 29 мин</Text></Text>
                            </Box>
                            <Box mt={'2%'} display={'flex'}>
                                <Text >Минимальная сумма заказа: <Text display='initial' fontWeight='600'>600 ₽</Text></Text>
                            </Box>
                            <Text mt={'2%'} >Доставляем <Text display='initial' fontWeight='600'>БЕСПЛАТНО </Text></Text>
                        </Box>
                    </Box>

                    <Box w={'100%'} mt={'1%'} display={'flex'} >
                        <Image w={'40%'} src={Card_img2}/>
                        <Box  mt={'5%'}>
                            <Heading  color={'#F1C400'} size={'md'}>Желтая зона</Heading>
                            <Box mt={'2%'} display={'flex'}>
                                <Text >Доставка: <Text display='initial' fontWeight='600'>до 59 мин</Text></Text>
                            </Box>
                            <Box mt={'2%'} display={'flex'}>
                                <Text >Минимальная сумма заказа: <Text display='initial' fontWeight='600'>800 ₽</Text></Text>
                            </Box>
                            <Text mt={'2%'} >Доставляем <Text display='initial' fontWeight='600'>БЕСПЛАТНО </Text></Text>
                        </Box>
                    </Box>

                </Box>


                                            {/* KARTA */}

                <Box w={'60%'} m={'5% 0% 0% 15%'}>
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11948.330307951506!2d60.62119839999999!3d41.52415189999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc976dca6d277%3A0x35d81054b2fe904a!2z0JDQstGC0L7Qu9Cw0LnQvSDQkNCy0YLQviDQodCw0LvQvtC9!5e0!3m2!1sru!2s!4v1695209917221!5m2!1sru!2s" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>


                <Box m={'1% 0% 2% 15%'} display={'flex'} gap={'1%'}>
                <Image mt={'0.6%'} w={'2%'} h={'2%'} src={Info_ic} />
                <Heading size={'lg'}>Информация</Heading>
                </Box>


                <Box w={'57%'} ml={'16%'}  >

                <Box mt={'1%'} display={'flex'}>
                                <Text fontSize={'xl'} >Сервис доставки суши в Краснодаре «Рикша» предлагает чрезвычайно удобный механизм доставки и оплаты. Мы считаем, что наши стандарты работы должны быть классикой и комфортом для заказчика. <Text display='initial' fontWeight='600'>Прием заказов на доставку с 11:00 до 22:30.</Text></Text>
                            </Box>
                            <Box mt={'1%'} display={'flex'}>
                                <Text fontSize={'xl'} >Итак, начнем по доставке. Мы делим Краснодар на зоны доставки — зеленую и желтую. Для каждой зоны мы четко определяем время приезда курьера и в случае задержки Вы получаете приятный сюрприз, о котором мы поговорим чуть позже. Для каждой из зон доставка является абсолютно бесплатной.</Text>
                            </Box>
                            <Box mt={'1%'} display={'flex'}>
                                <Text fontSize={'xl'} > Доставка в зеленую зону Краснодара — до 29 минут (с 10:00 до 23:00. В другое время доставка в зеленую зону до 59 минут). Доставка  в желтую зону — до 59 минут. Мы очень ценим Ваше время, поэтому всегда стараемся уложиться в минимальные сроки и измеряем время минутами, ведь каждая минута важна. Согласитесь, приятно получить вкусные суши в течение 29 минут, правда?</Text>
                            </Box>
                            <Box mt={'1%'} display={'flex'}>
                                <Text fontSize={'xl'} >  Если курьер опаздывает, Вы получаете не только извинения, но и промокод на бесплатный ролл при следующем заказе!</Text>
                            </Box>

                </Box>

                <Box m={'5% 0% 5% 15%'} display={'flex'} gap={'1%'}>
                <Heading>Оплата</Heading>

                <Image w={'3%'} src={Oplata_ic} />
                </Box>


                <Box gap={'5%'} display={'grid'} gridTemplateColumns={{base:"auto",sm:'auto',md:"auto",md:'auto',lg:'auto auto auto',xl:'auto auto auto','2xl':'auto auto auto'}} m={'1% 0% 2% 15%'} w={'60%'}  >
                    <Box border={'1px solid #E2E1E1'} width={'100%'}>
                        <Image position={'relative'} m={'0% 0% 5% 45%'} bottom={'20%'} src={Frame3}/>
                        <Heading textAlign={'center'}  size={'lg'} fontWeight='600'>Оплата наличными</Heading>
                        <Text mb={'10%'} textAlign={'center'}>Рассчитывайтесь за свои любимые суши <br /> Рикша наличными при получении.</Text>
                    </Box>

                    <Box border={'1px solid #E2E1E1'} width={'100%'}>
                        <Image position={'relative'} m={'0% 0% 5% 45%'} bottom={'20%'} src={Frame1}/>
                        <Heading textAlign={'center'}  size={'lg'} fontWeight='600'>Оплата онлайн </Heading>
                        <Text mb={'10%'} textAlign={'center'}>Рассчитывайтесь за свои любимые суши <br /> Рикша онлайн на сайте</Text>
                    </Box>

                    
                    <Box border={'1px solid #E2E1E1'} width={'100%'}>
                        <Image position={'relative'} m={'0% 0% 2% 45%'} bottom={'20%'} src={Frame2}/>
                        <Heading textAlign={'center'}  size={'lg'} fontWeight='600'>Оплата бонусами</Heading>
                        <Text mb={'10%'} textAlign={'center'}>Рассчитывайтесь за свои любимые <br /> суши Рикша личными бонусам</Text>
                    </Box>

                </Box>
    </>
  )
}

export default Dostavka