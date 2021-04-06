import { Flex, Heading } from '@chakra-ui/react';
import { ContinentBannerProps } from './continent-banner.interface';

export const ContinentBanner = ({ title, urlImage }: ContinentBannerProps) => {
  return (
    <Flex
      backgroundImage={`url('${urlImage}')`}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      height={['150px', '500px']}
      justifyContent={['center', 'space-between']}
      align={['center', 'flex-end']}
      paddingX={['16px', '140px']}
      paddingBottom={['16px', '59px']}
    >
      <Heading fontWeight='600' fontSize={['28px', '48px']} color='gray.200'>
        {title}
      </Heading>
    </Flex>
  );
};
