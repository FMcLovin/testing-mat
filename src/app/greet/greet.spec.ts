import { greet } from './greet';

describe('greet',() => {
    xit('should include the name in the message', () => {
        expect(greet('sebastian')).toContain('sebastian');
    })
});