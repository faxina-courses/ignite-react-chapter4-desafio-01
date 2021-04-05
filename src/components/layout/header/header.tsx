import { Flex, Image } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as='header'
      width='100%'
      align='center'
      justifyContent='center'
      height='100px'
      paddingY='27px'
    >
      <Image src='/Logo.png' alg='WorldTrip' />
    </Flex>
  );
};
