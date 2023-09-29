import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  // por si el título es muy largo, que se corte y se muestren los ...
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch( setActiveNote({ title, body, id, date, imageUrls }) );
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
