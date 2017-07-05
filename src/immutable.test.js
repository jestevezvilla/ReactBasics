import {immutableCounter, immutableObject} from './immutable'
import deepFreeze from 'deep-freeze'

test('Immutable addCounter', () => {
    const listBefore = []
    const listAfter = [0]
    const immutable = immutableCounter(listBefore)

    deepFreeze(listBefore)

    expect(immutable.addCounter()).toEqual(listAfter)
});

test('Immutable removeCounter', () => {
    const listBefore = [1, 2, 3]
    const listAfter = [1, 3]
    const immutable = immutableCounter(listBefore)

    deepFreeze(listBefore)
    expect(immutable.removeCounter(1)).toEqual(listAfter)
});

test('Immutable incrementCounter', () => {
    const listBefore = [1, 2, 3]
    const listAfter = [1, 3, 3]
    const immutable = immutableCounter(listBefore)
    
    deepFreeze(listBefore)
    expect(immutable.incrementCounter(1)).toEqual(listAfter)
});

test('Immutable object toggleComplete', () => {
    const oBefore = {id: 1, text: 'Primero', complete: false}
    const oAfter = {id: 1, text: 'Primero', complete: true}
    const immutable = immutableObject(oBefore)
    deepFreeze(oBefore)
    expect(immutable.toggleComplete()).toEqual(oAfter)
});

test('Immutable array object toggleCompleteById', () => {
    const oBefore = [{id: 1, text: 'Primero', complete: false}, {id: 2, text: 'Segundo', complete: false}]
    const oAfter = [{id: 1, text: 'Primero', complete: false}, {id: 2, text: 'Segundo', complete: true}]
    const immutable = immutableObject(oBefore)
    deepFreeze(oBefore)
    expect(immutable.toggleCompleteById(2)).toEqual(oAfter)
});