# Summary Command

## Section 1 - Command Description

The `summary` tool is a Node.js command-line program that reads a text file and displays a brief summary of its contents.

the tool displays:

- the filename
- the total number of lines
- the first line
- the last line

### How to Run It

Node.js must be installed. Run the tool from the project directory using: 

```bash
node summary.js filename.txt
```

Example:

```bash
node summary.js sample.txt
```

The included test files can be run with:

```bash
node summary.js sample.txt
node summary.js one-line.txt
```

### Commands Combined

The `summary` tool combines simplified features from three Linux commands:

- `wc` counts the total number of lines.
- `head` displays the first line.
- `tail` displays the last line.

## Section 2 - AI-Assisted Programming

### What I Asked AI

I asked AI to help me understand the requirements, plan the `summary` command, explain Node.js syntax errors, suggest test scenarios and edge cases, and explain how to create the GitHub repository. 

### Where AI Helped

AI helped me understand how to use `process.argv` to recieve a filename and `fs.readFileSync()` to read the file. It also suggested testing the program with a normal multiline file and a one-line file. AI helped explain erro messages while I was debugging the program.

### Where I Had to Think Independently 

I decided to continue using the `summary` command so the project matched my Part 1 plan. I created the files, entered and saved the code, ran the program in Terminal on my MAC, reviewed the results, corrected typos, and chose screenshots that clearly demonstrated the working program. 

### What AI Got Wrong or Missed

AI initially assymed the assignment should be completed in codio and that files were pre-provided. It also suggested using the `fancyCat` command that was provided as an example in the assignment. Some initial debugging and code suggestions didn't line up with what the overall idea was. 

