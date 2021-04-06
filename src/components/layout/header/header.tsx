import { IconButton, Flex, Image } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { HeaderProps } from './header.interface';

export const Header = ({ goBack }: HeaderProps) => {
  return (
    <Flex
      position='relative'
      as='header'
      width='100%'
      align='center'
      justifyContent='center'
      height='100px'
      paddingY='27px'
      paddingX={['16px', '140px']}
    >
      <IconButton
        position='absolute'
        left={['16px', '140px']}
        aria-label='Go back'
        background='transparent'
        icon={<RiArrowLeftSLine />}
        fontSize='32px'
      />
      <Image src='/Logo.png' alg='WorldTrip' />
    </Flex>
  );
};
