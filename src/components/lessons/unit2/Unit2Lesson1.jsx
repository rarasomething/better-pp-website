import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit2Lesson1 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit2_lesson1_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit2_lesson1_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph2")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph4")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph5")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph6")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph7")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit2_lesson1_question1")}
          answers={[
            t("unit2_lesson1_question1_option1"),
            t("unit2_lesson1_question1_option2"),
            t("unit2_lesson1_question1_option3"),
            t("unit2_lesson1_question1_option4"),
          ]}
          correctIndex={1}
          textIfCorrect={t("unit1_lesson4_question2_answer")}
          textIfWrong={t("unit1_lesson4_question2_wrong_answer")}
        />
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson1_paragraph8")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit2Lesson1;
