class Utils {

	static convertPageCoordToHeroCoord(pageCoord, coord) {

		if (coord === 'x') {

			return (pageCoord * (CANVAS_RIGHT_LIMIT - CANVAS_LEFT_LIMIT) / CLIENT_WIDTH) + 
				CANVAS_LEFT_LIMIT;
		} else {

			// Why CANVAS_LEFT_LIMIT? Well, it's about 1 pixel from our radius two
			return (pageCoord * (CANVAS_TOP_LIMIT - CANVAS_BOTTOM_LIMIT) / CLIENT_HEIGHT) + 
				CANVAS_LEFT_LIMIT;
		}
	}
}