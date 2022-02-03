import React from "react";
import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
	Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { updateRoute } from "../utils/helpers";

const SideNav = ({ flex = 1, routes = [], allRoutes = [], setRoutes }) => {
	return (
		<Box minH="100vh" flex={flex}>
			<Accordion
				ml={3}
				mr={3}
				borderBottom="1px"
				borderBottomColor="gray.200"
				defaultIndex={[0]}
				allowMultiple
			>
				{routes.map(({ name, routes: nestedRoutes }) => {
					const onClick = () => {
						const updatedRoutes = updateRoute({
							routes: [...allRoutes],
							name,
							newRouteName: "new Route",
							newRoute: "/new_route",
						});
						if (typeof setRoutes === "function") {
							setRoutes([...updatedRoutes]);
						}
					};
					if (nestedRoutes && Array.isArray(nestedRoutes))
						return (
							<AccordionItem
								key={name + nestedRoutes.toString()}
								borderTop="0"
								paddingRight="0"
							>
								<Flex alignItems="center">
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Text
												fontWeight="medium"
												cursor="pointer"
												_hover={{
													fontWeight: "bold",
												}}
											>
												{name}
											</Text>
										</Box>
										<AccordionIcon />
									</AccordionButton>
									<AddIcon cursor="pointer" onClick={onClick} />
								</Flex>
								<AccordionPanel>
									<SideNav
										key={name}
										routes={nestedRoutes}
										allRoutes={allRoutes}
									/>
								</AccordionPanel>
							</AccordionItem>
						);
					return (
						<Flex key={name} justifyContent="space-between">
							<Text
								cursor="pointer"
								_hover={{
									fontWeight: "medium",
								}}
							>
								{name}
							</Text>
							<AddIcon cursor="pointer" onClick={onClick} />
						</Flex>
					);
				})}
			</Accordion>
		</Box>
	);
};

export default SideNav;
