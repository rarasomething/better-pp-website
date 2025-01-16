import { Box, Button, Container, Stack, styled } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import images from "../assets";
import { useTranslation } from "react-i18next";
import useContentsStore from "../stores/contentsStore";
import { useUserDataStore } from "../stores/userDataStore";
import {
  setCurrentLessonData,
  setCurrentUnitData,
  addBadgeCount,
} from "../apis/firebase";
import Unit1Lesson1 from "../components/lessons/unit1/Unit1Lesson1";
import Unit1Lesson2 from "../components/lessons/unit1/Unit1Lesson2";
import Unit1Lesson3 from "../components/lessons/unit1/Unit1Lesson3";
import Unit1Lesson4 from "../components/lessons/unit1/Unit1Lesson4";
import Unit2Lesson1 from "../components/lessons/unit2/Unit2Lesson1";
import Unit2Lesson2 from "../components/lessons/unit2/Unit2Lesson2";
import Unit2Lesson3 from "../components/lessons/unit2/Unit2Lesson3";
import Unit2Lesson4 from "../components/lessons/unit2/Unit2Lesson4";
import Unit2Lesson5 from "../components/lessons/unit2/Unit2Lesson5";
import Unit2Lesson6 from "../components/lessons/unit2/Unit2Lesson6";
import Unit3Lesson1 from "../components/lessons/unit3/Unit3Lesson1";
import Unit3Lesson2 from "../components/lessons/unit3/Unit3Lesson2";
import Unit3Lesson3 from "../components/lessons/unit3/Unit3Lesson3";
import Unit3Lesson4 from "../components/lessons/unit3/Unit3Lesson4";

const CustomButton = styled(Button)({
  backgroundColor: "#f2c94c",
  width: "150px",
  height: "60px",
  color: "#4a3800",
  borderRadius: "20px",
  padding: "10px 20px",
  fontSize: "20px",
  fontWeight: "bold",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#e2b944", // 호버 시 배경색
  },
});

const LessonPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const contents = useContentsStore((state) => state.contents);
  const userData = useUserDataStore((state) => state.userData);
  const setUserData = useUserDataStore((state) => state.setUserData);
  const { unitName, lessonName } = useParams();

  const getLesson = () => {
    if (unitName === "unit1" && lessonName === "lesson1") {
      return Unit1Lesson1();
    } else if (unitName === "unit1" && lessonName === "lesson2") {
      return Unit1Lesson2();
    } else if (unitName === "unit1" && lessonName === "lesson3") {
      return Unit1Lesson3();
    } else if (unitName === "unit1" && lessonName === "lesson4") {
      return Unit1Lesson4();
    } else if (unitName === "unit2" && lessonName === "lesson1") {
      return Unit2Lesson1();
    } else if (unitName === "unit2" && lessonName === "lesson2") {
      return Unit2Lesson2();
    } else if (unitName === "unit2" && lessonName === "lesson3") {
      return Unit2Lesson3();
    } else if (unitName === "unit2" && lessonName === "lesson4") {
      return Unit2Lesson4();
    } else if (unitName === "unit2" && lessonName === "lesson5") {
      return Unit2Lesson5();
    } else if (unitName === "unit2" && lessonName === "lesson6") {
      return Unit2Lesson6();
    } else if (unitName === "unit3" && lessonName === "lesson1") {
      return Unit3Lesson1();
    } else if (unitName === "unit3" && lessonName === "lesson2") {
      return Unit3Lesson2();
    } else if (unitName === "unit3" && lessonName === "lesson3") {
      return Unit3Lesson3();
    } else if (unitName === "unit3" && lessonName === "lesson4") {
      return Unit3Lesson4();
    }
  };

  const onDidItButtonClick = async () => {
    const currentUnit = userData.currentUnit;
    const currentLesson = userData.currentLesson;
    const allUnits = Object.keys(contents);
    console.log(currentLesson);
    const lessonList = contents[currentUnit].lessonList;
    const currentLessonIndex = lessonList.findIndex((e) => e === currentLesson);
    if (lessonList.length - 1 < currentLessonIndex + 1) {
      const currentUnitIndex = allUnits.findIndex(
        (e) => e === userData.currentUnit
      );
      if (allUnits.length - 1 >= currentUnitIndex + 1) {
        const nextUnit = allUnits[currentUnitIndex + 1];
        await setCurrentUnitData(nextUnit);
        await setCurrentLessonData(contents[nextUnit].lessonList[0]);
        await addBadgeCount();
        await setUserData({ ...userData, badgeCount: userData.badgeCount + 1 });
      }
      navigate("/");
    } else {
      await setCurrentLessonData(lessonList[currentLessonIndex + 1]);
      await addBadgeCount();
      await setUserData({ ...userData, badgeCount: userData.badgeCount + 1 });
      navigate("/");
    }
  };
  return (
    <Box sx={{ backgroundColor: "#F9F9FB" }}>
      <Stack flexDirection="row">
        <Box
          sx={{
            position: "relative",
            marginLeft: "30px",
            marginTop: "20px",
            paddingLeft: "5px",
          }}
        >
          <Box sx={{ position: "absolute", top: 8, left: -10 }}>
            <img
              style={{ width: "20px", height: "20px" }}
              src={images.arrowLeft}
            />
          </Box>
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{ color: "black" }}
          >
            뒤로가기
          </Button>
        </Box>
      </Stack>
      <Container sx={{ marginTop: "20px" }} maxWidth="md">
        {getLesson()}
        <Stack alignItems="center" marginTop="20px">
          <CustomButton onClick={onDidItButtonClick}>
            {t("you-did-it")}{" "}
          </CustomButton>
        </Stack>
        <Box sx={{ height: "30px" }}></Box>
      </Container>
    </Box>
  );
};

export default LessonPage;
