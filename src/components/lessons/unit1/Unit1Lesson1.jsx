import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Exercise from "../../Exercise";

const Unit1Lesson1 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit1_lesson1_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit1_lesson1_info")}
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph1")}
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph2")}
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph3")}
        </Typography>
      </Box>

      <Exercise
        question={t("unit1_lesson1_question1")}
        answers={[
          t("unit1_lesson1_question1_option1"),
          t("unit1_lesson1_question1_option2"),
        ]}
        correctIndex={0}
        textIfCorrect={t("unit1_lesson1_question1_answer")}
        textIfWrong={t("unit1_lesson1_question1_wrong_answer")}
      />
      <Box marginTop="20px" marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph4")}
        </Typography>
      </Box>
      <Exercise
        question={t("unit1_lesson1_question2")}
        answers={[
          t("unit1_lesson1_question2_option1"),
          t("unit1_lesson1_question2_option2"),
          t("unit1_lesson1_question2_option3"),
          t("unit1_lesson1_question2_option4"),
        ]}
        correctIndex={2}
        textIfCorrect={t("unit1_lesson1_question2_answer")}
        textIfWrong={t("unit1_lesson1_question2_wrong_answer")}
      />
      <Box marginTop="20px" marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph5")}
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson1_paragraph6")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit1Lesson1;
