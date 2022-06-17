import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../components/dashboard/Wrapper";
import { Heading, Text, Container, SimpleGrid } from "@chakra-ui/react";
import Statistics from "../../components/dashboard/Statistics";
import CryptoChartTape from "../../components/common/CryptoChartTape";

import {
  AdvancedRealTimeChart,
  EconomicCalendar,
  ForexCrossRates,
  Ticker,
} from "react-ts-tradingview-widgets";
import helpers from "../../helpers";

function Dashboard() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const res = await helpers.getUserDetailsFromLocalStorage();
    setUser(res);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Wrapper>
        <div>
          <Heading my={10}>
            <Text
              fontSize="2xl"
              fontWeight="normal"
              textTransform="uppercase"
              letterSpacing="3px"
              color="yellow.500"
            >
              Welcome {user?.firstName}
            </Text>
          
          </Heading>

          <Statistics />

          <Container maxW="7xl" mx={"auto"} p={0} my={6}>
            <ForexCrossRates height={400} width="100%" />
          </Container>
        </div>
      </Wrapper>

      <CryptoChartTape />
    </>
  );
}

export default Dashboard;
