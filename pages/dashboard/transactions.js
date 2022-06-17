import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Table,
  TableContainer,
  Tr,
  Td,
  Th,
  Tbody,
  Thead,
  Tfoot,
} from "@chakra-ui/react";
import { IoIosClock } from "react-icons/io";

// import WithAuth from "../../HOCs/WithAuth";
import helpers from "../../helpers";
import Wrapper from "../../components/dashboard/Wrapper";
import CryptoChartTape from "../../components/common/CryptoChartTape";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTx() {
      await helpers
        .getTransactions()
        .then((data) => setTransactions(data?.data?.data));
    }

    getTx();
  }, []);

  return (
    <div>
      <Wrapper>
        <Heading fontSize="2xl" mb={5} fontWeight="normal">
          <Text>Transactions</Text>
        </Heading>

        <Box h={"fit-content"}>
          <TableContainer>
            <Table variant="striped">
              <Thead bgColor="yellow.400">
                <Tr>
                  <Th
                    textTransform="capitalize"
                    color="black"
                    fontFamily="inherit"
                    fontSize="1rem"
                    fontWeight="normal"
                  >
                    Amount
                  </Th>
                  <Th
                    textTransform="capitalize"
                    color="black"
                    fontFamily="inherit"
                    fontSize="1rem"
                    fontWeight="normal"
                  >
                    Status
                  </Th>
                  <Th
                    textTransform="capitalize"
                    color="black"
                    fontFamily="inherit"
                    fontSize="1rem"
                    fontWeight="normal"
                  >
                    {" "}
                    Payment Method
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions?.map((tx) => {
                  return (
                    <Tr key={Math.random()}>
                      <Td>${tx?.amount}</Td>
                      <Td>success</Td>
                      <Td>{tx?.method}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Wrapper>

      <CryptoChartTape />
    </div>
  );
}

export default Transactions;
