import React, { useState } from "react";
import {
	Box,
	Input,
	InputLeftAddon,
	InputGroup,
	Stack,
	Textarea,
	Button,
	ButtonGroup,
	List,
	ListItem,
	ListIcon,
	Checkbox,
	Flex,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

const Note = ({ flex = 3 }) => {
	const [subject, setSubject] = useState("");
	const [note, setNote] = useState("");
	const [noteList, setNoteList] = useState([]);

	const clearFormHandler = () => {
		setNote("");
		setSubject("");
	};

	const saveHandler = (e) => {
		e.preventDefault();
		setNoteList((noteList) => [...noteList, subject]);
	};

	return (
		<Box
			overflow="hidden"
			borderLeft="2px"
			borderLeftColor="gray.200"
			flex={flex}
			minH="100vh"
			mr={3}
		>
			<form onSubmit={saveHandler} onReset={clearFormHandler}>
				<Stack spacing={4}>
					<InputGroup m={2} size="md" border="2px" borderColor="gray.300">
						<InputLeftAddon children="Subject" />
						<Input type="text" onChange={(e) => setSubject(e.target.value)} />
					</InputGroup>

					<Box>
						<Textarea
							placeholder="Note goes here"
							border="2px"
							borderColor="gray.300"
							ml={2}
							_placeholder={{ color: "gray.500" }}
							size="lg"
							minH={200}
							_hover={{ borderColor: "gray.400" }}
							onChange={(e) => setNote(e.target.value)}
						/>
					</Box>

					<ButtonGroup variant="outline" spacing="4">
						<Button type="submit" ml={2} colorScheme="green">
							Save
						</Button>
						<Button type="reset" colorScheme="red">
							Cancel
						</Button>
					</ButtonGroup>
				</Stack>
			</form>

			<Flex>
				<Box
					flex="1"
					minH="40vh"
					border="2px"
					borderColor="gray.200"
					mt={10}
					ml={2}
					mb={2}
					mr={10}
					position="relative"
					overflowY="auto"
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							width: "6px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "gray",
							borderRadius: "24px",
						},
					}}
				>
					<List position="absolute" top="2%" left="4%">
						{noteList.map((note) => {
							return (
								<ListItem>
									<ListIcon
										boxSize="1.2rem"
										as={ChevronRightIcon}
										color="green.500"
									/>
									{note}
								</ListItem>
							);
						})}
					</List>
				</Box>

				<Box
					flex="1"
					minH="40vh"
					border="2px"
					borderColor="gray.200"
					mt={10}
					ml={2}
					mb={2}
					mr={10}
					position="relative"
					overflowY="auto"
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							width: "6px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "gray",
							borderRadius: "24px",
						},
					}}
				>
					<Stack
						position="absolute"
						top="2%"
						left="4%"
						spacing={5}
						direction="column"
					>
						<Checkbox colorScheme="red" defaultIsChecked>
							Checkbox
						</Checkbox>
						<Checkbox colorScheme="green" defaultIsChecked>
							Checkbox
						</Checkbox>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default Note;
