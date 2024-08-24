class Utils {

	static convertPageCoordToHeroCoord(pageCoord, coord) {

		if (coord === 'x') {

			return (pageCoord * (Constants.CANVAS_RIGHT_LIMIT - Constants.CANVAS_LEFT_LIMIT) / Constants.CLIENT_WIDTH) + 
				Constants.CANVAS_LEFT_LIMIT;
		} else {

			return (pageCoord * (Constants.CANVAS_TOP_LIMIT - Constants.CANVAS_BOTTOM_LIMIT) / Constants.CLIENT_HEIGHT) + 
				Constants.CANVAS_BOTTOM_LIMIT;
		}
	}
}