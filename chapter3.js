// Write a function min that takes two arguments and returns their minimum.

function min(a,b) {
	if (a < b) {return a;}
	else {return b;}
}



/*

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

function isEven(n) {
	if (abs(n) <= 1) {return abs(n) == 0;}
	else {
		return isEven(abs(n) - 2);
	}
}