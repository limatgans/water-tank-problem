const waterCapacity = (bricksArray = []) => {
	
	// Validation
	if (!bricksArray || bricksArray.length === 0) {
		throw new Error("Input is not an array or an empty array")
	}

	// Assuming that all elements are non zero integers (from problem statement)
	// we are avoiding those validations here

	const capacity = bricksArray.reduce((acc, cur, ind, self) => {
		if( ind >= 1 && ind < self.length - 1) {
			
			// Idea is to calcualte how much water the current index can hold
			// based on maximum height on left and right

			// min(lmax, rmax) - cur 

			// Notes to self: This algo is very complex... Need to simplify

			const leftArr = self.slice(0, ind);
			const lmax = Math.max(...leftArr);

			const rightArr = self.slice(ind+1, self.length-1);
			let rmax;
			if (rightArr.length !== 0 ) {
				rmax = Math.max(...rightArr);
			} else {
				rmax = 0;
			}
			
			const capacityIndex = Math.min(rmax, lmax) - cur;
			console.log( { lmax, rmax, cur, capacityIndex, acc} )
			
			if (capacityIndex > 0) {
				acc += capacityIndex;
			}
		}
		return acc;
	}, 0);

	return capacity;
}

// export { waterCapacity };
module.exports = { waterCapacity };