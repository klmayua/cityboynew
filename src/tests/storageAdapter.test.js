import { read, write } from '../core/storageAdapter'

describe('storage adapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should write and read data', () => {
    write('test', [{ id: 1, name: 'test' }])
    const result = read('test')
    expect(result).toEqual([{ id: 1, name: 'test' }])
  })

  it('should return fallback for missing key', () => {
    const result = read('nonexistent', [{ id: 0 }])
    expect(result).toEqual([{ id: 0 }])
  })

  it('should handle invalid JSON', () => {
    localStorage.setItem('v1:invalid', 'not json')
    const result = read('invalid', [])
    expect(result).toEqual([])
  })
})