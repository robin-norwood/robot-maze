# Robot Maze

This is a simple project I've used to teach basic programming concepts to middle school students. The idea is to teach concepts with pencil and paper, to avoid the need for computers. I've found that when you only have a short amount of time to introduce programming concepts, dealing with syntax errors and other distractions when using a real computer takes up a lot of the time you have. This exercise is meant to be completed in about 30-45 minutes.

When each map is printed, students can "program" their robots by writing in the provided spaces, and then test their program by using a token (with an arrow to indicate direction) to "run" the program.

## Website

The mazes used are [available online](http://robot-maze.kjhl.tech/)

## Learning objectives

1. What is a program?
2. Commands
3. Loops
4. Conditionals
5. Testing and debugging
6. Algorithms vs. "brute force"

By doing "programming" with pencil and paper, we do away with the need for computers, and allow students to program in their own words without getting hung up on a specific programming language's syntax and rules, or worrying about making typos.

## How to use

Time: 25-45 minutes

1. Visit the [project website](http://robot-maze.kjhl.tech/)
2. Select each maze from the dropdown and print them out:
  - landscape, black & white
  - 60#-80# Cardstock works better than normal 20# paper
  - Should work on A4 as well, but I haven't tested it
3. Provide students with mazes, pencil, and a "robot" token with a marker to indicate direction
4. Invite students to talk about how they might program a robot
  - What commands can you give your robot?
  - What happens when the robot hits a wall?
5. Have the student solve each map in turn, introducing new concepts as described below, and talk about what they learned at each step.
6. When students solve a map, have them exchange solutions with others, so they can "test" their code. Talk about finding bugs. Talk about different ways to solve the same problem. Optionally talk about algorithms vs. brute force problem solving.
7. One of the design goals is to not get hung up on syntax, so let students use their own words to program their robots.

### Further exploration

1. Websites like [scratch](https://scratch.mit.edu/) and [hour of code](https://hourofcode.com/us) are good next steps.
2. More advanced students can explore the code that generates the maps and make their own changes. The code can be downloaded from github, and I've tried to make it as simple and clear as possible.
  - Create your own map
  - Add a "pit" obstacle
  - Add a "drill" add-on that your robot can pick up and use once
3. For students interested in creating games, [Phaser](https://phaser.io/) is a good framework to start with.

## Mazes

Topics for learning/discussion with each maze

### Intro Maze

- Writing your program
- What commands can your robot accept?
  - Suggested: `go forward`, `turn left`, `turn right`
  - Let students come up with their own terminology
- Check your work by having a friend follow your instructions

### Repeat Maze

- It would be a lot of work to write "go forward" nine times
- So you can repeat commands, or groups of commands:
  - `repeat ## times:`
  - *or:*
```
do:
  --
  --
10 times
```
  - Again, leave the exact wording up to the students
- Write and test the program as before

### Corners Maze

- More repetition. This time we have two "steps" to repeat.
- Talk about "algorithms" - instead of just telling the robot exactly what to do, give it a set of rules to follow until it gets to the end

### Spiral Maze
- Introduce conditionals: we can tell the robot `if` something is true, `then` do something else.
  - What could we have the robot check for to decide what to do?
  - (hopefully a student volunteers something like "if you see a wall, turn right"...otherwise lead them to it)
- Talk about different ways of solving the problem
- Talk about debugging...if not before now, usually by this time students will have "bugs" in their program and need to fix them.

### Easy Maze
- "Easy" is a misnomer...the goal of this is to show that sometimes there *isn't* a straightforward algorithm to solve a problem.
- This maze (I think) requires a more "brute force" approach
- Talk about how long it took to write out each of the steps. Computers spend time following steps too
- Compare that to going to a web page or playing a video
  - how long do you wait before you reload the page, or do something else? Ten minutes? No? Five? One?
  - usually most people will only wait a few seconds.
  - Companies like google and instagram spend a lot of time and money making their apps fast.

### Hard Maze
- This maze is "hard", but there's actually a fairly simple algorithm that can solve it.
- Invite students to brainstorm about how they might solve it with just a few lines of code
- Have them write their programs, test/debug them, and compare them. How short can they make the program?
- Many students will "brute force" this, and just write out the steps
- Ideally at least one or two will discover an algorithm to solve it efficiently.
  - A simple solution might be:
```
Repeat:
  Go forward until you see a wall
  Turn right
```

## End

- Review the concepts and learning objectives.
- Invite students to do the "Further Exploration" above.
