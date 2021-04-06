import {
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TravelTypeProps } from './travel-type.interface';

export const TravelType = ({
  iconPath,
  title,
  ...restProps
}: TravelTypeProps) => {
  return (
    <Flex align='center' justify='center' direction='column' {...restProps}>
      <Image height='85px' width='85px' src={iconPath} alt={title} />
      <Text fontWeight='600' fontSize='24px' marginTop='24px'>
        {title}
      </Text>
    </Flex>
  );
};
