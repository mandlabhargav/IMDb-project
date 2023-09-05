import { useState } from 'react';



import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material'

import { logoURL } from '../../Constant/Constant';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)`
background: #121212 ;
min-height:56px !important;
padding:0 115px !important;
justify-content: space-between;
& > * {
    padding: 0 16px;
}
& > div {
    display:flex;
    align-items:center;
    curser:pointer;
    & > p {
        font-size:14px;
        font-weight:600
    }
}
& >p {
    font-size:14px;
    font-weight:600
}
`;
const InputSearchField = styled(InputBase)`
background:#FFFFFF;
height:30px;
width:55%;
border-radius: 5px
`
const Logo = styled('img')({
    width: 64
})


const Header = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(null);

    const deleteAccount = () => {
        // Clear local storage data
        localStorage.clear();
        // Navigate back to the signup page
    
        navigate('/');
    };



    const handleLogout = () => {
        // Clear local storage data
        // localStorage.clear();
        // Navigate back to the signup page
    
        navigate('/login');
    };


    const handClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }

    const Name = localStorage.getItem("name")

    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoURL} alt="logo" />
                <Box onClick={handClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField />
                <Typography>IMDb<Box component="span">Pro</Box>            </Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography onClick={handleLogout}>Logout</Typography>
                <Box>
                </Box>
                <Typography onClick={deleteAccount}>DeleteAccount</Typography>
                <Box>
                    <Typography>{Name}</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}
export default Header;