import { formatTextWithoutJustify, justifyText } from './string_manipulation';
import { TEXT_INPUT, TEXT_OUTPUT_PART_1, TEXT_OUTPUT_PART_2 } from './constants';

describe('formatTextWithoutJustify', () => {
  it('allows empty input', () => {
    expect(formatTextWithoutJustify('', 40)).toEqual('');
  });

  it('handles invalid text input', () => {
    expect(formatTextWithoutJustify(0, 40)).toEqual('');
  });

  it('handles invalid line length input', () => {
    expect(formatTextWithoutJustify(0, 'a')).toEqual('');
  });

  it('handles negative line length input', () => {
    expect(formatTextWithoutJustify(0, -1)).toEqual('');
  });

  it('outputs correctly', () => {
    expect(formatTextWithoutJustify(TEXT_INPUT, 40)).toEqual(TEXT_OUTPUT_PART_1);
  });
});

describe('justifyText', () => {
  it('allows empty input', () => {
    expect(justifyText('', 40)).toEqual('');
  });

  it('handles invalid text input', () => {
    expect(justifyText(0, 40)).toEqual('');
  });

  it('handles invalid line length input', () => {
    expect(justifyText(0, 'a')).toEqual('');
  });

  it('handles negative line length input', () => {
    expect(formatTextWithoutJustify(0, -1)).toEqual('');
  });

  it('outputs correctly', () => {
    expect(justifyText(TEXT_INPUT, 40)).toEqual(TEXT_OUTPUT_PART_2);
  });
});
