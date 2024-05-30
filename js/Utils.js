class Utils {

	static convertPageCoordToHeroCoord(pageCoord) {

		return (pageCoord * (CANVAS_RIGHT_LIMIT - CANVAS_LEFT_LIMIT) / 1000) + CANVAS_LEFT_LIMIT;
	}
}