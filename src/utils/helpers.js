export const updateRoute = (
	{ name, routes, newRouteName, newRoute } = {
		name: "",
		routes: [],
		newRouteName: "",
		newRoute: "",
	}
) => {
	const routeIdx = routes.findIndex(
		({ name: routeName }) => routeName === name
	);
	if (routeIdx !== -1) {
		const newObj = { name: newRouteName, route: newRoute };
		const currentObj = routes[routeIdx];
		if (currentObj.routes && Array.isArray(currentObj.routes)) {
			currentObj.routes = [...currentObj.routes, newObj];
		} else {
			currentObj.routes = [newObj];
		}
		routes[routeIdx] = currentObj;
	} else {
		const routeArrIndex = routes.findIndex(
			({ routes: routesArray }) => routes && Array.isArray(routesArray)
		);
		const { routes: newRoutes } = routes[routeArrIndex];
		updateRoute({
			name,
			routes: newRoutes,
			newRouteName,
			newRoute,
		});
	}
	return routes;
};
