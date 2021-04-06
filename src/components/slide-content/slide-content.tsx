import { Flex, Text } from '@chakra-ui/react';
import { SlideContentProps } from './slide-content.interface';

export const SlideContent = ({
  title,
  subTitle,
  imageUrl,
}: SlideContentProps) => {
  return (
    <Flex
      backgroundImage={`url(${imageUrl})`}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      height={['250px', '450px']}
      justify='center'
      align='center'
      direction='column'
    >
      <Text color='gray.200' fontWeight='700' fontSize={['24px', '48px']}>
        {title}
      </Text>
      <Text color='gray.100' fontWeight='700' fontSize={['14px', '24px']}>
        {subTitle}
      </Text>
    </Flex>
  );
};
