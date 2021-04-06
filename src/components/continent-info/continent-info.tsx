import { Flex, Icon, Text } from '@chakra-ui/react';
import { ContinentInfoProps } from './continent-info.interface';

export const ContinentInfo = ({
  title,
  subTitle,
  subtitleIcon,
}: ContinentInfoProps) => {
  return (
    <Flex direction='column' justifyContent='center' align='center'>
      <Text fontWeight='600' fontSize={['24px', '48px']} color='yellow.700'>
        {title}
      </Text>
      <Flex align='center'>
        <Text fontWeight='600' fontSize={['18px', '24px']}>
          {subTitle}
        </Text>
        {subtitleIcon && (
          <Icon fontSize='20' as={subtitleIcon} marginLeft='5px' />
        )}
      </Flex>
    </Flex>
  );
};
