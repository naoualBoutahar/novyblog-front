import Popper from "@mui/material/Popper"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export default function PopUp(children) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;
  return (
    <Popper id={id} open={open} anchorEl={anchorEl} transition>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
         {children}
        </Box>
    </Popper>
  )
}

