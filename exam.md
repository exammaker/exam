# Exam Format

This file specifies the JSON format for Exam-Maker.
This format allows an entire exam to be transported in a simple style,
which can then be printed to PDF.

## Structure

### `version`

This string specifies the version of Exam-Maker that was used to generate the `.exam` file.
Different major version must display a warning message stating that they are not necessarily compatible with the contents of the file.

### `meta`

This object specifies metadata about the exam; the metadata not being present should not consitute an error.

| Name         | Symbol         | Type     | Description                                                                         |
|--------------|----------------|----------|-------------------------------------------------------------------------------------|
| Author       | `author`       | `string` | The name of the person(s)/organisation(s) that wrote/administer the exam            |
| Date         | `date`         | `string` | The date on which the exam is to take place                                         |
| Information  | `information`  | `array`  | The bullet list of information to appear under the 'INFORMATION heading             |
| Instructions | `instructions` | `array`  | The bullet list of instructions to appear under the 'INSTRUCTIONS' heading          |
| License      | `license`      | `string` | The licensing conditions of an exam, may either specify a license URL or conditions |
| Subtitle     | `subtitle`     | `string` | The subtitle that appears underneath the exam title                                 |
| Title        | `title`        | `string` | The title that appears at the top of the exam                                       |

### `questions`

This tree specifies the content of the exam.
Each question is keyed with a UUID4 that uniquely identifies it for reference purposes.
This allows questions to be dynamically numbered according to their position.

## Questions

## Figures

Figures are extra context or information required by a question or set of questions;
these are found alongside questions.
They may contain text (markdown),
code (line numbers, monospace, syntax highlighting)
images

Any reference that ends with a letter is a figure. Just like any question text, figures must belong to a question

### Code

Code is syntax highlighted,
monospace,
and has line numbers.
Some exams may need monospaced,
line numbereded text without syntax highlighting.
The `text` or `txt` languages are available for this purpose.

Code should be arranged into an object as such:

- `string` Language
- `array<string>` Text

**Example**:

```json
{
    "language": "js",
    "text": [
        "const number = parseInt(prompt('Enter the number of terms: '));",
        "let n1 = 0, n2 = 1, nextTerm;",
        "",
        "console.log('Fibonacci Series:');",
        "",
        "for (let i = 1; i <= number; i++) {",
        "  console.log(n1);",
        "  nextTerm = n1 + n2;",
        "  n1 = n2;",
        "  n2 = nextTerm;",
        "}"
    ]
}
```

**Result**:

```js
 1 const number = parseInt(prompt('Enter the number of terms: '));
 2 let n1 = 0, n2 = 1, nextTerm;
 3 
 4 console.log('Fibonacci Series:');
 5
 6 for (let i = 1; i <= number; i++) {
 7   console.log(n1);
 8   nextTerm = n1 + n2;
 9   n1 = n2;
10   n2 = nextTerm;
11 }
```

### Images

Images should be compressed using

### Markdown

## Markschemes

Markschemes are directly attached to questions;
they are used to calculate the number of marks a question is worth.
A 6 mark question needs to have six markable points listed.

### Categories

Marks fall into categories that are inspired by the Assessment Objectives provided by the UK government,
and cover the majority of use cases without too much specificity.

| Name | Letter | Description |
|---|---|---|
| apply | A | Apply knowledge of... |
| calculation | C | Correctly perform mathematical calculations |
| evaluation | E | Interpret, analyse and evaluate... |
| produce | P | Create/Produce... |
| recall | R | Demonstrate knowledge and understanding of... |

The balance of a paper's marks can be calculated automatically;
this can be used to determine whether or not a paper properly conforms to its requirements.

### Example