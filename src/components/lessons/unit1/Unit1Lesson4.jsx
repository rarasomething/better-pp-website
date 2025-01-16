import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit1Lesson4 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit1_lesson4_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit1_lesson4_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph2")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100px" }} src={images.unit1Lesson4Photo1} />
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph4")}
        </Typography>
      </Box>

      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "400px" }} src={images.unit1Lesson4Photo2} />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit1_lesson4_question1")}
          answers={[
            t("unit1_lesson4_question1_option1"),
            t("unit1_lesson4_question1_option2"),
          ]}
          correctIndex={1}
          textIfCorrect={t("unit1_lesson4_question1_answer")}
          textIfWrong={t("unit1_lesson4_question1_wrong_answer")}
        />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph5")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph6")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph7")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit1_lesson4_paragraph8")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit1_lesson2_question2")}
          answers={[
            t("unit1_lesson4_question2_option1"),
            t("unit1_lesson4_question2_option2"),
            t("unit1_lesson4_question2_option3"),
            t("unit1_lesson4_question2_option4"),
          ]}
          correctIndex={3}
          textIfCorrect={t("unit1_lesson4_question2_answer")}
          textIfWrong={t("unit1_lesson4_question2_wrong_answer")}
        />
      </Box>
    </Stack>
  );
};

export default Unit1Lesson4;
