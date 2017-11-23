import formatTextWithoutJustify from './string_manipulation';

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

  it('output correctly', () => {
    expect(
      formatTextWithoutJustify(
        `In the beginning God created\
 the heavens and the earth. Now\
 the earth was formless and empty,\
 darkness was over the surface of\
 the deep, and the Spirit of God\
 was hovering over the waters.
 
And God said, "Let there be light," and\
 there was light. God saw that the light\
 was good, and he separated the light\
 from the darkness. God called the light\
 "day," and the darkness he called\
 "night." And there was evening, and\
 there was morning - the first day.`,
        40,
      ),
    ).toEqual(
      `In the beginning God created the heavens
and the earth. Now the earth was
formless and empty, darkness was over
the surface of the deep, and the Spirit
of God was hovering over the waters.

And God said, "Let there be light," and
there was light. God saw that the light
was good, and he separated the light
from the darkness. God called the light
"day," and the darkness he called
"night." And there was evening, and
there was morning - the first day.`,
    );
  });
});
