import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.headers.common[
  'Authorization'
] = `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

export const useGetJobsList = () => {
  return useQuery({
    queryKey: ['jobsList'],
    queryFn: () =>
      axios('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?', {
        retry: false,
        refetchOnWindowFocus: false,
      }),
  });
};
