import React from "react";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import {
  Stack,
  Heading,
  Container,
  Box,
  Text,
  VStack,
  HStack,
  ListIcon,
  ListItem,
  List,
  SimpleGrid,
  Button,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TickerTape } from "react-ts-tradingview-widgets";
import CryptoChartTape from "../components/common/CryptoChartTape";

function Faq() {
  return (
    <Box bg="white">
      <Head>
        <title>FAQs - Legit Crypto Option</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        // bg="blue.400"
        backgroundImage={
          "url(https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <VStack
          w={"full"}
          h="full"
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Center w="inherit" h="inherit">
            <Box maxW="3xl" textAlign="left" px={{ base: 12, md: 0 }}>
              <Heading
                // fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
                color="white"
              >
                <Text>FAQs</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>
      <Container maxW={"6xl"} mb={20}>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          <Accordion color="blue.800">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    How can I purchase package?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Buying package is very simple. Just sign up and login in it will
                open your dashboard where you will find option of PRODUCT
                PACKAGE. Click on this option and you’ll find all packages. You
                can click on buy button there, make payment and you’re good to
                go.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    How much I can earn maximum here?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can earn total 300% of your investment. After completion of
                300%, your package will get expired. To continue to earn, you
                need to invest again..
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    How do I withdraw my earnings?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Request a withdrawal from your dashboard after login; make sure
                you have a valid Bitcoin Address.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    How does the platform generates profit?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Legit Crypto Options generates profit by trading in Top 10
                crypto currencies. It’s AI trading bot generates profit via
                arbitrage trading.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    Status of my withdrawal?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can check the status of you withdrawal in your back office
                by going to relevant Wallet section. It will be showing Pending,
                Approved (along with transaction hash) or Rejected.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" color="blue.800">
                    Who are the owners?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We are a group of successful businessman from UK and the USA
                from network marketing and traditional finance backgrounds who
                own Empire Trades Fx Together. No one person owns this company.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </SimpleGrid>
      </Container>

      <CryptoChartTape />
      <Footer />
    </Box>
  );
}

export default Faq;