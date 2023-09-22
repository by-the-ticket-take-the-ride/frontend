export function reducer(state, action) {
  switch (action.type) {
    case 'n': {
      return {
        ...state,
        age: state.age + 1
      };
    }
    case 'change_of_payment': {
      return {
        ...state,
        isActive: true
      };
    }
    default:

  }
}