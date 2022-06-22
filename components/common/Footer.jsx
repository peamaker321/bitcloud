import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("black", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={Logo} alt="" />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Bitcloud Templates. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/affilate"}>Affilate</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"/rules"}>Terms & Conditions</Link>
            <Link href={"/privacy"}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
