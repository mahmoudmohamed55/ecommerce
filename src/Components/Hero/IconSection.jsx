import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTranslation } from "react-i18next";

export default function IconSection() {
  const isWide = useMediaQuery("(min-width:1200px)");
  const { t, i18n } = useTranslation();

  const data = [
    {
      icon: <ElectricBoltIcon fontSize="large" />,
      title: t("Fast Delivery"),
      subTitle: t("Start from $10"),
    },
    {
      icon: <CreditScoreOutlinedIcon fontSize="large" />,
      title: t("Money Guarantee"),
      subTitle: t("7 Days Back"),
    },
    {
      icon: <AccessAlarmOutlinedIcon fontSize="large" />,
      title: t("365 Days"),
      subTitle: t("For free return"),
    },
    {
      icon: <WorkspacePremiumOutlinedIcon fontSize="large" />,
      title: t("Secure Payment"),
      subTitle: t("100% Secure"),
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        divider={isWide ? <Divider orientation="vertical" flexItem /> : null}
        direction={"row"}
        gap={5}
        py={1.5}
        flexWrap={"wrap"}
      >
        {data.map((item, index) => (
          <MyBox
          
            key={index}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            lang={i18n.language}
          />
        ))}
      </Stack>
    </Box>
  );
}

function MyBox({ icon, title, subTitle, lang }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        flexGrow: 1,
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
        py: 2,
        px: 2,
        boxShadow: "1px 3px 4px 2px rgba(85, 85, 85, 0.25)",
        borderRadius: "12px",
        maxWidth: { xs: "100%", sm: "250px" },
        textAlign: lang === "ar" ? "right" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
