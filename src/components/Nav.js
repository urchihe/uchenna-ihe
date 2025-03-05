import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import RouterLink from '@mui/material/Link';

const drawerWidth = 240;
const navItems = [
    { label: 'About Me', id: 'about-me', url: null},
    { label: 'Skills', id: 'skills', url: null },
    { label: 'LinkedIn', id: 'linkedin', url: 'https://www.linkedin.com/in/uchenna-ihe-29514869/' },
    { label: 'Github', id: 'github', url: 'https://github.com/urchihe' },
];
const dropdownItems = [
    { label: 'FrontEnd Development', id: 'frontend-development' },
    { label: 'BackEnd Development', id: 'backend-development' },
    { label: 'Mobile Development', id: 'mobile-development' },
];


export default function Nav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleMenuOpen = (event) => {
         event.persist();
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                UI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* Dropdown in the drawer */}
                <ListItem disablePadding>
                    <ListItemButton onClick={handleMenuOpen}>
                        <ListItemText primary="Dropdown" />
                    </ListItemButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {dropdownItems.map((dropdownItem) => (
                            <MenuItem key={dropdownItem.id} onClick={handleMenuClose}>
                                {dropdownItem.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        UCHENNA IHE
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.label} sx={{ color: '#fff' }}>
                                {!item.url ? (<Link
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    spy={true}
                                    exact="true"
                                >
                                    {item.label}
                                </Link>)
                                :(<RouterLink
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                    {item.label}
                                    </RouterLink>)
                                }
                            </Button>
                        ))}
                        <Button sx={{ color: '#fff' }} onClick={handleMenuOpen}>
                            Services
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {dropdownItems.map((dropdownItem) => (
                                <Link
                                    to={dropdownItem.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    spy={true}
                                    key={dropdownItem.id}
                                    exact="true"
                                >
                                    {dropdownItem.label}
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}