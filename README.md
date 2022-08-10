# node-behind-the-scenes
Objectives: Understand overall node architecture, its dependences, execution process, the strategy to deal with singles thread, event loop, streams, requiring modules, and more. 

## Nodejs Architecture
This framework was built around V8 JavaScript (built with both js and c++) engine and LibUV (built with pure c++); the first help translate js code into machine code in order to work on back side;
And libUV, deals with async I/O , events loops and thread pool (when there's heavy task needing special treatment),

This small project is just for diving deeper into this framework
1 - It's demonstrate pratical examples of callbacks queue (to grasp the sequence of execution);

2 - It's demonstrated how exactly event loop offload the heavy task to the thread pool, and it's manipulated the number of threads to see how is it like

3 - Demonstrate also how to deals with streams (I've also learnt why and when using them), It was used pipe function in writable stream type to avoid backpressure. I studied 4 types of streams (Readable, writable, duplex, and transform) and when to use each;

4 - I've also learnt about modules, differents ways to export them, differences between them, ideal sequence of requiring.

5 - Event-driven architecture (listen, emit, and treat each event properly with a callback function), and best practices of deal with events

Almost everything above were demonstrated in this code, each concept in a separete JS file.

Enjoy!
