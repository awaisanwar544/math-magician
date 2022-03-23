import calculate from '../calculate';

describe('Test cases for the calculate function', () => {
  test('User clicks the AC button', ()=> {
    const result = calculate({ }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    })
  });

  describe('The buttonname arg is a number', () => {
    test('obj.next and buttonname are 0', ()=> {
      const obj = { 
        total: null,
        next: '0',
        operation: null,};
      const result = calculate(obj, '0');
      expect(result).toEqual({});
    });

    describe('the object is an operation', () => {
      test('obj.next is not null', ()=> {
        const obj = { 
          total: null,
          next: '4',
          operation: '+',};
        const result = calculate(obj, '7');
        expect(result).toEqual({ ...obj, next:  '47' })
      })

      test('obj.next is null', ()=> {
        const obj = { 
          total: null,
          next: null,
          operation: '+',
        };
        const result = calculate(obj, '5');
        expect(result).toEqual({ ...obj, next: '5' })
      })
    })

    test('obj.operation is null', ()=> {
      const obj = { 
        total: '50',
        next: '5',
        operation: null,
      };
      const result = calculate(obj, '5');
      expect(result).toEqual({next: '55',
        total: null,})
    })

    test('if obj.operation and obj.next are null', ()=> {
      const obj = { 
        total: '50',
        next: null,
        operation: null,
      };
      const result = calculate(obj, '5');
      expect(result).toEqual({next: '5',  total: null,})
    })
  });
});