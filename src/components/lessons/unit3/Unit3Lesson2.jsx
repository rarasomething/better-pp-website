import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit3Lesson2 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit3_lesson2_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit3_lesson2_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          sx={{ backgroundColor: "#ffff00" }}
          variant="paragraph"
          fontSize="1rem"
        >
          {t("unit3_lesson2_paragraph2")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit2_lesson2_question1")}
          answers={[
            t("unit3_lesson2_question1_option1"),
            t("unit3_lesson2_question1_option2"),
          ]}
          correctIndex={1}
          textIfCorrect={t("unit3_lesson2_question1_answer")}
          textIfWrong={t("unit3_lesson2_question1_wrong_answer")}
        />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph4")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph5")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph6")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson2_paragraph7")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit3Lesson2;
