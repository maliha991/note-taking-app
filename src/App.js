import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import Note from "./pages/Note";
import SideNav from "./components/SideNav";

function App() {
	const [activeCategory, setActiveCategory] = useState("");
	const [routes, setRoutes] = useState([
		{ name: "route 1", route: "/route1" },
		{
			name: "route 2",
			route: "/route2",
		},
		{ name: "route 3", route: "/route3" },
		{
			name: "route 4",
			routes: [
				{
					name: "route 4-1",
					route: "/route1",
				},
				// { name: 'route 4-2', route: '/route2' },
				// { name: 'route 4-3', route: '/route3' },
				// {
				//   name: 'route 4-4',
				//   routes: [
				//     { name: 'route 4-4-1', route: '/route1' },
				//     { name: 'route 4-4-2', route: '/route2' },
				//     { name: 'route 4-4-3', route: '/route3' },
				//     { name: 'route 4-4-4', route: '/route4' },
				//   ],
				// },
			],
		},
	]);

	return (
		<Flex bg="white" color="black">
			<SideNav
				flex="1"
				routes={routes}
				allRoutes={routes}
				setRoutes={setRoutes}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>
			<Note flex="3" />
		</Flex>
	);
}

export default App;
