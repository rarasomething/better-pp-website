import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";

const Unit4Lesson3 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit4_lesson3_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit4_lesson3_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit4_lesson3_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "500px" }} src={images.unit4Lesson3Photo1} />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit4_lesson3_paragraph2")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit4Lesson3;
