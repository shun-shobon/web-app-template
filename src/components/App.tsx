import { Button, Flex, Title } from "@mantine/core";
import type { FC } from "react";

const App: FC = () => {
	return (
		<Flex
			w="100wh"
			h="100vh"
			justify="center"
			align="center"
			direction="column"
			gap="md"
		>
			<Title>Hello, world!</Title>
			<Button>Click me</Button>
		</Flex>
	);
};

export default App;
