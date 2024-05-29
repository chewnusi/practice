# Prompt Engineering

This project provides with 3 examples of using prompt engineering to check solutions for different problems. The problems are: 
- [SQL task checking](#SQL-task-checking)
- [QA task checking](#QA-task-checking)
- [Python task checking](#Python-task-checking)

## SQL task checking

The task is to check whether the SQL statement has been written correctly. The context of the database is given and the problem statement is provided dynamicly. The solution is also provided. The template of the response is given to increase consistency of the output.

### Context database
The database comprises four tables: 
1. The table named "students" contains the following fields: student_id, birth_date, first_name, last_name
2. The table named "studentLocations" contains the fields: student_id, city
3. The table named "grades" contains the fields: student_id, grade, from_date, to_date
4. The table named "courses" contains the fields: student_id, course_name, from_date, to_date

### There are 8 SQL tasks to check

1. [SQL task 1](sql/test-cases/tasks/task1.md)
2. [SQL task 2](sql/test-cases/tasks/task2.md)
3. [SQL task 3](sql/test-cases/tasks/task3.md)
4. [SQL task 4](sql/test-cases/tasks/task4.md)
5. [SQL task 5](sql/test-cases/tasks/task5.md)
6. [SQL task 6](sql/test-cases/tasks/task6.md)
7. [SQL task 7](sql/test-cases/tasks/task7.md)
8. [SQL task 8](sql/test-cases/tasks/task8.md)

### Response template

The template contains the Critical errors and Final Decision sections.

### Test cases

The test cases were created from real student solutions to include the most common mistakes. 

### YAML file configuration

The configuration file is located in the `sql/promptfooconfig.yaml` file. The configuration file contains the following fields:

- `taskStatement` - the path to the task statement
- `solutionFile` - the path to the solution
- `assert` - the list of assertions to check the solution and evaluate the quality of the prompt 

The `assert` field contains the following fields:
- `type` - the type of assertion (contains)
- `value` - the value of the assertion ('has been accepted' or 'has not been accepted')

This type has been chosen because of the template of the response.

## QA task checking

The task is to check whether the points of checlist have been written correctly. The template of the response is given to increase consistency of the output.

### Task statement

The student should create a smoke checklist for Microsoft Teams. The checklist should  meet next requirements:

- Should contain only name of features being tested
- Must contain a process or an action
- Can not consist not of the functionality of the Microsoft Teams application
- Should cover the features that users commonly use when interacting with the Microsoft Teams

### Response template

The template contains the mark for each point of the checklist and the comment section.

### Test cases

The test cases were created from real students solutions and also were generated to check how well prompt works on correct and incorrect solutions.

### YAML file configuration

The configuration file is located in the `qa/promptfooconfig.yaml` file. The configuration file contains the following fields:

- `solutionFile` - the path to the solution
- `assert` - the list of assertions to check the solution and evaluate the quality of the prompt

The `assert` field contains the following fields:
- `type` - the type of assertion (javascript)
- `value` - the value of the assertion (wherer the point has mark less or more than 5)

This type has been chosen because of the template of the response (json format).

## Python task checking

The task is to check whether the Python code has been written correctly. The template of the response is given to increase consistency of the output.

### Task statement

Create classes for Console Password Manager

The program should allow you to:
- Add new password records for different services.
- Find passwords by service name.
- Change passwords for existing records.
- Delete records.
- Save encrypted data to a file and load it from a file.

### Requirements

- PasswordRecord class:
    Fields: service name, username, password.
    Methods: constructor, method to represent the object as a string.

- PasswordManager class:
    Fields: dictionary of records (service name as key and PasswordRecord object as value).
    Methods:
        1. Add a new record.
        2. Find a password by service name.
        3. Change a password for an existing record.
        4. Delete a record.
        5. Save data to an encrypted file.
        6. Load data from a file and decrypt it.

- Encryption and Decryption:
    Use the cryptography library for encrypting and decrypting data.

### Response template

The template contains the Critical errors, Improvements and Final Decision sections.

### Test cases

The test cases were created from students solutions and also were generated to include the most obvious mistakes.

### YAML file configuration

The configuration file is located in the `python/promptfooconfig.yaml` file. The configuration file contains the following fields:

- `solutionFile` - the path to the solution
- `assert` - the list of assertions to check the solution and evaluate the quality of the prompt

The `assert` field contains the following fields:
- `type` - the type of assertion (contains)
- `value` - the value of the assertion ('has been accepted' or 'has not been accepted')

This type has been chosen because of the template of the response.

## Technologies

- Promptfoo
- OpenAI API (gpt-4o)
- JavaScript