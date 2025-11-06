import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import Loading from "../Components/Loading/Loading";

export default function Login() {
  const theme = useTheme();
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [accept, setAccept] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);
    if (!email || !password) {
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log("Login error:", error);
      } else {
        console.log("User logged in:", data);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            height: "calc(100vh - 100px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 8,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: theme.palette.bg.main,
              maxWidth: "400px",
              width: "100%",
              p: 5,
              borderRadius: "12px",
              boxShadow: "1px 3px 4px 2px rgba(85, 85, 85, 0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography textAlign="center" variant="h4" color="primary">
              {t("register.login")}
            </Typography>

            <Stack direction="column" gap={2}>
              <TextField
                type="email"
                label={t("register.email")}
                variant="filled"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                error={accept && !email.includes("@")}
                helperText={
                  accept && !email.includes("@")
                    ? t("register.invalidEmail")
                    : ""
                }
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                value={password}
                label={t("register.password")}
                variant="filled"
                error={accept && password.length < 8}
                helperText={
                  accept && password.length < 8
                    ? t("register.passwordError")
                    : ""
                }
              />
            </Stack>

            <Button type="submit" variant="contained">
              {t("register.login")}
            </Button>

            <Typography textAlign="center" variant="body1">
              {t("register.Dont have an account?")}
              <Link
                to="/register"
                style={{
                  color: "crimson",
                  cursor: "pointer",
                  marginInline: "5px",
                }}
              >
                {t("register.createAccount")}
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
