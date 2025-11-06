import {
  AccountCircle,
  ExpandMore,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../Context/AuthContext";
import logoLight from "../../images/Logo.png";
import logoDark from "../../images/Free.png";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  borderRadius: "22px",
  border: "1px solid #777",
  flexGrow: 0.5,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "200px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {
  const options = ["All Categories", "CAR", "Clothes", "Electronics"];
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);
  
  const [role, setRole] = useState(null);
  const isWide = useMediaQuery("(min-width:700px)");

  // القوائم
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(options[0]);

  const openCategory = Boolean(categoryAnchorEl);
  const openProfile = Boolean(profileAnchorEl);

  const handleClickCategory = (event) =>
    setCategoryAnchorEl(event.currentTarget);
  const handleCloseCategory = () => setCategoryAnchorEl(null);
  const handleSelectCategory = (option) => {
    setSelectedCategory(option);
    handleCloseCategory();
  };
  const handleClickProfile = (event) => setProfileAnchorEl(event.currentTarget);
  const handleCloseProfile = () => setProfileAnchorEl(null);
  useEffect(() => {
    if (!user) return setRole(null);
    let getRole = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        if (error) return setRole(null);
        setRole(data.role);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      getRole();
    }
  }, [user]);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-between",
        my: 1,
        gap: isWide ? 0 : 2,
      }}
    >
      {/* الشعار */}
      <Box sx={{ textAlign: "center" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={theme.palette.mode === "dark" ? logoDark : logoLight}
            alt="logo"
            width="170px"
            height="50px"
          />
        </Link>
      </Box>

      {/* البحث فقط على الشاشات الواسعة */}
      {user && isWide && (
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t("Search...")}
            inputProps={{ "aria-label": "search" }}
          />
          <List
            component="nav"
            sx={{
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              borderLeft: "1px solid #777",
              p: "0",
              height: "100%",
            }}
          >
            <ListItem
              id="category-button"
              aria-controls="category-menu"
              aria-haspopup="listbox"
              aria-expanded={openCategory ? "true" : undefined}
              onClick={handleClickCategory}
              sx={{
                px: 1,
                "&:hover": { cursor: "pointer" },
                width: { xs: "150px" },
                height: "100%",
              }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "15px" },
                }}
                secondary={t(selectedCategory)}
              />
              <ExpandMore sx={{ color: theme.palette.favColor.main }} />
            </ListItem>
          </List>
          <Menu
            id="category-menu"
            anchorEl={categoryAnchorEl}
            open={openCategory}
            onClose={handleCloseCategory}
            MenuListProps={{
              "aria-labelledby": "category-button",
              role: "listbox",
            }}
          >
            {options.map((option) => (
              <MenuItem
                onClick={() => handleSelectCategory(option)}
                key={option}
                sx={{ fontSize: "11px", p: "10px 20px", minHeight: "10px" }}
              >
                {t(option)}
              </MenuItem>
            ))}
          </Menu>
        </Search>
      )}

      {/* الأيقونات + الأزرار */}
      <Stack
        direction={isWide ? "row" : "row"}
        gap={1.5}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={2} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>

        {user && (
          <div>
            {" "}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleClickProfile}
              color="inherit"
            >
              {" "}
              <AccountCircle />{" "}
            </IconButton>{" "}
            {/* القائمة الخاصة بالبروفايل */}{" "}
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              open={openProfile}
              onClose={handleCloseProfile}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {" "}
              <MenuItem onClick={handleCloseProfile}>
                {" "}
                {user.user_metadata.full_name}{" "}
              </MenuItem>{" "}
              <MenuItem onClick={handleCloseProfile}>My account</MenuItem>{" "}
            </Menu>{" "}
          </div>
        )}

        {role === "admin" && (
          <Typography
            variant="body2"
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              cursor: "pointer",
              color: "primary.main",
              ":hover": { backgroundColor: "primary.main", color: "white" },
            }}
            onClick={() => navigate("/admin")}
          >
            {t("Admin Dashboard")}
          </Typography>
        )}

        {user && (
          <Typography
            variant="body2"
            sx={{
              border: "1px solid",
              borderColor: "error.main",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              cursor: "pointer",
              color: "error.main",
              ":hover": { backgroundColor: "error.main", color: "white" },
            }}
            onClick={() => supabase.auth.signOut()}
          >
            {t("Logout")}
          </Typography>
        )}

        {user === null && (
          <>
            <Typography
              variant="body2"
              sx={{
                border: "1px solid",
                borderColor: "primary.main",
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                cursor: "pointer",
                color: "primary.main",
                ":hover": { backgroundColor: "primary.main", color: "white" },
              }}
              onClick={() => navigate("/register")}
            >
              {t("Register")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                border: "1px solid",
                borderColor: "primary.main",
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                cursor: "pointer",
                color: "primary.main",
                ":hover": { backgroundColor: "primary.main", color: "white" },
              }}
              onClick={() => navigate("/login")}
            >
              {t("Login")}
            </Typography>
          </>
        )}
      </Stack>
    </Container>
  );
}
