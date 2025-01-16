import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit4Lesson4 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit4_lesson4_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit4_lesson4_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit4_lesson4_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "600px" }} src={images.unit4Lesson4Photo1} />
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit4_lesson4_question1")}
          answers={[
            t("unit4_lesson4_question1_option1"),
            t("unit4_lesson4_question1_option2"),
          ]}
          correctIndex={0}
          textIfCorrect={t("unit4_lesson4_question1_answer")}
          textIfWrong={t("unit4_lesson4_question1_wrong_answer")}
        />
      </Box>
    </Stack>
  );
};

export default Unit4Lesson4;
