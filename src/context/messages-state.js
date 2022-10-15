import { useReducer } from "react"
import messagesReducer from './messages-reducer'
import MessagesContext from "./messages-context"

const userState = (props) => {
    const initialState = {
        messages: [],
    }

    const [state, dispatch] = useReducer(messagesReducer, initialState)

    const addMessages = () => {

    }

    const getMessages = () => {
        
    }

    return (
        <MessagesContext.Provider value={{messages: state.messages}}>
            {props.children}
        </MessagesContext.Provider>
    )


}

export default userState