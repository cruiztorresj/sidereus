class Utils {

	static convertPageCoordToHeroCoord(pageCoord, coord, clientWidth, clientHeight) {

		if (coord === 'x') {

			return (pageCoord * clientWidth / clientWidth);
		} else {

			return (pageCoord * (-Constants.CANVAS_BOTTOM_LIMIT) / clientHeight) + Constants.CANVAS_BOTTOM_LIMIT;
		}
	}

	// Random number in the range [0, upperLimit)
	static getRandom(upperLimit) {

        return Math.floor(Math.random() * upperLimit);
	}
}