import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#47585B',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#F5F8FA',
      '100': '#DADADA',
      '50': '#EEEEF2',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.600',
      },
    },
  },
});
