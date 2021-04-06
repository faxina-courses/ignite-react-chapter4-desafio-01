import { Flex, Image, Text } from '@chakra-ui/react';
import { CityProps } from './city.interface';

export const City = ({ country, name, urlFlag, urlImage }: CityProps) => {
  return (
    <Flex direction='column' borderWidth='1px' borderColor='yellow.700'>
      <Image src={urlImage} alt='Country photo' height='173px' width='100%' />
      <Flex
        justify='space-between'
        align='center'
        marginX='24px'
        marginTop='18px'
        marginBottom='25px'
      >
        <Flex direction='column'>
          <Text
            marginBottom='12px'
            fontFamily='Barlow'
            fontWeight='600'
            fontSize='20px'
            color='gray.600'
          >
            {country}
          </Text>
          <Text
            fontFamily='Barlow'
            fontWeight='500'
            fontSize='16px'
            color='gray.300'
          >
            {name}
          </Text>
        </Flex>
        <Image src={urlFlag} alt='Flag' width='30px' height='30px' />
      </Flex>
    </Flex>
  );
};
