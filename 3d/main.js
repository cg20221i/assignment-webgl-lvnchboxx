function main() {
  //get the element
  //get context is for adding the library webgl into outcode
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("experimental-webgl");

const vertex5 = [

//5
-1.740000, 2.700000, 0,         0.0, 0.0, 1.0,
-1.740000, 2.700000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 2.700000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 2.700000, 0,         0.0, 0.0, 1.0,
-2.580000, 2.400000, 0,         0.0, 0.0, 1.0,
-2.580000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 1.500000, 0,         0.0, 0.0, 1.0,
-2.490000, 1.260000, 0,         0.0, 0.0, 1.0,
-2.490000, 1.260000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.500000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.650000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-2.250000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-2.250000, 1.650000, 0,         0.0, 0.0, 1.0,
-1.920000, 1.650000, 0,         0.0, 0.0, 1.0,
-1.920000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.500000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.200000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.200000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 0.900000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 0.900000, 0,         0.0, 0.0, 1.0,
-2.040000, 0.600000, 0,         0.0, 0.0, 1.0,
-2.040000, 0.600000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 0.600000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 0.600000, 0,         0.0, 0.0, 1.0,
-2.580000, 0.450000, 0,         0.0, 0.0, 1.0,
-2.580000, 0.450000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 0.300000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 0.300000, 0,         0.0, 0.0, 1.0,
-1.950000, 0.300000, 0,         0.0, 0.0, 1.0,
-1.950000, 0.300000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 0.750000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 0.750000, 0,         0.0, 0.0, 1.0,
-1.590000, 1.650000, 0,         0.0, 0.0, 1.0,
-1.590000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.950000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.950000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.950000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.950000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 2.250000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 2.250000, 0,         0.0, 0.0, 1.0,
-2.310000, 2.400000, 0,         0.0, 0.0, 1.0,
-2.310000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-1.740000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-1.740000, 2.400000, 0,         0.0, 0.0, 1.0,
-1.590000, 2.550000, 0,         0.0, 0.0, 1.0,
-1.590000, 2.550000, -0.5,              0.3, 0.3, 1.0,


//5 (2)
-1.740000, 2.700000, -0.5,              0.3, 0.3, 1.0,
-1.740000, 2.700000, 0,         0.0, 0.0, 1.0,
-2.400000, 2.700000, 0,         0.0, 0.0, 1.0,
-2.400000, 2.700000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 2.400000, 0,         0.0, 0.0, 1.0,
-2.580000, 1.500000, 0,         0.0, 0.0, 1.0,
-2.580000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-2.490000, 1.260000, -0.5,              0.3, 0.3, 1.0,
-2.490000, 1.260000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.500000, 0,         0.0, 0.0, 1.0,
-2.400000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.650000, 0,         0.0, 0.0, 1.0,
-2.250000, 1.650000, 0,         0.0, 0.0, 1.0,
-2.250000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-1.920000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-1.920000, 1.650000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.500000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.500000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.200000, -0.5,              0.3, 0.3, 1.0,
-1.800000, 1.200000, 0,         0.0, 0.0, 1.0,
-1.800000, 0.900000, 0,         0.0, 0.0, 1.0,
-1.800000, 0.900000, -0.5,              0.3, 0.3, 1.0,
-2.040000, 0.600000, -0.5,              0.3, 0.3, 1.0,
-2.040000, 0.600000, 0,         0.0, 0.0, 1.0,
-2.400000, 0.600000, 0,         0.0, 0.0, 1.0,
-2.400000, 0.600000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 0.450000, -0.5,              0.3, 0.3, 1.0,
-2.580000, 0.450000, 0,         0.0, 0.0, 1.0,
-2.400000, 0.300000, 0,         0.0, 0.0, 1.0,
-2.400000, 0.300000, -0.5,              0.3, 0.3, 1.0,
-1.950000, 0.300000, -0.5,              0.3, 0.3, 1.0,
-1.950000, 0.300000, 0,         0.0, 0.0, 1.0,
-1.590000, 0.750000, 0,         0.0, 0.0, 1.0,
-1.590000, 0.750000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 1.650000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 1.650000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.950000, 0,         0.0, 0.0, 1.0,
-1.800000, 1.950000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.950000, -0.5,              0.3, 0.3, 1.0,
-2.400000, 1.950000, 0,         0.0, 0.0, 1.0,
-2.400000, 2.250000, 0,         0.0, 0.0, 1.0,
-2.400000, 2.250000, -0.5,              0.3, 0.3, 1.0,
-2.310000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-2.310000, 2.400000, 0,         0.0, 0.0, 1.0,
-1.740000, 2.400000, 0,         0.0, 0.0, 1.0,
-1.740000, 2.400000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 2.550000, -0.5,              0.3, 0.3, 1.0,
-1.590000, 2.550000, 0,         0.0, 0.0, 1.0,
];

const indices5 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64,
    65, 66, 67, 68, 69, 70, 71, 72, 73,
    74, 75, 76, 77, 78, 79, 80, 81, 82,
    83, 84, 85, 86, 87, 88, 89, 90, 91,
    92, 93, 94, 95, 96, 97, 98, 99
];

