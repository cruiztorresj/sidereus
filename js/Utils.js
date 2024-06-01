class Utils {

	static convertPageCoordToHeroCoord(pageCoord) {

		return (pageCoord * (CANVAS_RIGHT_LIMIT - CANVAS_LEFT_LIMIT) / CLIENT_WIDTH) + 
			CANVAS_LEFT_LIMIT;
	}
}