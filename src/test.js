import {generatePseudoRandom} from './index';

describe('pseudo-random', () => {
  test('generates 95', () => {
    expect(generatePseudoRandom(10, 100, 'ab')).toBe(95);
  });

  test('generates 62', () => {
    expect(generatePseudoRandom(10, 100, 'aasdf3')).toBe(62);
  });

  test('generates 62', () => {
    expect(generatePseudoRandom(10, 100, 'aasgfdsgf sfdg')).toBe(86);
  });

  test('generates 10', () => {
    expect(generatePseudoRandom(10, 100, '')).toBe(10);
  });
});