const vertex4 = [
//4
1.650000, 2.700000, 0,          0.0, 0.0, 1.0,
1.650000, 2.700000, -0.5,               0.3, 0.3, 1.0,
1.500000, 2.400000, -0.5,               0.3, 0.3, 1.0,
1.500000, 2.400000, 0,          0.0, 0.0, 1.0,
1.500000, 1.590000, 0,          0.0, 0.0, 1.0,
1.500000, 1.590000, -0.5,               0.3, 0.3, 1.0,
1.650000, 1.350000, -0.5,               0.3, 0.3, 1.0,
1.650000, 1.350000, 0,          0.0, 0.0, 1.0,
2.250000, 1.350000, 0,          0.0, 0.0, 1.0,
2.250000, 1.350000, -0.5,               0.3, 0.3, 1.0,
2.250000, 0.300000, -0.5,               0.3, 0.3, 1.0,
2.250000, 0.300000, 0,          0.0, 0.0, 1.0,
2.400000, 0.000000, 0,          0.0, 0.0, 1.0,
2.400000, 0.000000, -0.5,               0.3, 0.3, 1.0,
2.400000, 0.300000, -0.5,               0.3, 0.3, 1.0,
2.400000, 0.300000, 0,          0.0, 0.0, 1.0,
2.400000, 2.700000, 0,          0.0, 0.0, 1.0,
2.400000, 2.700000, -0.5,               0.3, 0.3, 1.0,
2.250000, 2.400000, -0.5,               0.3, 0.3, 1.0,
2.250000, 2.400000, 0,          0.0, 0.0, 1.0,
2.250000, 1.650000, 0,          0.0, 0.0, 1.0,
2.250000, 1.650000, -0.5,               0.3, 0.3, 1.0,
1.740000, 1.650000, -0.5,               0.3, 0.3, 1.0,
1.740000, 1.650000, 0,          0.0, 0.0, 1.0,
1.650000, 1.800000, 0,          0.0, 0.0, 1.0,
1.650000, 1.800000, -0.5,               0.3, 0.3, 1.0,
1.650000, 2.400000, -0.5,               0.3, 0.3, 1.0,
1.650000, 2.400000, 0,          0.0, 0.0, 1.0,


//4 (2)
1.650000, 2.700000, 0,          0.0, 0.0, 1.0,
1.500000, 2.400000, 0,          0.0, 0.0, 1.0,
1.500000, 2.400000, -0.5,               0.3, 0.3, 1.0,
1.500000, 1.590000, -0.5,               0.3, 0.3, 1.0,
1.500000, 1.590000, 0,          0.0, 0.0, 1.0,
1.650000, 1.350000, 0,          0.0, 0.0, 1.0,
1.650000, 1.350000, -0.5,               0.3, 0.3, 1.0,
2.250000, 1.350000, -0.5,               0.3, 0.3, 1.0,
2.250000, 1.350000, 0,          0.0, 0.0, 1.0,
2.250000, 0.300000, 0,          0.0, 0.0, 1.0,
2.250000, 0.300000, -0.5,               0.3, 0.3, 1.0,
2.400000, 0.000000, -0.5,               0.3, 0.3, 1.0,
2.400000, 0.000000, 0,          0.0, 0.0, 1.0,
2.400000, 0.300000, 0,          0.0, 0.0, 1.0,
2.400000, 0.300000, -0.5,               0.3, 0.3, 1.0,
2.400000, 2.700000, -0.5,               0.3, 0.3, 1.0,
2.400000, 2.700000, 0,          0.0, 0.0, 1.0,
2.250000, 2.400000, 0,          0.0, 0.0, 1.0,
2.250000, 2.400000, -0.5,               0.3, 0.3, 1.0,
2.250000, 1.650000, -0.5,               0.3, 0.3, 1.0,
2.250000, 1.650000, 0,          0.0, 0.0, 1.0,
1.740000, 1.650000, 0,          0.0, 0.0, 1.0,
1.740000, 1.650000, -0.5,               0.3, 0.3, 1.0,
1.650000, 1.800000, -0.5,               0.3, 0.3, 1.0,
1.650000, 1.800000, 0,          0.0, 0.0, 1.0,
1.650000, 2.400000, 0,          0.0, 0.0, 1.0,
1.650000, 2.400000, -0.5,               0.3, 0.3, 1.0,
1.650000, 2.700000, -0.5,               0.3, 0.3, 1.0,  
];

