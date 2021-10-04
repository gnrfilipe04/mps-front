import { useEffect } from "react"
import { useState } from "react"
import { useSnackBar } from "../../../contexts/SnackBarContext"
import { api } from "../../../services/api"
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent,
    ContentValue,
    ContainerButton,
    Button 
} from "./styles"

interface OnServicesDTO {
    name: string;
    isActive: boolean;
}

interface OnServicesProps {
    monitor: OnServicesDTO;
    sender: OnServicesDTO;
    search: OnServicesDTO;
    update: OnServicesDTO;
}

export const ServicesConfig = () => {
    const { changeIsSucess, changeOpenSnackbar } = useSnackBar()

    const [onServices, setOnServices] = useState({} as OnServicesProps)
    const [isActiveServices, setIsActiveServices] = useState(false)
    const [serviceStatus, setServiceStatus] = useState('')

 /*    async function getOnServicesData(){
        const response = await api.get('onservices')
        setOnServices(response.data)
        setIsActiveServices(false)
    }

    async function activeServices(){
        try{
            await api.post('onservices', {
                monitor: {
                    name: onServices.monitor.name,
                    isActive: true,
                },
                sender: {
                    name: onServices.sender.name,
                    isActive: true,
                },
                search: {
                    name: onServices.search.name,
                    isActive: true,
                },
                update: {
                    name: onServices.update.name,
                    isActive: true,
                },
            })

            setIsActiveServices(true)
            changeIsSucess(true)
            changeOpenSnackbar(true)
        }catch(e){
            console.log(e)
            setIsActiveServices(false)
            changeIsSucess(false)
            changeOpenSnackbar(true)
        }
        
    } */

    async function getPrinters(){
        try{
            const response = await api.get('printers')
            console.log(response.data)
            setServiceStatus('Rodando')

        }catch(err){
            console.log(err)
            setServiceStatus('Parado')
        }
        
    }

    useEffect(() => {
        getPrinters()
    }, [])

    return(
        <Container>

            <TitleSession >Status do serviço</TitleSession>

                <ContainerContent>
                    <TitleContent>Agente DocMPS</TitleContent>
                    <ContentValue>{serviceStatus}</ContentValue>
                </ContainerContent>
{/* 
                <ContainerContent>
                    <TitleContent>{onServices?.sender?.name}</TitleContent>
                    <ContentValue>{onServices?.sender?.isActive ? 'Rodando' : 'Parado'}</ContentValue>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>{onServices?.search?.name}</TitleContent>
                    <ContentValue>{onServices?.search?.isActive ? 'Rodando' : 'Parado'}</ContentValue>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>{onServices?.update?.name}</TitleContent>
                    <ContentValue>{onServices?.update?.isActive ? 'Rodando' : 'Parado'}</ContentValue>
                </ContainerContent> */}

                {/* <ContainerButton>
                    <Button onClick={() => activeServices()}>Ativar serviço</Button>
                </ContainerButton>   */}    
            
        </Container>
    )
}