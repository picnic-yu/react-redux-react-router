//action
export const changeTextAction = {
    type:'CHANGE_TEXT',
    text:'hello'
}
export const buttonClickAction = {
    type:'BUTTON_CLICK',
    text:'hello'
}



//reducer
const initialState = {
    text: 'Hello'
}
export default function reducer (state = initialState, action)  {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text=='Hello' ? 'Login':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello Login'
            }
        default:
            return initialState;
    }
}