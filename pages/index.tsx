import { Box, chakra } from "@chakra-ui/react";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Box px={10}>
      <chakra.span>
        Hello, world!
      </chakra.span>
    </Box>
  );
};

export default Home;