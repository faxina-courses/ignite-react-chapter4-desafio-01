import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import { Banner } from '../components/banner';
import { ContinentsSlide } from '../components/continents-slide';
import { Header } from '../components/layout/header';
import { TravelTypes } from '../components/travel-types';

const Home = () => {
  return (
    <Flex direction='column'>
      <Header />
      <Box marginBottom={['36px', '114px']}>
        <Banner />
      </Box>
      <TravelTypes />
      <Center
        width='100%'
        marginTop={['36px', '20']}
        marginBottom={['6', '10']}
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
      <Flex
        align='center'
        justify='center'
        direction='column'
        paddingX={['39px', '140px']}
      >
        <Text
          as='h1'
          fontStyle='Poppins'
          fontWeight='500'
          fontSize={['lg', '4xl']}
        >
          Vamos nessa?
        </Text>
        <Text
          as='h1'
          fontStyle='Poppins'
          fontWeight='500'
          fontSize={['lg', '4xl']}
        >
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex
        marginBottom='10'
        marginX={['0', '100px']}
        marginTop={['20px', '52px']}
      >
        <ContinentsSlide />
      </Flex>
    </Flex>
  );
};

export default Home;