const indices4 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55
];

const vertexN = [

    //front
    -1.740000, -0.300000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.900000, 0,                0.0, 0.0, 1.0,
    -1.500000, -1.800000, 0,                0.0, 0.0, 1.0,
    -1.740000, -1.800000, 0,                0.0, 0.0, 1.0,

    -1.500000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.740000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.800000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.800000, 0,                0.0, 0.0, 1.0,

    -0.900000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.130000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.750000, 0,                0.0, 0.0, 1.0,

    //left
    -1.740000, -0.300000, 0,                0.0, 0.0, 1.0,
    -1.740000, -1.800000, 0,                0.0, 0.0, 1.0,
    -1.740000, -1.800000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -0.300000, -0.5,             0.3, 0.3, 1.0,

    //inner left
    -1.500000, -0.900000, 0,                0.0, 0.0, 1.0,
    -1.500000, -1.800000, 0,                0.0, 0.0, 1.0,
    -1.500000, -1.800000, -0.5,             0.3, 0.3, 1.0,
    -1.500000, -0.900000, -0.5,             0.3, 0.3, 1.0,

    //left top
    -1.740000, -0.300000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.900000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.900000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -0.300000, -0.5,             0.3, 0.3, 1.0,

    //top left
    -1.740000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -0.240000, -0.5,             0.3, 0.3, 1.0,

    //middle left
    -1.740000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.800000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.800000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -0.240000, -0.5,             0.3, 0.3, 1.0,

    //middle right
    -0.900000, -1.800000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.500000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -0.900000, -1.800000, -0.5,             0.3, 0.3, 1.0,

    //inner right
    -1.140000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.130000, 0,                0.0, 0.0, 1.0,
    -1.140000, -1.130000, -0.5,             0.3, 0.3, 1.0,
    -1.140000, -0.240000, -0.5,             0.3, 0.3, 1.0,

    //right top
    -0.900000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -0.240000, 0,                0.0, 0.0, 1.0,
    -1.140000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -0.900000, -0.240000, -0.5,             0.3, 0.3, 1.0,

    //bottom right
    -1.140000, -1.130000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.750000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.750000, -0.5,             0.3, 0.3, 1.0,
    -1.140000, -1.130000, -0.5,             0.3, 0.3, 1.0,

    //right
    -0.900000, -0.240000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.750000, 0,                0.0, 0.0, 1.0,
    -0.900000, -1.750000, -0.5,             0.3, 0.3, 1.0,
    -0.900000, -0.240000, -0.5,             0.3, 0.3, 1.0,

    //back
    -1.740000, -0.300000, -0.5,             0.3, 0.3, 1.0,
    -1.500000, -0.900000, -0.5,             0.3, 0.3, 1.0,
    -1.500000, -1.800000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -1.800000, -0.5,             0.3, 0.3, 1.0,

    -1.500000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -1.740000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -1.140000, -1.800000, -0.5,             0.3, 0.3, 1.0,
    -0.900000, -1.800000, -0.5,             0.3, 0.3, 1.0,

    -0.900000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -1.140000, -0.240000, -0.5,             0.3, 0.3, 1.0,
    -1.140000, -1.130000, -0.5,             0.3, 0.3, 1.0,
    -0.900000, -1.750000, -0.5,             0.3, 0.3, 1.0,

];

const indicesN = [
    0,  1,  2,     0,  2,  3,
    4,  5,  6,     4,  6,  7,   
    8,  9,  10,    8,  10, 11,  
    12, 13, 14,    12, 14, 15, 
    16, 17, 18,    16, 18, 19,  
    20, 21, 22,    20, 22, 23,
    24, 25, 26,    24, 26, 27,
    28, 29, 30,    28, 30, 31,
    32, 33, 34,    32, 34, 35,
    36, 37, 38,    36, 38, 39,
    40, 41, 42,    40, 42, 43,
    44, 45, 46,    44, 46, 47,
    48, 49, 50,    48, 50, 51,
    52, 53, 54,    52, 54, 55,
    56, 57, 58,    56, 58, 59,
    60, 61, 62,    60, 62, 63,
];

