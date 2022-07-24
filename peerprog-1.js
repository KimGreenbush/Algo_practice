function almostEqual(arr1, arr2) {
	const length = arr1.length < arr2.length ? arr1.length : arr2.length
	let returnThis = []

	// loop over both arrays to start string comparison
	for (let i = 0; i < length; i++) {
		// strings must be same length
		if (arr1[i].length !== arr2[i].length) {
			returnThis.push("false")
			continue
		}

		let dict1 = {}
		let dict2 = {}

		// creating dictionaries
		for (let j = 0; j < arr1[i].length; j++) {
			//add arr1 letters to dict1 with count
			// if dict1 has key, increment value
			// else, add kvp
			if (dict1.hasOwnProperty(arr1[i][j])) {
				dict1[arr1[i][j]] += 1
			} else {
				dict1[arr1[i][j]] = 1
			}

			//add arr2 letters to dict2 with count
			if (dict2.hasOwnProperty(arr2[i][j])) {
				dict2[arr2[i][j]] += 1
			} else {
				dict2[arr2[i][j]] = 1
			}
		}

		// Object.keys() => return an array of keys
		// if keys length is different then there are extra letters in one
		let dict1Keys = Object.keys(dict1).sort()
		let dict2Keys = Object.keys(dict2).sort()
		if (dict1Keys.length !== dict2Keys.length) {
			returnThis.push("false")
		} else {
			// compare key counts between dicts
            for (let k = 0; k < dict1Keys.length; k++) {
                // do they contain all the same keys(letters)?
				if (!dict1Keys.includes(dict2Keys[k]) || !dict2Keys.includes(dict1Keys[k])) {
					returnThis.push("false")
					break
				} else {
					// get the diff between letter counts
					let dictLetter1 = dict1[dict1Keys[k]]
					let dictLetter2 = dict2[dict2Keys[k]]

					// get the difference between the letter counts
					let difference = 0
					if (dictLetter1 < dictLetter2) {
						difference = dictLetter2 - dictLetter1
					} else {
						difference = dictLetter1 - dictLetter2
                    }
					// BUG HERE!
					// from here to ---
					if (difference > 3) {
                        returnThis.push("false")
                        break
					} else if ((k == dict1Keys.length - 1)) {
						returnThis.push("true")
						// HERE
					}
				}
			}
		}
	}
	return returnThis
}

// return ["true"]
const a1 = ["abbbb", "abbbb", "a", "a", "cc", "bbba"]
const a2 = ["aaaab", "aaaac", "aa", "a", "ab", "abbb"]

// return ["false"]
// const a3 = ["abbbb"]
// const a4 = ["aaaac"]

// return ["false"]
// const a5 = ["a"]
// const a6 = ["aa"]

// return ["false"]
// const a7 = ["ab"]
// const a8 = ["aa"]

console.log(almostEqual(a1, a2))
// console.log(almostEqual(a3, a4))
// console.log(almostEqual(a5, a6))
// console.log(almostEqual(a7, a8))
