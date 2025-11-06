import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Window as WindowIcon,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  KeyboardArrowRightOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import Links2 from "./Links";
import { useTranslation } from "react-i18next";

const Header3 = () => {
  const theme = useTheme();
  let { t } = useTranslation();

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: 2,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleMenuClick}
          sx={{
            width: 222,
           
            color: theme.palette.text.secondary,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <WindowIcon />
          <Typography>{t("All Categories")}</Typography>
          <KeyboardArrowRightOutlined />
        </Button>

        <Menu
          sx={{
            ".MuiPaper-root": {
              
              width: 222,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t("Bikes")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t("Electronics")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t("Books")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t("Games")}</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery(theme.breakpoints.up("lg")) && (
        <>
          <Links2 tittle={"Home"} />
          <Links2 tittle={"Mega Menu"} />
          <Links2 tittle={"Full Screen Menu"} />
          <Links2 tittle={"Pages"} />
          <Links2 tittle={"User Account"} />
          <Links2 tittle={"Vendor Account"} />
        </>
      )}
      {useMediaQuery(theme.breakpoints.down("lg")) && (
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "70%",
            mx: "auto",
            mt: 6,
            mb: 2,
            position: "relative",
            pt: 5,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              zIndex: 2,
              top: "-10px",
              right: "-10px",
              ":hover": {
                color: "red",
                rotate: "180deg",
                transition: "0.3s",
              },
            }}
            onClick={toggleDrawer(false)}
          >
            <Close />
          </IconButton>
          {[
            { mainLink: "Home", subLinks: ["Dashboard", "Products", "Orders"] },
            {
              mainLink: "Mega Menu",
              subLinks: ["Dashboard", "Products", "Orders"],
            },
            {
              mainLink: "Full Screen Menu",
              subLinks: ["Dashboard", "Products", "Orders"],
            },
            {
              mainLink: "Pages",
              subLinks: ["Dashboard", "Products", "Orders"],
            },
            {
              mainLink: "User Account",
              subLinks: ["Dashboard", "Products", "Orders"],
            },
            {
              mainLink: "Vendor Account",
              subLinks: ["Dashboard", "Products", "Orders"],
            },
          ].map(({ mainLink, subLinks }) => (
            <Accordion sx={{ mb: 1 }} key={mainLink}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{t(mainLink)}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {subLinks.map((link, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <KeyboardArrowRightOutlined />
                      </ListItemIcon>
                      <ListItemText primary={t(link)} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
