import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { ContinentsSlide } from '../components/continents-slide';
import { Header } from '../components/layout/header';
import { TravelType } from '../components/travel-type';

const Home = () => {
  return (
    <Flex direction='column'>
      <Header />
      <Flex
        position='relative'
        backgroundImage="url('/Background.png')"
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        height='335px'
        justifyContent='space-between'
        paddingX='140px'
      >
        <Flex align='flex-start' justify='center' direction='column'>
          <Heading
            as='h1'
            color='gray.200'
            fontWeight={500}
            fontSize='4xl'
            marginBottom='5'
            maxWidth='426px'
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            as='p'
            fontWeight='400'
            fontSize='lg'
            maxWidth='524px'
            color='gray.100'
          >
            Chegou a hora de tirar do papel a viaem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          src='/Airplane.png'
          al='Banner'
          transform='rotate(3deg)'
          position='absolute'
          top='76px'
          right='140px'
        />
      </Flex>
      <Flex
        justifyContent='center'
        align='center'
        marginTop='114px'
        paddingX='140px'
      >
        <Flex justifyContent='flex-start' marginRight='auto' flex='1'>
          <TravelType title='vida noturna' iconPath='/cocktail.png' />
        </Flex>
        <Flex justifyContent='flex-start' flex='1'>
          <TravelType title='praia' iconPath='/surf.png' />
        </Flex>
        <Flex justifyContent='center' flex='1'>
          <TravelType title='moderno' iconPath='/building.png' />
        </Flex>
        <Flex justifyContent='flex-end' flex='1'>
          <TravelType title='clássico' iconPath='/museum.png' />
        </Flex>
        <Flex justifyContent='flex-end' marginLeft='auto' flex='1'>
          <TravelType title='e mais...' iconPath='/earth.png' />
        </Flex>
      </Flex>
      <Center
        width='100%'
        marginTop='20'
        marginBottom='3.25rem'
        paddingX='140px'
      >
        <Divider
          orientation='horizontal'
          border='2px solid'
          borderColor='gray.600'
          backgroundColor='gray.600'
          width='90px'
          size='2px'
        />
      </Center>
      <Flex align='center' justify='center' direction='column' paddingX='140px'>
        <Text as='h1' fontStyle='Poppins' fontWeight='500' fontSize='4xl'>
          Vamos nessa?
        </Text>
        <Text as='h1' fontStyle='Poppins' fontWeight='500' fontSize='4xl'>
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex marginBottom='10' marginX='100px' marginTop='52px'>
        <ContinentsSlide />
      </Flex>
    </Flex>
  );
};

export default Home;
