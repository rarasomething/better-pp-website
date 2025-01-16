import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit1Lesson3 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit1_lesson3_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit1_lesson3_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson3_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson3_paragraph2")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson3_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100%" }} src={images.unit1Lesson3Photo1} />
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson3_paragraph4")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit1Lesson3;
