import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit3Lesson3 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit3_lesson3_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit3_lesson3_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph2")}
        </Typography>
      </Box>

      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100%" }} src={images.unit3Lesson3Photo1} />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph4")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph5")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph6")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit3_lesson3_paragraph7")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit3_lesson3_question1")}
          answers={[
            t("unit3_lesson3_question1_option1"),
            t("unit3_lesson3_question1_option2"),
            t("unit3_lesson3_question1_option3"),
            t("unit3_lesson3_question1_option4"),
          ]}
          correctIndex={3}
          textIfCorrect={t("unit3_lesson3_question1_answer")}
          textIfWrong={t("unit3_lesson3_question1_wrong_answer")}
        />
      </Box>
    </Stack>
  );
};

export default Unit3Lesson3;