const vertexA = [
  //front
  0.300000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,

  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.200000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.350000, 0,         0.0, 0.0, 1.0,
  1.020000, -0.300000, 0,         0.0, 0.0, 1.0,

  0.540000, -1.620000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.410000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.410000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.620000, 0,         0.0, 0.0, 1.0,

  0.840000, -1.230000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.380000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.770000, 0,         0.0, 0.0, 1.0,

  0.840000, -1.800000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.410000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.800000, 0,         0.0, 0.0, 1.0,

  //back
  0.300000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.540000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.200000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.350000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  0.540000, -1.620000, -0.5,              0.3, 0.3, 1.0,
  0.540000, -1.410000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.410000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.620000, -0.5,              0.3, 0.3, 1.0,

  0.840000, -1.230000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.380000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.770000, -0.5,              0.3, 0.3, 1.0,

  0.840000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.410000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.800000, -0.5,              0.3, 0.3, 1.0,

  //left
  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.300000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.300000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  //bottom left
  0.300000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.300000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.540000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.540000, -1.800000, 0,         0.0, 0.0, 1.0,

  //inner left
  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  //middle top
  0.840000, -1.410000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.410000, 0,         0.0, 0.0, 1.0,  
  0.540000, -1.410000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.410000, -0.5,              0.3, 0.3, 1.0,

  //middle bottom
  0.840000, -1.620000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.620000, 0,         0.0, 0.0, 1.0,
  0.540000, -1.620000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.620000, -0.5,              0.3, 0.3, 1.0,

  //top right
  1.020000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  //inner top left
  0.840000, -0.300000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.200000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.200000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -0.300000, -0.5,              0.3, 0.3, 1.0,

  //inner bottom left
  0.840000, -1.230000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.770000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.770000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.230000, -0.5,              0.3, 0.3, 1.0,

  //bottom right
  1.020000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.800000, -0.5,              0.3, 0.3, 1.0,

  //middle right 1
  0.840000, -1.200000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.350000, 0,         0.0, 0.0, 1.0,
  1.020000, -1.350000, -0.5,              0.3, 0.3, 1.0,
  0.840000, -1.200000, -0.5,              0.3, 0.3, 1.0,

  //middle right 2
  1.020000, -1.380000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.230000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.230000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.380000, -0.5,              0.3, 0.3, 1.0,

  //middle right 3
  1.020000, -1.380000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.770000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.770000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.380000, -0.5,              0.3, 0.3, 1.0,
 
  //middle right 4
  1.020000, -1.410000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.800000, 0,         0.0, 0.0, 1.0,
  0.840000, -1.800000, -0.5,              0.3, 0.3, 1.0,
  1.020000, -1.410000, -0.5,              0.3, 0.3, 1.0,


];

const indicesA = [
    0, 1, 2,
    3, 4, 5,    3, 5, 6,
    7, 8, 9,    7, 9, 10,
    11, 12, 13,
    14, 15, 16,

    17, 18, 19,
    20, 21, 22,    20, 22, 23,
    24, 25, 26,    24, 26, 27,
    28, 29, 30,
    31, 32, 33,

    34, 35, 36,    34, 36, 37,
    38, 39, 40,    38, 40, 41,
    42, 43, 44,    42, 44, 45,
    46, 47, 48,    46, 48, 49,
    50, 51, 52,    50, 52, 53,
    54, 55, 56,    54, 56, 57,
    58, 59, 60,    58, 60, 61,
    62, 63, 64,    62, 64, 65,
    66, 67, 68,    66, 68, 69,
    70, 71, 72,    70, 72, 73,
    74, 75, 76,    74, 76, 77,
    78, 79, 80,    78, 79, 81,
    82, 83, 84,    82, 84, 85,

];

