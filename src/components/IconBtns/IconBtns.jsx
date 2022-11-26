import svg from 'images/symbol-defs.svg';
import { Btn, Svg } from './IconBtns.styled';

export const IconBtns = () => {
  return (
    <div>
      <Btn type="button">
        <Svg>
          <use href={`${svg}#icon-starIcon`}></use>
        </Svg>
        Save to my list
      </Btn>
      <Btn type="button">
        <Svg>
          <use href={`${svg}#icon-Share`}></use>
        </Svg>
        Share
      </Btn>
    </div>
  );
};
