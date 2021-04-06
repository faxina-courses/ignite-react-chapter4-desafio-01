import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { ContinentBanner } from '../components/continent-banner';
import { ContinentInfo } from '../components/continent-info/continent-info';
import { Header } from '../components/layout/header';

const Home = () => {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner title='Europa' urlImage='/europe-banner.png' />
      <Grid
        marginX='140px'
        marginTop='80px'
        templateColumns='1fr 1fr'
        gap='70px'
      >
        <Box>
          <Text fontWeight='400' fontSize='24px' color='gray.600'>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex justifyContent='space-between' align='center'>
          <ContinentInfo title='50' subTitle='países' />
          <ContinentInfo title='60' subTitle='línguas' />
          <ContinentInfo title='27' subTitle='cidades +100' />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Home;
