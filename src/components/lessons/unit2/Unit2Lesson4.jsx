import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import images from "../../../assets";
import Exercise from "../../Exercise";

const Unit2Lesson4 = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="h4" fontWeight="bold">
          {t("unit2_lesson4_title")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography
          variant="paragraph"
          fontSize="0.8rem"
          fontStyle={{ color: "gray" }}
        >
          {t("unit2_lesson4_info")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson4_paragraph1")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson4_paragraph2")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson4_paragraph3")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson4_paragraph4")}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Exercise
          question={t("unit2_lesson4_question1")}
          answers={[
            t("unit2_lesson4_question1_option1"),
            t("unit2_lesson4_question1_option2"),
          ]}
          correctIndex={0}
          textIfCorrect={t("unit2_lesson4_question1_answer")}
          textIfWrong={t("unit2_lesson4_question1_wrong_answer")}
        />
      </Box>

      <Box sx={{ marginBottom: "15px" }}>
        <Typography variant="paragraph" fontSize="1rem">
          {t("unit2_lesson4_paragraph5")}
        </Typography>
      </Box>
      <Box sx={{ margin: "10px 0px 10px 0px" }}>
        <img style={{ width: "100%" }} src={images.unit2Lesson4Photo1} />
      </Box>
    </Stack>
  );
};

export default Unit2Lesson4;
