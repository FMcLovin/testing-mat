import { media } from './media';

describe('media test suite', () => {
  it('should return 550.6', () => {
    const numberList: number[] = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];
    const result = media(numberList);
    expect(result).toBeCloseTo(550.6);
  });

  it('should return 60.32', () => {
    const numberList: number[] = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];
    const result = media(numberList);
    expect(result).toBeCloseTo(60.32);
  });
});
