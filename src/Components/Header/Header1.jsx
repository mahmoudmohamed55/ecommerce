import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/Theme/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Header1() {
  const { t, i18n } = useTranslation();
  const context = useContext(ThemeContext);
  const theme = useTheme();

  const options = ["EN", "AR"];
  const currentLang = i18n.language.toUpperCase();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem("lang", lang.toLowerCase());
    handleClose();
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.bg.main,
        py: 0.5,
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                mr: 2,
                p: {
                  xs: "5px 2px",
                  sm: "4px 10px",
                },
                bgcolor: "#D23F57",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "bold",
                color: theme.palette.myColor.main,
              }}
            >
              {t("Hot")}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: theme.palette.myColor.main,
              }}
              variant="body1"
            >
              {t("Free Express Shipping")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={context.toggleMode}  color="inherit">
              {theme.palette.mode === "light" ? (
                <LightModeOutlined
                  sx={{ fontSize: "20px", color: theme.palette.myColor.main }}
                />
              ) : (
                <DarkModeOutlined
                  sx={{ fontSize: "20px", color: theme.palette.myColor.main }}
                />
              )}
            </IconButton>

            <List component="nav" sx={{ p: 0, m: 0 }}>
              <ListItem
                id="lang-button"
                aria-controls="lang-menu"
                aria-haspopup="listbox"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ px: 1, "&:hover": { cursor: "pointer" } }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "15px",
                      color: theme.palette.myColor.main,
                    },
                  }}
                  secondary={currentLang === "AR" ? "العربية" : "English"}
                />
                <ExpandMore sx={{ color: theme.palette.myColor.main }} />
              </ListItem>
            </List>

            <Menu
              id="lang-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lang-button",
                role: "listbox",
              }}
            >
              {options
                .filter((option) => option !== currentLang)
                .map((option) => (
                  <MenuItem
                    
                    key={option}
                    sx={{ fontSize: "11px", p: "10px 20px", minHeight: "10px" }}
                    onClick={() => handleLanguageChange(option)}
                  >
                    {option === "EN" ? "الانجليزية" : "Arabic"}
                  </MenuItem>
                ))}
            </Menu>

            <Stack direction="row" alignItems="center" gap={1}>
              <FacebookIcon
                sx={{ fontSize: "20px", color: theme.palette.myColor.main }}
              />
              <XIcon
                sx={{
                  fontSize: "20px",
                  color: theme.palette.myColor.main,
                  ml: 0,
                }}
              />
              <InstagramIcon
                sx={{ fontSize: "20px", color: theme.palette.myColor.main }}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
