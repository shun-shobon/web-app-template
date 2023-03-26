import { VStack, Heading } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    // @ts-expect-error: https://github.com/chakra-ui/chakra-ui/issues/7459
    <VStack w="100wh" h="100vh" justify="center">
      <Heading as="h1" size="4xl" color="teal.300">
        Hello, world!
      </Heading>
    </VStack>
  );
}

export default App;
