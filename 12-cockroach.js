// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, 
// rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// find formula to get cm/s from km/h
// 1. 1 km/h = 27.7777778 cm/s

// take cm/s * by input speed

function cockroachSpeed(s) {
    return Math.floor(s *  27.7777778);
  }