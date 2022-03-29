# Exam Format

This file specifies the JSON format for Exam-Maker.
This format allows an entire exam to be transported in a simple style,
which can then be printed to PDF.

## Structure

A basic example `.exam` file.

```json
{
    "author": "Author's Name",
    "date": "AM Tuesday 11 June 2019",
    "information": [
        "Use black ink or a black ballpoint pen.",
        "Fill in all boxes at the top of this page.",
        "Answer **all** questions",
        "You must answer the questions in the spaces provided."
    ],
    "license": "Not to be distributed until after the examination series has passed.",
    "questions": [
        ...
    ],
    "version": "0.1.0"
}
```

### Top-Level Data

Exams consist of two necessary parts:

1. [Version](#version)
2. [Questions](#questions)

and five optional parts:

1. [Author](#author)
2. [Date](#date)
3. [Information](#information)
4. [License](#license)

#### Version

This string specifies the minimum version of Exam-Maker that should be used to open the file.
Major version changes should not be used to open each other,
as there may be breaking changes.

#### Author

This string specifies the name of the person(s)/organisation(s) that authored the exam.

#### Date

This string specifies the date that the exam is specified to start.
This is text and must be altered and verified by the user.

An example date would be:

```
AM Tuesday 11 June 2019
```

#### Information

This array specifies bullet points that will appear in the exam's information section.
Exam-Maker will fill these by default with standard guidance.

#### License

Licensing information is important,
as well as the restrictions placed on any party wishing to distribute an exam.
This section should be considered legally binding,
and will appear on the back of any printed exam,
along with appearing in an exam's metadata sections.

### Questions

The main body of an examination is obviously its questions.
These are arranged in a direct tree structure.

References ending in a number always point towards questions,
while references ending in letters are always figures.
E.g:

- `5.3.2` - The second part of the third part of question five.
- `5.3.a` - The first figure of the third part of question five.
