import { Flex, ListItem, Image, Text } from '@chakra-ui/react';
import { MobileTravelTypeProps } from './mobile-travel-type.interface';

export const MobileTravelType = ({ title }: MobileTravelTypeProps) => {
  return (
    <Flex as={ListItem} justify='center' alignItems='center'>
      <Image src='/Ellipse.png' alt='ellipse' marginRight='8px' />
      <Text fontWeight='500' fontSize='18px'>
        {title}
      </Text>
    </Flex>
  );
};
