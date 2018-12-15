# Toy Robot Simulator

Installation: (node modules not included)
-----------
    git clone https://github.com/authanand/toyrobo.git


Run unit test using JEST
-----------
    npm test

Run program with input file
-----------
    ./index.js ./input/test1.txt


Run Build package using grunt
-----------
    grunt build

Dependency
-----------
chalk, byline, grunt, jest

Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH

