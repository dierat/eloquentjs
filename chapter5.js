/*

Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

*/

var arrays = [[1, 2, 3], [4, 5], [6]];

// cocat each array with the next as if you were adding them together
arrays.reduce(function(a,b) {return a.concat(b)});

// → [1, 2, 3, 4, 5, 6]




/*

Mother-child age difference

Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function average_mom_child_dif(obj) {
	// first you need to find the ages of mothers when their children were born
	// start with defining an array to hold the ages, then loop through all the people in ancestry and find out if that person's mother is present in the byName object. if she is, compute the mother's age at the time of the person's birth by subtracting the year of the person's birth from the year of her birth and add that to an array
	// then run the mother/child age dif array through average and return the result
	var ages = [];
	for (var i=0; i<obj.length; i++) {
		if (obj[i].mother in byName) {
			ages.push(obj[i].born - byName[obj[i].mother].born);
		}
	}
	return average(ages);
}

function average_mom_child_dif_2(obj) {
	// first you need to find the ages of mothers when their children were born
	// start with defining an array to hold the ages, then loop through all the people in ancestry and find out if that person's mother is present in the byName object. if she is, compute the mother's age at the time of the person's birth by subtracting the year of the person's birth from the year of her birth and add that to an array
	// then run the mother/child age dif array through average and return the result
	var hasMoms = obj.filter(function(person) {return person.mother in byName;});
    var ages = hasMoms.map(function(person){return person.born - byName[person.mother].born});
	return average(ages);
}

console.log(average_mom_child_dif(ancestry));

// → 31.2



/*

Historical life expectancy

When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function historical_life_expenctancy(array) {
	// loop through the ancestry array and decide which century each person belongs to using the formula given passed to the groupBy function
	// then run each century's array through the average function and return it
	var centuries = groupBy2(array, function(person) {return Math.ceil(person.died / 100).toString();})
	for (century in centuries) {
      	console.log(century + ":", average(centuries[century].map(function(person) {
			return person.died - person.born;
        })));
	}
}

function groupBy(array, func) {
	// computes the group for an element in the array and returns an object that maps group names to arrays of group members
	// define an object to hold century groups, then loop through ancestry and determine the century for each person. if that century is not currently a key in the centuries objects, add it
	// otherwise just add the person's age as a value to the array associated with that century
	// then return the centuries object with all the ages neatly grouped by century
	// keep in mind that the age property and century formula will be given via the func argument
	var groups = {};
	for (var i=0; i<array.length; i++) {
		var group = func(array[i]);
		if (!(group in groups)) {
			groups[group] = [array[i]];
		} else {
			groups[group].push(array[i]);
		}
	}
	return groups;
}

function groupBy2(array, func) {
	// replace looping mechanism with a call to map
	var groups = {};
	array.map(function(person) {
		var group = func(person);
		if (!(group in groups)) {
			groups[group] = [person];
		} else {
			groups[group].push(person);
		}
	});
	return groups;
}

historical_life_expenctancy(ancestry);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94



/*

Every and then some

Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an array element as argument, returns true or false. Just like && returns a true value only when the expressions on both sides are true, every returns true only when the predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at the values after that.

Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.

*/

function every(array, test) {
	// loops through array, running test on each value
	// if test is false, return false, else pass
	// return true at end of function (if none of the tests failed)
	for (var i=0; i<array.length; i++) {
		if (!test(array[i])) {return false;}
	}
	return true;
}

function some(array, test) {
	// loops through array, running test on each value
	// if test is true, return true, else pass
	// return false at end of function (if none of the tests passed)

}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
