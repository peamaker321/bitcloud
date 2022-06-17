import { Box, SimpleGrid, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Container } from "@chakra-ui/react";

import CryptoChartTape from "../components/common/CryptoChartTape";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { secure, options, research } from "../assets/images/list";

import Footer from "../components/common/Footer";
import Hero from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import { InvestmentPlanCard } from "./dashboard/invest";

function index() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Container maxW={{ md: "90%", base: "100%" }} overflow="hidden">
        <MarketOverview
          colorTheme="light"
          width="100%"
          height={800}
        ></MarketOverview>
      </Container>

      <Box p={4} mt={"36"} bg="gray.50">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"} mt={10}>
          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            fontWeight="bold"
            mb={3}
          >
            <Text>
              Invest in Cryptocurrency Bitcoin Mining & Easy Way to Mine Bitcoin
            </Text>
          </Heading>
          <Text mt={10}>
            Thousands of people from around the world are investing in online
            cloud mining. Some of them mine once a week, others every day, but
            they are all a part of the online Mining community.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box p={12} borderRadius={"10px"}>
              <Image src={secure} alt="" />
              <Text fontWeight={600} my={"4"}>
                Secure Storage
              </Text>
              <Text mt={2}>
                We store the vast majority of the digital assets in secure
                offline storage.
              </Text>
            </Box>

            <Box p={12} borderRadius={"10px"}>
              <Image src={research} alt="" />
              <Text fontWeight={600} my={"4"}>
                Research & Development
              </Text>
              <Text mt={2}>
                We want to transform the technology to innovation products.
              </Text>
            </Box>

            <Box p={12} borderRadius="10px">
              <Image src={options} alt="" />
              <Text fontWeight={600} my={"4"}>
                Various Options
              </Text>
              <Text mt={2}>
                A wide range of models for both experienced and beginner miners.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box mb={36} h={{ md: "2xs", base: "xl" }} id="stats">
        <Flex alignItems="center" justifyContent="center" h="inherit">
          <Container maxW={{ md: "80%", base: "90%" }}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={10}
              color="white"
            >
              <Box textAlign="center">
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  6000
                </Text>
                <Text textAlign="center">Profitable trades</Text>
              </Box>

              <Box>
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  $ 20M
                </Text>
                <Text textAlign="center">Quarterly volume traded</Text>
              </Box>

              <Box>
                <Text
                  fontWeight={600}
                  my={"2"}
                  fontSize={{ base: "4xl" }}
                  lineHeight={"110%"}
                  textAlign="center"
                >
                  13,000 +
                </Text>
                <Text textAlign="center">Verified users</Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Flex>
      </Box>

      <Container maxW={"6xl"} mb={20}>
        <Heading
          lineHeight={"110%"}
          fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
          <Text>Investment Plans</Text>
        </Heading>
        <Text fontSize="1rem" textAlign="center">
          Choose a plan that suites you
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
          mt={30}
        >
          <InvestmentPlanCard
            title={"Basic Plan"}
            priceRange={"$1,000 - $5.000"}
            minimumAmount={"1,000"}
            dailyProfit={"5.00"}
            duration={"2 Weeks"}
            minimumReturn={"2,010"}
          />
          <InvestmentPlanCard
            title={"Silver Plan"}
            priceRange={"$5,000 - $10,000"}
            minimumAmount={"5,000"}
            dailyProfit={"7.00"}
            duration={"1 Month"}
            minimumReturn={"5,560"}
          />
          <InvestmentPlanCard
            title={"Gold Plan"}
            priceRange={"$10,000 - $15,000"}
            minimumAmount={"10,000"}
            dailyProfit={"9.00"}
            duration={"3 Months"}
            minimumReturn={"9,200"}
          />
        </SimpleGrid>
      </Container>

      <CryptoChartTape />
      <Footer />
    </div>
  );
}

export default index;
