/*

Minimum

Write a function min that takes two arguments and returns their minimum.

*/

function min(a,b) {
	if (a < b) {return a;}
	else {return b;}
}

// rewritten using ternary
function min2(a,b) {return a < b ? a : b;}



/*

Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

import Math

function isEven(n) {
	n = Math.abs(n);
	if (n <= 1) {return n == 0;}
	else {return isEven(n - 2);}
}

// rewritten to use ternary
function isEven2(n) {
	n = Math.abs(n);
	return n <= 1 ? n == 0 : isEven(n - 2);
}




/*

Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

*/

function countBs(s) {
	return countChar(s, 'B');
}

function countChar(s, c) {
	var count = 0;
	for (var i=0; i<s.length; i++) {
		if (s.charAt(i) == c) {count += 1;}
	}
	return count;
}

// rewritten to use higher-order function in place of loop
function countChar2(s, c) {
	return s.split('').filter(function(v){return v == c;}).length;
}

