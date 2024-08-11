/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, link: "home" },
    { text: "Arsitektur", icon: <AccountTreeIcon />, link: "arsitektur" },
    { text: "Jenis", icon: <CategoryIcon />, link: "jenis" },
    { text: "Tentang Kami", icon: <InfoIcon />, link: "tentang-kami" },
    { text: "Unggah", icon: <CloudUploadIcon />, link: "upload" },
    { text: "Contact Us", icon: <ShoppingCartRoundedIcon />, link: "footer" }, // Using ShoppingCartRoundedIcon as an example
  ];

  return (
    <nav className="navbar">
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <ScrollLink
            key={item.text}
            to={item.link}
            smooth={true}
            duration={500}
            offset={-60} // Adjust this value based on your navbar height
            className="navbar-link"
          >
            {item.text}
          </ScrollLink>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-60} // Adjust this value based on your navbar height
                className="drawer-link"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </ScrollLink>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;