import { formatTextWithoutJustify, justifyText } from './src/string_manipulation';
import { TEXT_INPUT } from './src/constants';

const lineLength = 40;

console.log('PART 1:\n');
console.log(formatTextWithoutJustify(TEXT_INPUT, lineLength));
console.log('\nPART 2:\n');
console.log(justifyText(TEXT_INPUT, lineLength));
console.log('\n');
