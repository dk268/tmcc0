The open-mindedness of the prompt leaves a wealth of room for interpretation. 

- lift.js is the primary solution; I use "node lift.js" to execute the program and create the output.
- lift.spec.js is the testing suite; "npm run test" executes it.
- "liftStream.js" is an experiment in using streams to handle the million+ data files. It does not function.
- checkinputs.js is a file used to modularize the code; it contains the checkInputs helper function to help guard against users' "creativity."

- The first input had a very interesting set of orders. There were so many orders for floors too high that I might just toss that report entirely, or replace the sensor.


For purposes of this exercise, I will assume that everything written in text_instructions.txt is the literal truth. I will try to eliminate all connotation and stick to denotation (I will fail, but fail nobly) and note in README where I have made assumptions.



The first thing I would analyze is the input files—

- The first few lines of each are integers followed by newline characters, before a long string of digits separated by commas. For sanity, I will assume all digits are base 10.

- While it is logical to think that the first three integers, each followed by newlines, represent the number of elevators, the number of storeys, and the elevator capacity, respectively, the text of text_instructions.txt reads, “Input: Text file with a comma separated string with the destination floor number for each person waiting in line.” I believe this literally indicates that there exists a comma-separated string representing the floor numbers, and does not entail that there be nothing else within the file contents. This means that the first three numbers could indeed be M, N, and Q.

- The text also reads, however, that we are given M, N, Q, and the name of an input file. While this is highly suggestive that M, N, and Q are different from the name of the input file, the method of communication of M, N, and Q are not denotatively specified; therefore, it is possible that the three numbers are communicated via the file whose name we are given. 

- My reading of the English text suggests strongly that M, N, and Q would not be within the file; however, the nature of this challenge as a test, suggesting that all information be available somehow, would indicate the opposite. Since there are three extra numbers and three extra parameters, it seems a worthy pattern to assume M, N, and Q are the first three lines of each text file.

- For sanity, I will assume that the data are in that order—M, N, Q. 

- For purposes of this test, I will treat those first three data as M, N, and Q. However, I intend that my algorithm be input-agnostic, and should be able to handle any reasonable input.

- For sanity, I will assume that any integer between two commas in an input string represents a single passenger and the corresponding destination. I will not assume, however, that this integer points to a valid floor. 



I would then like to talk about the scenario—

- Most poignantly, to me, is the lack of information about the elevator’s starting and stopping. How long does it take for people to embark, to disembark? How sharp is its acceleration, its deceleration? For purposes of this challenge...

- The solution will assume that embarking and disembarking take zero time, and that there is no acceleration and no deceleration. This simplification entails, if I am correct (and I often am not), that as long as the elevator does not continue up past its highest passenger’s destination, the elevator’s movement is optimized for that particular load.

Files 1, 2, and 3 work fine. I attempted to handle the million inputs in inputs 4 and 5 via streaming, but I am not yet expert enough to make it work. I'm excited to learn in the near future, though. 

Files 4 and 5 do work, but it takes a few minutes for the computer to crunch the million data.

If I were to not assume that the passenger drop off be instantaneous, I would, in another solution, code the following:

- Each of the N elevators is assigned 1/N floors to service.
- The program pulls from the queue until each elevator is filled with petitioners heading to a floor in the correct range.
- When an elevator is dispatched, the program pulls from the queue until that elevator's buffer is back to full, with petitioners heading to a floor in the correct range.
- When the queue in a particular range is exhausted, that elevator will have its range expanded to accept the next highest range as well (it stands to reason that in an even distribution, the lowest-serving elevator will finish first)

Further optimization could be achieved by pre-computing such that each elevator only goes to a single floor. However, this begins to tread even more harshly on the petitioners' sense of fairness.

Further optimization could be achieved by advising those whose destination floor is 4 or less to take the stairs.
Yet further optimization could be achieved by stopping only on regular floors, such as multiples of 2 or 3, and have petitioners use the stairs to get to their final destinations.

Since there appear to be no elevator rides aside from lobby upward, the need to implement an algorithm to service the nearest request is unnecessary.

However, I did some research; the nearest-seek algoirthm is the most optimal, but can lead to starvation effects. 
The idea of an elevator servicing the nearest request that requires it to travel in the direction it's already traveling in, which I believe is what we're used to, strikes, in my opinion, a pretty good balance, at least, for elevator-to-floor ratios of 1/4 or better.

When I get more expertise with writing to files, I could also provide additional analysis on the elevators.

For example, it is possible to see how often a given floor is being used, how often a particular elevator is deployed to a given floor or floor range, or if any patterns in the elevator use emerge.

It would also be possible to run statistics on the inputs; thousands of values provide good confidence, I would think.

Simulating the elevators running was a wonderful challenge. Thank you for having me tackle it.