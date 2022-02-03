import React from "react";
import { Box } from "@chakra-ui/react";

const Note = ({ flex = 3 }) => {
	return (
		<Box borderLeft="2px" borderLeftColor="gray.200" flex={flex} minH="100vh">
			Note
		</Box>
	);
};

export default Note;
