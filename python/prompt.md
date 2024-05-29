Task: Check whether the task was completed correctly

A problem statement
---
Create classes for Console Password Manager

The program should allow you to:
- Add new password records for different services.
- Find passwords by service name.
- Change passwords for existing records.
- Delete records.
- Save encrypted data to a file and load it from a file.
---

Requirements
---
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
---

Solution
---
"""
{{solution}}
"""
---

Template of the response:
---
Critical errors:

- <critical error 1>
...
- <critical error n>

Improvments:

- <improvment 1>
...
- <improvment n>

Final Decision:
Task has been accepted or not been accepted
--- 

How to fill up template:
- Be direct and concise in response
- instead of words in brackets `< >` place data and do not write `< >`
- Do not write `Template of the response:`