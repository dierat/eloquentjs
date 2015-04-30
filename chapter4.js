/*

The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

function range(start, end, step) {
    if (!step) {var step = 1;}
	var range = [];
	if (start < end) {
	    for (var i = start; i <= end; i+= step) {
	    	range.push(i);
	    }
	}
    else {
	    for (var i = start; i >= end; i+= step) {
	    	range.push(i);
	    }
    }
    return range;
}

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}


console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]




/*

Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

*/

function reverseArray(array) {
	newArray = []
	for (var i = 0; i < array.length; i++) {
		newArray.unshift(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace(array) {
	// cut array length in half using Math.floor to round down
	var last_place = array.length - 1;
	var half_length = Math.floor(array.length / 2) - 1;
	// then loop through the first half of the array and swap the element at that point with the one in the opposite location in the array
	for (var i=0; i<=half_length; i++) {
		var temp = array[i];
		array[i] = array[last_place - i];
		array[last_place - i] = temp;
	}
	// then return the result
	return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



/*

A list

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

*/

function arrayToList(array) {
	var list = null;
	for (var i=array.length-1; i>=0; i--) {
		var new_obj = {
			value: array[i],
			rest: list
		};
		list = new_obj;
	}
	return list;
}

function prepend(elem, list) {
	var new_list = {
		value: elem,
		rest: list
	};
	return new_list;
}

function listToArray(list) {
	var new_array = [];
	for (var node = list; node; node = node.rest) {
		new_array.push(node.value);
	}
	return new_array;
}

function nth(list, num) {
	var new_array = listToArray(list);
	return new_array[num];
}

function recursiveNth(list, num) {

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
