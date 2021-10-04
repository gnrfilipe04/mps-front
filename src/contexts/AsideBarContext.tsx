import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

interface AsideBarProviderProps {
    children: ReactNode
}

interface AsideBarContextProps {
    menuContent: string;
    changeMenuContent: (value: string) => void;
}

const AsideBarContext = createContext({} as AsideBarContextProps)

export function AsideBarProvider({children}: AsideBarProviderProps){
    const [menuContent, setMenuContent] = useState('monitorados')

    function changeMenuContent(value: string){
        setMenuContent(value)
    }

    return (
        <AsideBarContext.Provider value={{
            menuContent,
            changeMenuContent
        }}>
            {children}
        </AsideBarContext.Provider>
    )
}

export const useAsideBar = () => useContext(AsideBarContext)