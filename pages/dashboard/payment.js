import {
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Stack,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import CryptoChartTape from "../../components/common/CryptoChartTape";
import Wrapper from "../../components/dashboard/Wrapper";
import { useRouter } from "next/router";

function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Router = useRouter();

  const formik = useFormik({
    initialValues: {
      amount: "",
    },

    onSubmit: (values) => {
      Router.push(
        {
          pathname: "/dashboard/deposit",
          query: {
            amount: values.amount,
          },
        },
        "/dashboard/deposit"
      );
    },
  });

  return (
    <>
      <Wrapper>
        <Heading fontSize="2xl" fontWeight="normal">
          <Text>Fund Account</Text>
        </Heading>

        <Button
          fontWeight="normal"
          mt={5}
          colorScheme="yellow"
          fontSize="1rem"
          rounded={0}
          onClick={onOpen}
        >
          + New Transaction
        </Button>
      </Wrapper>
      <CryptoChartTape />

      {/* Modal */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent rounded={0}>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader fontWeight="normal">Make new deposit</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl id="amount">
                  <Input
                    type="text"
                    p={"6"}
                    id="amount"
                    name="amount"
                    rounded={0}
                    placeholder="Enter amount here"
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                  />
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={onClose}
                colorScheme="yellow"
                rounded={0}
                mr={2}
                fontWeight="normal"
                type="submit"
              >
                Continue
              </Button>
              <Button
                onClick={onClose}
                colorScheme="red"
                fontWeight="normal"
                variant="ghost"
              >
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Payment;
