import { FlexboxProps, SpaceProps } from '@chakra-ui/react';

export type TravelTypeProps = SpaceProps &
  FlexboxProps & {
    iconPath: string;
    title: string;
  };
