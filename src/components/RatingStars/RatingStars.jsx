import svg from '../../images/symbol-defs.svg';
import { Svg, Wrap } from './RatingStars.styled';

export const RatingStars = () => {
  return (
    <Wrap>
      <Svg>
        <use href={`${svg}#icon-starIcon`}></use>
      </Svg>
      <Svg>
        <use href={`${svg}#icon-starIcon`}></use>
      </Svg>
      <Svg>
        <use href={`${svg}#icon-starIcon`}></use>
      </Svg>
      <Svg>
        <use href={`${svg}#icon-starIcon`}></use>
      </Svg>
      <Svg>
        <use href={`${svg}#icon-starIcon`}></use>
      </Svg>
    </Wrap>
  );
};
