import todos from './todo';
import deepFreeze from 'deep-freeze';

    test('Add todo', () =>{
        const stateBefore = [];
        const stateAfter = [{
            id: 0,
            text: 'Comprar queso',
            completed: false
        }];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Comprar queso'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    test('Toggle todo', () =>{
        const stateBefore = [{
            id: 0,
            text: 'Comprar queso',
            completed: false
        },
        {
            id: 1,
            text: 'Comprar tarta',
            completed: false
        }];
        const stateAfter = [{
            id: 0,
            text: 'Comprar queso',
            completed: false
        },
        {
            id: 1,
            text: 'Comprar tarta',
            completed: true
        }];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    test('wrong type', () =>{
        const stateBefore = [];
        const stateAfter = [{
            id: 0,
            text: 'Comprar queso',
            completed: false
        }];
        const action = {
            type: 'ADD_TODOOOOO',
            id: 0,
            text: 'Comprar queso'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(todos(stateBefore, action)).toEqual(stateBefore);
    });

