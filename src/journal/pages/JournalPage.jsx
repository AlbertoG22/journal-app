import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia necessitatibus sunt exercitationem iusto laboriosam vel animi corrupti a in, quis quasi reprehenderit debitis quod fugiat aut repellat officiis cum.</Typography> */}
      <NothingSelectedView />
    </JournalLayout>
  );
};
