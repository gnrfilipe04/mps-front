import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { api } from "../services/api";
import { useAsideBar } from "./AsideBarContext";
import { useSnackBar } from "./SnackBarContext";

interface PrinterProps {
    revenda: string;
    cliente: string;
    id: string;
    key: string;
}

interface RemoveDeviceUnreadingProps {
    isActive: boolean;
    removeAt: string;
}

export interface IRangeIpsDTO {
    initialIp: string;
    finalIp: string;
}

interface RangeIpsProps {
    scheduled: {
        isActive: boolean;
        fetchAt: string;
    };
    recurrent: {
        isActive: boolean;
        fetchAt: string;
    };
    rangeIps: IRangeIpsDTO[]
}

interface ConfigProviderProps {
    children: ReactNode
}

interface ConfigContextProps {
    networkSearch: RangeIpsProps;
    isAddIp: boolean;
    activeRemoveUnreadingDevices: boolean;
    activeSearchScheduled: boolean;
    activeSearchRecurrent: boolean;
    removeUnreadingDevices: RemoveDeviceUnreadingProps;
    infoPartner: PrinterProps;
    changeInfoPartner: (value: PrinterProps) => void;
    changeRemoveAtValue: (value: string) => void;
    changeActiveRemoveUnreading: (value: boolean) => void;
    changeFetchAtValue: (value: string) => void;
    changeIsActiveSearchScheduled: (value: boolean) => void;
    changeIsActiveSearchRecurrent: (value: boolean) => void;
    changeIsAdd: (value: boolean) => void;
    saveConfig: () => void;
}

const ConfigContext = createContext({} as ConfigContextProps)

export function ConfigProvider({children}: ConfigProviderProps){
    const { menuContent } = useAsideBar()
    const { changeOpenSnackbar } = useSnackBar()

    const [infoPartner, setInfoPartner] = useState({} as PrinterProps)

    const [isAddIp, setIsAddIp] = useState(false)
    const [networkSearch, setNetworkSearch] = useState({} as RangeIpsProps)
    const [removeUnreadingDevices, setRemoveUnreadingDevices] = useState({} as RemoveDeviceUnreadingProps)

    const [activeRemoveUnreadingDevices, setActiveRemoveUnreadDevices] = useState(false)

    const [activeSearchScheduled, setActiveSearchScheduled] = useState(false)
    const [activeSearchRecurrent, setActiveSearchRecurrent] = useState(false)

    const [fetchAtValue, setFetchAtValue] = useState('')


   //<!--Setando valor das variáveis -->

    function changeIsAdd(value: boolean){
        setIsAddIp(value)
    }

    function changeInfoPartner(value: PrinterProps){
        setInfoPartner(value)
    }

    function changeActiveRemoveUnreading(value: boolean){
        setActiveRemoveUnreadDevices(value)
    }

    function changeFetchAtValue(value: string){
        setFetchAtValue(value)
    }

    function changeRemoveAtValue(value: string){
        setRemoveUnreadingDevices({
            ...removeUnreadingDevices,
            removeAt: value
        })
    }

    async function changeIsActiveSearchScheduled(value: boolean){
        setActiveSearchRecurrent(false)
        setActiveSearchScheduled(value)
    }

    async function changeIsActiveSearchRecurrent(value: boolean){
            
        setActiveSearchScheduled(false)
        setActiveSearchRecurrent(value)
   
    }


   //<!--Chamadas GET de API -->

    async function getRemoveUnreadingDevice(){
        const response = await api.get('removeunreadingdevices')
        const removeDevices: RemoveDeviceUnreadingProps = await response.data

        setRemoveUnreadingDevices(removeDevices)
        setActiveRemoveUnreadDevices(removeDevices.isActive)
    }

    async function getSearchNetwork(){
        const response = await api.get('searchautomaticnetwork')
        setNetworkSearch(response.data)
        
    }
    
    async function setActiveSearchNetwork(){
        const response = await api.get('searchautomaticnetwork')
        const networkData: RangeIpsProps = await response.data

        setActiveSearchScheduled(networkData.scheduled.isActive)
        setActiveSearchRecurrent(networkData.recurrent.isActive)
    }

    async function getPartnerInfo(){
        const response = await api.get('partner')
        setInfoPartner(response.data)
    }

   //<!--Chamadas POST de API -->

    async function handleRemoveUnreadingDevices(){
        await api.post('removeunreadingdevices', {
            isActive: activeRemoveUnreadingDevices,
            removeAt: removeUnreadingDevices.removeAt
        })
        
    }

    async function handleSearchAutomaticNetwork(){
        await api.post('searchautomaticnetwork',{
            ...networkSearch,
            scheduled: {
                fetchAt: activeSearchScheduled ? fetchAtValue : networkSearch.scheduled.fetchAt,
                isActive: activeSearchScheduled
            },
            recurrent: {
                fetchAt: activeSearchRecurrent ? fetchAtValue : networkSearch.recurrent.fetchAt,
                isActive: activeSearchRecurrent
            },
        })
    }

   //<!--Salvando configurações globais -->

    async function saveConfig(){
        //handleRemoveUnreadingDevices()
        //handleSearchAutomaticNetwork()

        changeOpenSnackbar(true)
    }

   //<!--Chamando funções assim que a tela é montada -->

    useEffect(() => {
        //getRemoveUnreadingDevice()
        getPartnerInfo()
    }, [menuContent])

  /*   useEffect(() => {
        getSearchNetwork()
    }, [isAddIp, menuContent])


    useEffect(() => {
        setActiveSearchNetwork()
    }, []) */

    return (
        <ConfigContext.Provider value={{
            networkSearch,
            isAddIp,
            activeRemoveUnreadingDevices,
            activeSearchScheduled,
            activeSearchRecurrent,
            removeUnreadingDevices,
            infoPartner,
            changeInfoPartner,
            changeRemoveAtValue,
            changeActiveRemoveUnreading,
            changeFetchAtValue,
            changeIsActiveSearchScheduled,
            changeIsActiveSearchRecurrent,
            changeIsAdd,
            saveConfig
        }}>
            {children}
        </ConfigContext.Provider>
    )
}

export const useConfigContext = () => useContext(ConfigContext)
