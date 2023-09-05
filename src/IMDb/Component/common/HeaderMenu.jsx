


import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { routhPath } from '../../Constant/Route';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';




const HeaderMenu = ({ open, handleClose }) => {
    const openMenu = Boolean(open);
    return (
        <Menu
            id="basic-menu"
            anchorEl={open}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}


        >
            
            <Link to="/popular" style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={handleClose}>Popular</MenuItem>
            </Link>
            <Link to="/TopRated" style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={handleClose}>Top Rated</MenuItem>
            </Link>
            <Link to="/Upcoming" style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={handleClose}>Upcoming</MenuItem>
            </Link>
            
        </Menu>

    )
}
export default HeaderMenu