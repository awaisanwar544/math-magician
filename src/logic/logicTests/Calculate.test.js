import calculate from '../calculate';

describe('Test cases for the calculate function', () => {
  test('User clicks the AC button', () => {
    const result = calculate({ }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  describe('The buttonname arg is a number', () => {
    test('obj.next and buttonname are 0', () => {
      const obj = {
        total: null,
        next: '0',
        operation: null,
      };
      const result = calculate(obj, '0');
      expect(result).toEqual({});
    });

    describe('the object is an operation', () => {
      test('obj.next is not null', () => {
        const obj = {
          total: null,
          next: '4',
          operation: '+',
        };
        const result = calculate(obj, '7');
        expect(result).toEqual({ ...obj, next: '47' });
      });

      test('obj.next is null', () => {
        const obj = {
          total: null,
          next: null,
          operation: '+',
        };
        const result = calculate(obj, '5');
        expect(result).toEqual({ ...obj, next: '5' });
      });
    });

    test('obj.operation is null', () => {
      const obj = {
        total: '50',
        next: '5',
        operation: null,
      };
      const result = calculate(obj, '5');
      expect(result).toEqual({
        next: '55',
        total: null,
      });
    });

    test('if obj.operation and obj.next are null', () => {
      const obj = {
        total: '50',
        next: null,
        operation: null,
      };
      const result = calculate(obj, '5');
      expect(result).toEqual({ next: '5', total: null });
    });
  });
  describe('if buttonName is "." - When user clicks (.)', () => {
    test('obj.next is not null and has a decimal value', () => {
      const obj = {
        total: '50',
        next: '5.6',
        operation: null,
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({
        total: '50',
        next: '5.6',
        operation: null,
      });
    });
    test('obj.next is not null and does not has a decimal value', () => {
      const obj = {
        total: '50',
        next: '13',
        operation: null,
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({
        total: '50',
        next: '13.',
        operation: null,
      });
    });
    test('obj.operation is not null', () => {
      const obj = {
        total: null,
        next: null,
        operation: '+',
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({ next: '0.' });
    });
    test('obj.total is not null and has a decimal value', () => {
      const obj = {
        total: '15.7',
        next: null,
        operation: null,
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({});
    });
    test('obj.total is not null and does not has a decimal value', () => {
      const obj = {
        total: '50',
        next: null,
        operation: null,
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: '50.' });
    });
    test('obj.total, objet.next and obj.operation are null', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '.');
      expect(result).toEqual({ total: '0.' });
    });
  });
  describe('buttonName is "="', () => {
    test('obj.next & obj.operation has a value', () => {
      const obj = {
        total: 2,
        next: 2,
        operation: '-',
      };
      const result = calculate(obj, '=');
      expect(result).toEqual({
        total: '0',
        next: null,
        operation: null,
      });
    });
    test('obj.next & obj.operation are null', () => {
      const obj = {
        total: 2,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '=');
      expect(result).toEqual({});
    });
  });
  describe('buttonName is "+/-"', () => {
    test('obj.next has a value', () => {
      const obj = {
        total: null,
        next: 2,
        operation: null,
      };
      const result = calculate(obj, '+/-');
      expect(result).toEqual({
        total: null,
        next: '-2',
        operation: null,
      });
    });
    test('obj.total has a value', () => {
      const obj = {
        total: 5,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '+/-');
      expect(result).toEqual({
        total: '-5',
        next: null,
        operation: null,
      });
    });
    test('obj.total and onj.next are null', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '+/-');
      expect(result).toEqual({ next: '0' });
    });
  });
  describe('User pressed an operation', () => {
    test('after pressing "=" while obj.next && obj.operation are null, while  obj.total has a value', () => {
      const obj = {
        total: 3,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '+');
      expect(result).toEqual({
        total: 3,
        next: null,
        operation: '+',
      });
    });
    test('User pressed an operation button and there is an existing operation, while obj.total has value && obj.next is null', () => {
      const obj = {
        total: 3,
        next: null,
        operation: '%',
      };
      const result = calculate(obj, '*');
      expect(result).toEqual({
        total: 3,
        next: null,
        operation: '*',
      });
    });
    test('User pressed an operation button and there is an existing operation, while obj.total and obj.next has value', () => {
      const obj = {
        total: 3,
        next: 4,
        operation: '+',
      };
      const result = calculate(obj, '*');
      expect(result).toEqual({
        total: '7',
        next: null,
        operation: '*',
      });
    });
  });
  describe('no operation yet, but the user typed one', () => {
    test('The user has not typed a number yet, just save the operation while !obj.next', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const result = calculate(obj, '*');
      expect(result).toEqual({
        operation: '*',
      });
    });
    test('The user has not typed a number yet, just save the operation while !obj.next', () => {
      const obj = {
        total: 0,
        next: 5,
        operation: null,
      };
      const result = calculate(obj, '*');
      expect(result).toEqual({
        total: 5,
        next: null,
        operation: '*',
      });
    });
  });
});
