import { formatDistance } from 'date-fns';
import { Time } from './DateOfPost.styled';

export const DateOfPost = ({ createdTime }) => {
  const currentTime = new Date().getTime();
  const timeToCompere = new Date(createdTime).getTime();
  const differnetTime = formatDistance(currentTime, timeToCompere);
  return <Time>{differnetTime} ago</Time>;
};
