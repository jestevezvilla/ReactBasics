export const immutableCounter = (arr) => {
  
  const list = arr;

  return {
    addCounter: () => {
      return [...list, 0]
    },

    removeCounter: (index) => {
      return [...list.slice(0, index),
              ...list.slice(index + 1)
      ]
    },

    incrementCounter: (index) => {
      return [...list.slice(0, index),
              list[index] + 1,
              ...list.slice(index + 1)
      ]
    }

  }

}

export const immutableObject = (obj) => {
  
  const ob = obj

  return {
    
    toggleIdComplete: (id) => {
      return obj.map((element) => {
        return (element.id === id) ?
            immutableObject(element).toggleComplete()
            :
            element
      })
    },

    toggleComplete: () => {
      return {...ob, complete: !ob.complete}
      //return Object.assign({}, ob, {complete: !ob.complete})
    }

  }
}

