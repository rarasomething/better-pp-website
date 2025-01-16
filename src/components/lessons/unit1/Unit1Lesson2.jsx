import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit1Lesson2 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit1_lesson2_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit1_lesson2_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph2")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit1_lesson2_question1")}
          answers={[
            t("unit1_lesson2_question1_option1"),
            t("unit1_lesson2_question1_option2"),
          ]}
          correctIndex={1}
          textIfCorrect={t("unit1_lesson2_question1_answer")}
          textIfWrong={t("unit1_lesson2_question1_wrong_answer")}
        />
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph4")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph5")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit1_lesson2_question2")}
          answers={[
            t("unit1_lesson2_question2_option1"),
            t("unit1_lesson2_question2_option2"),
          ]}
          correctIndex={0}
          textIfCorrect={t("unit1_lesson2_question2_answer")}
          textIfWrong={t("unit1_lesson2_question2_wrong_answer")}
        />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph6")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph7")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph8")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit1_lesson2_question3")}
          answers={[
            t("unit1_lesson2_question3_option1"),
            t("unit1_lesson2_question3_option2"),
          ]}
          correctIndex={1}
          textIfCorrect={t("unit1_lesson2_question3_answer")}
          textIfWrong={t("unit1_lesson2_question3_wrong_answer")}
        />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson2_paragraph9")}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Unit1Lesson2;
