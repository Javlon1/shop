import { createContext, useState } from 'react'
import { HeaderData } from '../Data/Data'

const Context = createContext()

function Provider({children}) {

    const [menu, setMenu] = useState(window.sessionStorage.getItem('menu') ? window.sessionStorage.getItem('menu') : HeaderData[0].id)
    const [lan, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : "ru")
    const [mony, setMony] = useState(window.localStorage.getItem('mony') ? window.localStorage.getItem('mony') : "USD")

    return (
        <Context.Provider value={{lan, setLan, menu, setMenu, mony, setMony}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider} 