import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { City } from '../components/city';
import { ContinentBanner } from '../components/continent-banner';
import { ContinentInfo } from '../components/continent-info/continent-info';
import { Header } from '../components/layout/header';

const Home = () => {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner title='Europa' urlImage='/europe-banner.png' />
      <Flex
        marginX={['16px', '140px']}
        marginTop={['24px', '80px']}
        justifyContent='space-between'
        direction={['column', 'row']}
      >
        <Box flex='1' marginRight={['0px', '35px']}>
          <Text
            fontWeight='400'
            fontSize={['14px', '24px']}
            color='gray.600'
            textAlign='justify'
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex
          justifyContent='space-between'
          align='center'
          flex='1'
          marginLeft={['0px', '35px']}
          marginTop={['16px', '0px']}
        >
          <ContinentInfo title='50' subTitle='países' />
          <ContinentInfo title='60' subTitle='línguas' />
          <ContinentInfo
            title='27'
            subTitle='cidades +100'
            subtitleIcon={HiOutlineExclamationCircle}
          />
        </Flex>
      </Flex>
      <Box
        marginX={['16px', '140px']}
        marginTop={['32px', '80px']}
        marginBottom='35px'
      >
        <Heading fontWeight='500' fontSize={['24px', '36px']}>
          Cidades +100
        </Heading>
        <SimpleGrid
          marginTop='40px'
          marginX={['44px', '0']}
          borderRadius='4px'
          spacing='45px'
          columns={[1, 5]}
        >
          <City
            country='Reino Unido'
            name='Londres'
            urlImage='/great-britain-photo.png'
            urlFlag='/great-britain.png'
          />
          <City
            country='França'
            name='Paris'
            urlImage='/france-photo.png'
            urlFlag='/france.png'
          />
          <City
            country='Itália'
            name='Roma'
            urlImage='/italy-photo.png'
            urlFlag='/italy.png'
          />
          <City
            country='República Tcheca'
            name='Praga'
            urlImage='/czech-republic-photo.png'
            urlFlag='/czech-republic.png'
          />
          <City
            country='Holanda'
            name='Amsterdã'
            urlImage='/netherlands-photo.png'
            urlFlag='/netherlands.png'
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Home;
