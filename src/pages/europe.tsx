import { Box, Flex, Grid, Text } from '@chakra-ui/react';
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
        templateColumns='1fr 1fr'
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
          <ContinentInfo title='27' subTitle='cidades +100' />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
