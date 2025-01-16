import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";

const Unit4Lesson2 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit4_lesson2_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit4_lesson2_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit4_lesson2_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "300px" }} src={images.unit4Lesson2Photo1} />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit4_lesson2_paragraph2")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "300px" }} src={images.unit4Lesson2Photo2} />
      </Box>
    </Stack>
  );
};

export default Unit4Lesson2;
