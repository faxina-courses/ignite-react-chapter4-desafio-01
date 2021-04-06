import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export const Banner = () => {
  const showAirplaneImage = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      position='relative'
      backgroundImage="url('/Background.png')"
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      height='335px'
      justifyContent='space-between'
      paddingX={['16px', '140px']}
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
      {showAirplaneImage && (
        <Image
          src='/Airplane.png'
          al='Banner'
          transform='rotate(3deg)'
          position='absolute'
          top='76px'
          right='140px'
        />
      )}
    </Flex>
  );
};
