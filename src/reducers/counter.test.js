import counter from './counter';

    test('Increment', () =>{
        const initialState = {
            counter: 0,
            clicks: 0
        };
        expect(counter(initialState, {type: 'INCREMENT'}).counter).toEqual(1);
    });

    test('Increment', () =>{
        const initialState = {
            counter: 1,
            clicks: 0
        };
        expect(counter(initialState, {type: 'INCREMENT'}).counter).toEqual(2);
    });

    test('Decrement', () =>{
        const initialState = {
            counter: 4,
            clicks: 0
        };
        expect(counter(initialState, {type: 'DECREMENT'}).counter).toEqual(3);
    });

    test('Undefined', () =>{
        expect(counter(undefined, {}).counter).toEqual(0);
    });

    test('Action not found', () =>{
        const initialState = {
            counter: 0,
            clicks: 0
        };
        expect(counter(initialState, {type: 'WADUS'}).counter).toEqual(0);
    });

    test('Clicks count', () =>{
        const initialState = {
            counter: 0,
            clicks: 0
        };
        expect(counter(initialState, {type: 'INCREMENT'}).clicks).toEqual(1);
    });
    
