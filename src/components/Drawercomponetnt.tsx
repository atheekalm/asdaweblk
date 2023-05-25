import { ExpandLess, ExpandMore, KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material"
import React, { useState } from "react";
import { menuItems } from "../constant/menuitems";
import { SidebarMenuItem } from "../models/MenuItem";
import { useNavigate } from "react-router-dom";


interface Props {
    isOpen: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export const Drawercomponetnt: React.FC<Props> = (props) => {
    const { isOpen, setOpenDrawer } = props;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()



    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleClickNav = (item: SidebarMenuItem) => {
        if (item.childrens?.length) {
            setOpen(!open);
        }
        if (item.path) {
            navigate(item.path);
            handleDrawerClose();
        }
    }
    const handleClickSideNav = (item: SidebarMenuItem) => {
        if (item.path) {
            console.log(item.path);
            setOpen(!open);
            handleDrawerClose();
            return navigate(item.path);
        }
    }
    const isExpandable = (item: SidebarMenuItem) => {
        if (item.caption === 'Subjects') {
            return open ? <ExpandLess /> : <ExpandMore />
        }
    }

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={() => setOpenDrawer(false)}
        >
            <Box width={'250px'}>
                <DrawerHeader>
                    <Box>
                        <Typography variant="h6">ASDA</Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={handleDrawerClose}>
                            {isOpen &&
                                <KeyboardArrowLeft />
                            }
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <>
                            <ListItem
                                disablePadding
                                divider={item.divider}
                                key={index}
                                onClick={() => handleClickNav(item)}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.caption}
                                    </ListItemText>
                                    {isExpandable(item)}
                                </ListItemButton>
                            </ListItem>
                            {item.childrens?.map((child, index) => (
                                <Collapse key={index} in={open} timeout="auto" unmountOnExit>
                                    <List >
                                        <ListItem
                                            disablePadding
                                            onClick={() => handleClickSideNav(child)}
                                        >
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    {child.icon}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {child.caption}
                                                </ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            ))}
                        </>
                    ))}

                    {/* <ListItem
                        disablePadding
                        divider={!open}
                        onClick={handleClick}
                    >
                        <ListItemButton
                        >
                            <ListItemIcon>
                                <LibraryBooksOutlined />
                            </ListItemIcon>
                            <ListItemText>
                                Subjects
                            </ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List >
                            <ListItem
                                disablePadding
                                onClick={() => navigate(PATHS.PHYSICAL_SCIECNCE)}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <CalculateOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Physical Science
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                onClick={() => navigate(PATHS.BIO_SCIECNCE)}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <BiotechOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Bio Science
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                onClick={() => navigate(PATHS.TECHNOLOGY)}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <LightbulbCircleOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Technology
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem
                        disablePadding
                        divider
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupWorkOutlined />
                            </ListItemIcon>
                            <ListItemText>
                                Lecture Pannel
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        divider
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <QuizOutlined />
                            </ListItemIcon>
                            <ListItemText>
                                Who We Are
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        divider
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <ContactPhoneOutlined />
                            </ListItemIcon>
                            <ListItemText>
                                Contact Us
                            </ListItemText>
                        </ListItemButton>
                    </ListItem> */}
                </List>
            </Box>
            <Box></Box>
        </Drawer>
    )
}
