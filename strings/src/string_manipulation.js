export default function formatTextWithoutJustify(text, lineLength) {
  if (typeof text !== 'string') {
    return '';
  }

  if (typeof lineLength !== 'number') {
    return '';
  }

  let lineCount = 0;
  const splittedText = text.split(' ');

  const formattedText = splittedText.reduce((textAccumulator, currentWord) => {
    // If word starts with uppercase and counter = 0 -> start of new line
    // If word contains '\n', -> end of line
    // If count > line length -> end line and begin a new one
    // else concat current word to the end of line

    if (lineCount === 0 && currentWord[0] === currentWord[0].toUpperCase()) {
      lineCount = currentWord.length;
      return textAccumulator.concat(`${currentWord}`);
    }

    lineCount += currentWord.length + 1;

    if (currentWord.includes('\n')) {
      lineCount = 0;
      return textAccumulator.concat(` ${currentWord}`);
    }

    if (lineCount > lineLength) {
      lineCount = currentWord.length;
      return textAccumulator.concat(`\n${currentWord}`);
    }

    return textAccumulator.concat(` ${currentWord}`);
  });

  return formattedText;
}
