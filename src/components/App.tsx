import { Heading, VStack } from "@chakra-ui/react";
import type { FC } from "react";

const App: FC = () => {
	return (
		<VStack w="100wh" h="100vh" justify="center">
			<Heading as="h1" size="4xl" color="teal.300">
				Hello, world!
			</Heading>
		</VStack>
	);
};

export default App;
