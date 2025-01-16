import { Box, Container, Stack, Typography } from "@mui/material";
import images from "../assets";
import { useTranslation } from "react-i18next";

const IntroPage = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Box sx={{ position: "relative" }}>
        <img
          style={{ position: "absolute", width: "250px", top: -33 }}
          src={images.rail1}
        />
        <img
          style={{ position: "absolute", width: "440px", top: -40, right: -15 }}
          src={images.rail2}
        />
        <img
          style={{
            position: "absolute",
            width: "850px",
            height: "250px",
            top: "380px",
          }}
          src={images.rail3}
        />
        <img
          style={{
            position: "absolute",
            width: "40px",
            right: 0,
            top: "630px",
            zIndex: -100,
          }}
          src={images.rail4}
        />
        <img
          style={{
            position: "absolute",
            width: "40px",
            left: 0,
            top: "1050px",
            zIndex: -100,
          }}
          src={images.rail5}
        />
      </Box>
      <Stack alignItems="center">
        <Box sx={{ marginTop: "100px" }}>
          <Typography fontSize="100px" fontWeight="bold" color="#33374D">
            nextstop
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography fontSize="40px" fontWeight="bold" color="#33374D">
            {t("main-subtitle")}
          </Typography>
          <img
            style={{ position: "absolute", top: 0, right: 0 }}
            width="300px"
            src={images.mainTextCircle}
          />
        </Box>
        <Stack alignItems="center" sx={{ marginTop: "50px" }}>
          <Typography fontSize="20px" fontWeight="bold" color="#33374D">
            {t("learn-more")}
          </Typography>
          <img width="130px" src={images.learnMoreButton} />
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          gap="60px"
          alignItems="center"
          marginTop="200px"
          width="100%"
        >
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src={images.photoBackground1}
                style={{ width: "300px", borderRadius: "30px" }}
              />
            </Box>
          </Box>
          <Stack maxWidth="330px">
            <Typography
              variant="h4"
              fontSize="40px"
              fontWeight="bold"
              whiteSpace="nowrap"
              color="#33374D"
            >
              {t("stress-free-learning")}
            </Typography>
            <Typography marginTop="20px">
              {t("stress-free-learning-contents")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection="row-reverse"
          justifyContent="space-around"
          alignItems="center"
          marginTop="80px"
          width="100%"
        >
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src={images.photoBackground2}
                style={{ width: "300px", borderRadius: "30px" }}
              />
            </Box>
          </Box>
          <Stack maxWidth="330px">
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize="40px"
              color="#33374D"
              whiteSpace="nowrap"
            >
              {t("12-concepts-to-learn")}
            </Typography>
            <Typography marginTop="20px">
              {t("12-concepts-to-learn-contents")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          gap="60px"
          alignItems="center"
          marginTop="80px"
          width="100%"
        >
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src={images.photoBackground3}
                style={{ width: "300px", borderRadius: "30px" }}
              />
            </Box>
          </Box>
          <Stack maxWidth="330px">
            <Typography
              whiteSpace="nowrap"
              fontSize="40px"
              variant="h4"
              fontWeight="bold"
              color="#33374D"
            >
              {t("no-payment-needed")}
            </Typography>
            <Typography marginTop="20px">
              {t("no-payment-needed-contents")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box sx={{ height: "160px", position: "relative", zIndex: -200 }}>
        <img
          style={{
            position: "absolute",
            top: -100,
            width: "800px",
          }}
          src={images.rail6}
        />
      </Box>
    </Container>
  );
};

export default IntroPage;
