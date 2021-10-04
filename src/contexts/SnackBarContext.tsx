import { Color } from "@material-ui/lab/Alert";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface SnackBarProviderProps {
    children: ReactNode
}

interface SnackBarContextProps {
    open: boolean;
    isSuccess: boolean;
    changeOpenSnackbar: (value: boolean) => void;
    changeIsSucess: (value: boolean) => void;
}

const SnackBarContext = createContext({} as SnackBarContextProps)

export function SnackBarProvider({children}: SnackBarProviderProps){
    const [open, setOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState(true)

    function changeOpenSnackbar(value: boolean){
        setOpen(value)
    }

    function changeIsSucess(value: boolean){
        setIsSuccess(value)
    }

    return (
        <SnackBarContext.Provider value={{
            open,
            isSuccess,
            changeOpenSnackbar,
            changeIsSucess
        }}>
            {children}
        </SnackBarContext.Provider>
    )
}

export const useSnackBar = () => useContext(SnackBarContext)