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
  MarketData,
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
          <Statistics />

          <Container maxW="7xl" mx={"auto"} p={0} my={6}>
            <MarketData height={400} width="100%" />
          </Container>
        </div>
      </Wrapper>

      <CryptoChartTape />
    </>
  );
}

export default Dashboard;
