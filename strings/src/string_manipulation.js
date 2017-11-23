function padEnd(str, n) {
  for (let x = 0; x < n; x++) {
    str += ' ';
  }
  return str;
}

function buildLines(text, lineLength) {
  const lines = [];

  if (typeof text !== 'string') {
    return lines;
  }

  if (typeof lineLength !== 'number') {
    return lines;
  }

  const words = text.split(' ');

  let line = [];

  words.forEach((word) => {
    if (word.includes('\n')) {
      const wordsWithoutLineBreak = word.split('\n');

      if (line.join(' ').length + wordsWithoutLineBreak[0].length + 1 > lineLength) {
        const lastWord = line.length - 1;
        line[lastWord] = line[lastWord].concat('\n');
        lines.push(line);
        line = [];
      }

      wordsWithoutLineBreak.forEach((wordWithoutBreakLine) => {
        if (wordWithoutBreakLine !== wordsWithoutLineBreak[wordsWithoutLineBreak.length - 1]) {
          line.push(wordWithoutBreakLine.concat('\n'));
          lines.push(line);
          line = [];
        } else {
          line.push(wordWithoutBreakLine);
        }
      });
    } else if (line.join(' ').length + word.length + 1 > lineLength) {
      const lastWord = line.length - 1;
      line[lastWord] = line[lastWord].concat('\n');
      lines.push(line);
      line = [];
      line.push(word);
    } else {
      line.push(word);
    }
  });

  lines.push(line);

  return lines;
}

export function formatTextWithoutJustify(text, lineLength) {
  const formattedLines = buildLines(text, lineLength).map(line => line.join(' '));

  return formattedLines.join('');
}

export function justifyText(text, lineLength) {
  const justifiedLines = buildLines(text, lineLength).map((line) => {
    let phrase;
    let spaces;

    if (line.length === 1) {
      phrase = line.join('');

      if (phrase === '\n' || phrase.length === 0) {
        return phrase;
      }

      spaces = lineLength - phrase.length - 1;
      return padEnd(phrase, spaces);
    }

    const gaps = line.length - 1;
    spaces = lineLength - line.join('').replace('\n', '').length;
    let extraSpaces = spaces % gaps;
    const spacesPerGap = Math.floor(spaces / gaps);

    phrase = line.reduce((phraseAccumulator, word, index, { length }) => {
      let addOneSpace = false;
      if (extraSpaces > 0) {
        addOneSpace = true;
        extraSpaces -= 1;
      }
      const filler = spacesPerGap + (addOneSpace ? 1 : 0);
      if (index === length - 1) {
        return phraseAccumulator.concat(word);
      }

      return phraseAccumulator.concat(padEnd(word, filler));
    }, '');

    return phrase;
  });

  return justifiedLines.join('');
}
