import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Links2({ tittle }) {
  let { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show": { display: "block" },
      }}
    >
      <Typography variant="body1">{t(tittle)}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Paper
        className="show"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: " translateX(-50%)",
          display: "none",
          zIndex: 2,
        }}
      >
        <nav aria-label="secondary mailbox folders">
          <List sx={{ p: 1 }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  p: 0,
                  px: 1.5,
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "15px",
                      fontWeight: 300,
                    },
                  }}
                  primary={t("Home")}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                position: "relative",
                ":hover .sub-list": { display: "block" },
              }}
              disablePadding
            >
              <ListItemButton
                sx={{
                  display: "flex",
                  p: 0,
                  px: 1.5,
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "15px",
                      fontWeight: 300,
                    },
                  }}
                  primary={t("Products")}
                />
                <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
              </ListItemButton>
              {tittle === "Vendor Account" ? (
                ""
              ) : (
                <Box
                  className="sub-list"
                  sx={{
                    position: "absolute",
                    top: "10px",
                    minWidth: "170px",
                    left: "100%",
                    display: "none",
                  }}
                >
                  <Paper sx={{ p: 1 }}>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          display: "flex",
                          p: 0,
                          px: 1.5,
                        }}
                      >
                        <ListItemText
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "15px",
                              fontWeight: 300,
                            },
                          }}
                          primary={t("Add Products")}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          display: "flex",
                          p: 0,
                          px: 1.5,
                        }}
                      >
                        <ListItemText
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "15px",
                              fontWeight: 300,
                            },
                          }}
                          primary={t("Edit Products")}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Paper>
                </Box>
              )}
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  p: 0,
                  px: 1.5,
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "15px",
                      fontWeight: 300,
                    },
                  }}
                  primary={t("Orders")}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  p: 0,
                  px: 1.5,
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "15px",
                      fontWeight: 300,
                    },
                  }}
                  primary={t("Profile")}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>
    </Box>
  );
}
