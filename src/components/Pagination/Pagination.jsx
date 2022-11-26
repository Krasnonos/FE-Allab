import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Wrap, List, Item, Btn } from './Pagination.styled';

const buttons = [1, 2, 3, 4, 5, 20];

export const Pagination = ({ page, setPage }) => {
  const prevBtn = () => {
    if (page === 1) {
      return;
    }
    setPage(prevState => {
      return prevState - 1;
    });
  };

  const nextBtn = () => {
    if (page === 20) {
      return;
    }
    setPage(prevState => {
      return prevState + 1;
    });
  };

  return (
    <Wrap>
      <List>
        <li>
          <Btn type="button" onClick={prevBtn}>
            {<IoIosArrowBack />}
          </Btn>
        </li>
        {buttons.map(btn => (
          <Item key={btn} currentPage={btn === page}>
            <Btn type="button" onClick={() => setPage(btn)}>
              {btn}
            </Btn>
          </Item>
        ))}
        <li>
          <Btn type="button" onClick={nextBtn}>
            {<IoIosArrowForward />}
          </Btn>
        </li>
      </List>
    </Wrap>
  );
};
