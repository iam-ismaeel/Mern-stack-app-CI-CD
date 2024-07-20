import { createContext } from "react"
 export const userContext = createContext("");

 export default function App() {
    return (
        <userContext.Provider value = "Reed">
          <User />
        </userContext.Provider>
    )
 }

function User() {

    const value = useContext(userContext)
    return  <h1>{value}</h1>
    
}