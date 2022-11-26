import { useState } from 'react';
import { useGetJobsList } from '../../hooks/useGetJobsList';
import { JobListItem, Pagination } from 'components';
import { Wrap, List } from './JobsList.styled';

export const JobsList = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useGetJobsList();

  if (!data) {
    return;
  }

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Wrap>
      <List>
        {data.data.map(item => (
          <JobListItem key={item.id} info={item} />
        ))}
      </List>
      <Pagination page={page} setPage={setPage} />
    </Wrap>
  );
};
