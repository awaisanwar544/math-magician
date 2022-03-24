import operate from '../operate';

describe('Performs mathematical operations', () => {
  it('performs an addition', () => {
    const result = operate('20', '5', '+');
    expect(result).toBe('25');
  });
  it('performs a substraction', () => {
    const result = operate('20', '5', '-');
    expect(result).toBe('15');
  });
  it('performs a multiplication', () => {
    const result = operate('20', '5', 'x');
    expect(result).toBe('100');
  });
  it('performs a division', () => {
    const result = operate('20', '5', '÷');
    expect(result).toBe('4');
  });
  it('performs a modulo operation', () => {
    const result = operate('10', '1500', '%');
    expect(result).toBe('10');
  });
});
