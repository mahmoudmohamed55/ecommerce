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

export default function Register() {
  const theme = useTheme();
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [accept, setAccept] = useState(false);

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);
    if (
      !regEmail.test(email) ||
      !passwordRegExp.test(password) ||
      fullName === ""
    ) {
      return;
    }
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName || null } },
      });
      console.log(data);

      if (error) console.log(error);
      navigate("/");
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
              {t("register.createAccount")}
            </Typography>

            <Stack direction="column" gap={2}>
              <TextField
                onChange={(e) => setFullName(e.target.value)}
                name="fullName"
                label={t("register.fullName")}
                value={fullName}
                variant="filled"
                error={accept && fullName === ""}
                helperText={
                  accept && fullName === "" ? t("register.required") : ""
                }
              />
              <TextField
                type="email"
                label={t("register.email")}
                variant="filled"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                error={accept && !regEmail.test(email)}
                helperText={
                  accept && !regEmail.test(email)
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
                error={accept && !passwordRegExp.test(password)}
                helperText={
                  accept && !passwordRegExp.test(password)
                    ? t("register.passwordError")
                    : ""
                }
              />
            </Stack>

            <Button type="submit" variant="contained">
              {t("register.signUp")}
            </Button>

            <Typography textAlign="center" variant="body1">
              {t("register.haveAccount")}
              <Link
                to="/login"
                style={{
                  color: "crimson",
                  cursor: "pointer",
                  marginInline: "5px",
                }}
              >
                {t("register.login")}
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
