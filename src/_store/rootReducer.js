const initialState = {
    modal: false,
    text: 'text'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_TOGGLE':
            return { ...state, modal: !state.modal }
        default:
            return state
    }
}