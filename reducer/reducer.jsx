// const a = [
//   {
//     id: Date.now(),
//     name: 'andy',
//     lastname: 'ruz',
//     age: '19',
//     area: 'Fronted',
//     exp: '1 year',
//     favL: 'JavaScript'
//   },
//   {
//     id: `${Date.now() + 100}`,
//     name: 'andy2',
//     lastname: 'ruz',
//     age: '19',
//     area: 'Fronted',
//     exp: '1 year',
//     favL: 'JavaScript'
//   }
// ]

export const reducerInitialState = JSON.parse(window.localStorage.getItem('devs')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('devs', JSON.stringify(state))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_DEV': {
      const newState = [
        ...state,
        {
          id: Date.now(),
          ...actionPayload
        }
      ]

      updateLocalStorage(newState)

      return newState
    }

    case 'UPDATE_DEV': {
      const { id } = actionPayload.dev
      const newState = state.map(dev => {
        if (dev.id === id) {
          if (actionPayload.elemt.target.name === 'name') {
            dev.name = actionPayload.elemt.value
          }
          if (actionPayload.elemt.target.name === 'lastname') {
            dev.lastname = actionPayload.elemt.value
          }
          if (actionPayload.elemt.target.name === 'age') {
            dev.age = actionPayload.elemt.value
          }
          if (actionPayload.elemt.target.name === 'area') {
            dev.area = actionPayload.elemt.value
          }
          if (actionPayload.elemt.target.name === 'exp') {
            dev.exp = actionPayload.elemt.value
          }
          if (actionPayload.elemt.target.name === 'favL') {
            dev.favL = actionPayload.elemt.value
          }
        }
        return dev
      })

      updateLocalStorage(newState)
      return newState
    }
  }
}