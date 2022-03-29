# Exam Format

This file specifies the JSON format for Exam-Maker.
This format allows an entire exam to be transported in a simple style,
which can then be printed to PDF.

## Structure

### Version

This string specifies the version of Exam-Maker that was used to generate the `.exam` file. Different major version must display a warning message stating that they are not necessarily compatible with the contents of the file.

### Meta

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

### Questions

This object specifies the content of the exam. Question objects are split into two components: Question and Markscheme. Each question is keyed with a UUID4 that uniquely identifies it for reference purposes.
