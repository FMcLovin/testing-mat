import { stddev } from './stddev';
import { media } from '../media/media';

describe('stddev test suite', () => {
  it('should return stddev 572.03', () => {

    const numberList: number[] = [
      160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
    ];

    const meanResult = media(numberList);
    const result = stddev(numberList, meanResult);
    expect(result).toBeCloseTo(542.67);
  });

  it('should return stddev 62.26', () => {
    const numberList: number[] = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];
    
    const meanResult = media(numberList);
    const result = stddev(numberList, meanResult);
    expect(result).toBeCloseTo(59.06);
  });
});
