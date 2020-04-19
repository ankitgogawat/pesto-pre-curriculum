const describe = (desc, fn) => {
    console.log(desc)
    fn()
  };
  
  const it = (msg, fn) => describe('  ' + msg, fn);
  
  const matchers = (exp) => ({
    toBe: (assertion) => {
      if (exp === assertion) {
        console.log('pass')
        return true
      } else {
        console.log('fail')
        return false
      }
    }
  });
  
  const expect = (exp) => matchers(exp);
  
  
  
  function add(a, b) {
    return a + b 
  }
  
  function subtract(a, b) {
    return a - b 
  }
  
  function multiply(a, b) {
    return a * b 
  }
  
  function divide(a, b) {
    return a / b 
  }
  
  describe('add', () => {
    it('adds two numbers', () => {
      const result = add(5, 4)
      expect(result).toBe(9)
    })
  })
  
  describe('Subtract', () => {
    it('Subtracts two numbers', () => {
      const result = subtract(8, 6)
      expect(result).toBe(2)
    })
  })
  
  describe('Multiply', () => {
    it('Multiplies two numbers', () => {
      const result = multiply(4, 2)
      expect(result).toBe(8)
    })
  })
  
  describe('Divide', () => {
    it('Divides two numbers', () => {
      const result = divide(10, 2)
      expect(result).toBe(5)
    })
  })