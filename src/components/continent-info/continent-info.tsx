import { Flex, Text } from '@chakra-ui/react';
import { ContinentInfoProps } from './continent-info.interface';

export const ContinentInfo = ({ title, subTitle }: ContinentInfoProps) => {
  return (
    <Flex direction='column' justifyContent='center' align='center'>
      <Text fontWeight='600' fontSize='48px' color='yellow.700'>
        {title}
      </Text>
      <Text fontWeight='600' fontSize='24px'>
        {subTitle}
      </Text>
    </Flex>
  );
};
