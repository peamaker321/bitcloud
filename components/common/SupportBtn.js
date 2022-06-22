import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";

function SupportBtn() {
  return (
    <Link
      pos="fixed"
      bottom={{ base: "6rem", md: "20" }}
      right={{ base: "22", md: "20" }}
      bg="yellow.400"
      color="black"
      rounded={"full"}
      width="fit-content"
      display="flex"
      alignItems="center"
      gap="10px"
      padding="12px 25px"
      shadow="md"
      _hover={{ cursor: "pointer" }}
      href="mailto:support@bitcloud.network"
    >
      <BsQuestionCircle />
      <Text>support</Text>
    </Link>
  );
}

export default SupportBtn;
