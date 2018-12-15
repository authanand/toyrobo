# Toy Robot Simulator

Installation 
-----------
git clone https://github.com/authanand/toyrobo.git

Run unit test using JEST
-----------
npm test

Run program with input file
-----------
./index.js ./input/test1.txt
./index.js ./input/test2.txt
./index.js ./input/test3.txt
./index.js ./input/test4.txt
./index.js ./input/test5.txt
./index.js ./input/test6.txt

Run Build package
-----------
grunt build


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

