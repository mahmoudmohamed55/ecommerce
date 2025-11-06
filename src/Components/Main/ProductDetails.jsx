import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ product }) => {
  const { t } = useTranslation();
  if (!product) return null;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2.5,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", flexBasis: "50%" }}>
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "500px",
            objectFit: "cover",
          }}
          src={product.image_url}
          alt=""
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" }, py: 2 }}>
        <Typography variant="h5">{t(product.name)}</Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          {t(product.price)}
        </Typography>

        <Typography variant="body1">{t(product.description)}</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <img
            style={{ borderRadius: 3 }}
            height={100}
            width={90}
            src={product.image_url}
            alt=""
          />
        </Stack>
        <Stack gap={3}>
          <Rating
            precision={0.1}
            name="read-only"
            value={Math.floor(Math.random() * 5) + 1}
            readOnly
          />
          <Button
            sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
            variant="contained"
          >
            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            {t("product.buyNow")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductDetails;
