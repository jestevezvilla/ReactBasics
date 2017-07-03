import immutableCounter from './immutable'
import deepFreeze from 'deep-freeze'

test('Immutable addCounter', () => {
    const listBefore = []
    const listAfter = [0]

    deepFreeze(listBefore)
    expect(immutableCounter.addCounter(listBefore)).toEqual(listAfter)
});

test('Immutable removeCounter', () => {
    const listBefore = [1, 2, 3]
    const listAfter = [1, 3]
    deepFreeze(listBefore)
    expect(immutableCounter.removeCounter(listBefore, 1)).toEqual(listAfter)
});

test('Immutable incrementCounter', () => {
    const listBefore = [1, 2, 3]
    const listAfter = [1, 3, 3]
    deepFreeze(listBefore)
    expect(immutableCounter.incrementCounter(listBefore, 1)).toEqual(listAfter)
});