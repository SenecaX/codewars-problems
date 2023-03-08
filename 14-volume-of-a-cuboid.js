// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. 
// Write a function to help Bob with this calculation.

// The formula to calculate the volume of a cuboid is:

// Volume = length x width x height

// Where:

// Length is the length of the cuboid
// Width is the width of the cuboid
// Height is the height of the cuboid
// To calculate the volume of a cuboid, you simply multiply its length by its width and then multiply that result by its height. 
// This will give you the volume of the cuboid in cubic units, such as cubic meters, cubic centimeters, or cubic feet.

// For example, if a cuboid has a length of 3 meters, a width of 2 meters, and a height of 4 meters, the volume can be calculated as:

// Volume = 3 meters x 2 meters x 4 meters
// Volume = 24 cubic meters

// Therefore, the volume of the cuboid is 24 cubic meters.

function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
}