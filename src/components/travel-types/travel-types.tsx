import { Flex, useBreakpointValue, List } from '@chakra-ui/react';
import { MobileTravelType } from '../mobile-travel-type';
import { TravelType } from '../travel-type/travel-type';

export const TravelTypes = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobile) {
    return (
      <List marginX='50px'>
        <Flex justifyContent='space-between' marginBottom='29px'>
          <MobileTravelType title='vida noturna' />
          <MobileTravelType title='praia' />
        </Flex>
        <Flex justifyContent='space-between' marginBottom='29px'>
          <MobileTravelType title='moderno' />
          <MobileTravelType title='clássico' />
        </Flex>
        <MobileTravelType title='e mais...' />
      </List>
    );
  }

  return (
    <Flex justifyContent='center' align='center' paddingX='140px'>
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
  );
};