const vertexcube = [
 //Cube
 1, 1, 1,     1, 1, 1,     // Index:  0    kanan atas depan
  1, -1, 1,     1, 1, 1,       // Index:  1
  -1, -1, 1,     1, 1, 1,    // Index:  2
  -1,  1, 1,     1, 1, 1,     // Index:  3

  1, 1,  -1,     1, 1, 1,       // Index:  4 kanan atas belakang
  1, -1,  -1,     1, 1, 1,      // Index:  5
  -1, -1, -1,     1, 1, 1,    // Index:  6
  -1,  1,  -1,     1, 1, 1,     // Index:  7
  
  -1, -1, -1,     1, 1, 0,      // Index:  8
  -1,  1, -1,     1, 1, 0,      // Index:  9
  -1,  1,  -1,     1, 1, 0,      // Index: 10
  -1, -1,  -1,     1, 1, 0,       // Index: 11

  1, -1, -1,     0, 0, 1,       // Index: 12
  1,  1, -1,     0, 0, 1,       // Index: 13
  1,  1,  -1,     0, 0, 1,       // Index: 14
  1, -1,  -1,     0, 0, 1,      // Index: 15

  -1, -1, -1,     1, 0.5, 0,    // Index: 16
  -1, -1,  -1,     1, 0.5, 0,     // Index: 17
  1, -1,  -1,     1, 0.5, 0,     // Index: 18
  1, -1, -1,     1, 0.5, 0,     // Index: 19

  -1,  1, -1,     1, 1, 1,       // Index: 20
  -1,  1, -1,     1, 1, 1,        // Index: 21
  1,  1,  -1,     1, 1, 1,        // Index: 22
  1,  1, -1,     1, 1, 1,        // Index: 23
];

const indicescube = [
  0, 1, 2,     0, 2, 3,     // Face A
  4, 5, 6,     4, 6, 7,     // Face B
  8,9,10,      8,10,11,
  12,13,14,    12,14,15,
   1,2,5,       2,5,6,
 20, 21, 22,  20, 22, 23,0   // Face F 
];


const objects = [
    {
      vertices: vertex5,
      indices: indices5,
      length: indices5.length,
      type: gl.LINE_LOOP,
    },
    {
      vertices: vertex4,
      indices : indices4,
      length: indices4.length,
      type: gl.LINE_LOOP
    },
    {
      vertices: vertexN,
      indices: indicesN,
      length: indicesN.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: vertexA,
      indices: indicesA,
      length: indicesA.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: vertexcube,
      indices: indicescube,
      length: indicescube.length,
      type: gl.TRIANGLES,
    }
  ]

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

// uniform mat4 matrix;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    vColor = color;
    // gl_Position = matrix * vec4(position, 1);
    gl_Position = mProj * mView * mWorld * vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// varoaible lokal
var rotateX = 0;
var rotateY = 0;
var canvasWidth = 12
var horizontalSpeed = 0.154;
var horizontalDelta = 0.0;
var verticalDelta = 0.0;
var scaleDelta = 0.0;
var scaleSpeed = 0.05;

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var view = glMatrix.mat4.create();

glMatrix.mat4.lookAt(
  view,
  [cameraX, 0.0, cameraZ],
  [cameraX, 0.0, 0],
  [0.0, 1.0, 0.0]
);

var perspective = glMatrix.mat4.create();
glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1, 0.5, 50.0);

const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
  const buffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const aPosition = gl.getAttribLocation(program, 'position');
  const aColor = gl.getAttribLocation(program, 'color');

  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
    6 * Float32Array.BYTES_PER_ELEMENT, 
    0 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aPosition);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
}

gl.linkProgram(program);
gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const animate5 = () =>{
    var model = glMatrix.mat4.create();

    if (horizontalDelta >= (canvasWidth/2) || horizontalDelta <= (-canvasWidth/2+1)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    horizontalDelta += horizontalSpeed;

    glMatrix.mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }
  
  const animate4 = () =>{
    var model = glMatrix.mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
      scaleSpeed = scaleSpeed * -1;
    }

    scaleDelta += scaleSpeed;

    glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }

  const animateN = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const animateA = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
//cube
  const animatecube = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);


    
    draw(objects[4].vertices, objects[4].indices, 0, objects[4].length, objects[4].type);
  }
  
  function onKeydown(event) {
    if (event.keyCode == 65 || event.keyCode == 37) { // a / arrow kiri
      rotateY -= 0.2;
    } else if (event.keyCode == 68 || event.keyCode == 39) { // d / arrow kanan
      rotateY += 0.2;
    }

    if (event.keyCode == 87 || event.keyCode == 38) { // w / arrow atas
      rotateX -= 0.2;
    } else if (event.keyCode == 83 || event.keyCode == 40) { // s / arrow bawah
      rotateX += 0.2;
    }

    if (event.keyCode == 74 ) { // j / downward
      object.y -= 1;
    } else if (event.keyCode == 73) { // i / keatasa 
      object.y += 1;
    }

    

  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(1.0, 0.56, 0.64, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animate5();
    animate4();
    animateN();
    animateA();
    animatecube();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
