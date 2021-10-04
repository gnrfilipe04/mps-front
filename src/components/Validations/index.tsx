import { useEffect, useState } from "react";
import { useSnackBar } from "../../contexts/SnackBarContext";
import { api } from "../../services/api";
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent,
    ContentValue,
    ContainerButton,
    Button,
    ContainerInput,
    Input 
} from "./styles";

interface PrinterDataProps {
    inventory: {
        manufacturer: string,
        serialNumber: string,
        modal: string,
        firmwareVersion: string,
        local: string,
        operatingTime: string,
        contact: string,
        status: string,
        hostname: string,
        color: boolean
    }
}

export function Validations(){
    const { changeOpenSnackbar, changeIsSucess } = useSnackBar()
    const [inputIp, setInputIp] = useState('')
    const [printerData, setPrinterData] = useState({} as PrinterDataProps)

    async function searchIpPrinter(){
        if(inputIp != ''){

            try {
                const response = await api.get(`searchip?printer.ip=${inputIp}`)
    
                setPrinterData(response.data[0].printer)
    
                changeIsSucess(true)
                changeOpenSnackbar(true)

            }catch(e){

                console.log(e)
                changeIsSucess(false)
                changeOpenSnackbar(true)
                
            }
        
        }else {
            changeIsSucess(false)
            changeOpenSnackbar(true)
        }
    }

    useEffect(() => {
        console.log(printerData)

    }, [printerData])

    return(
        <Container>

            <TitleSession >Validar IP</TitleSession>

            <ContainerContent>
                <TitleContent>Endereço de IP</TitleContent>
                <Input
                onChange={(e) => setInputIp(e.target.value)}
                value={inputIp} 
                placeholder='Digite um Ip válido'
                />
            </ContainerContent>

            <ContainerButton>
                <Button onClick={searchIpPrinter}>Buscar</Button>
            </ContainerButton>

            <TitleSession>Inventário</TitleSession>

            <ContainerContent>
                <TitleContent>Fabricante</TitleContent>
                <ContentValue>{printerData?.inventory?.manufacturer}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Número de série</TitleContent>
                <ContentValue>{printerData?.inventory?.serialNumber}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Modelo</TitleContent>
                <ContentValue>{printerData?.inventory?.modal}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Versão do firmware</TitleContent>
                <ContentValue>{printerData?.inventory?.firmwareVersion}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Local</TitleContent>
                <ContentValue>{printerData?.inventory?.local}</ContentValue>
            </ContainerContent>


            <ContainerContent>
                <TitleContent>Tempo de operação</TitleContent>
                <ContentValue>{printerData?.inventory?.operatingTime}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Contato</TitleContent>
                <ContentValue>{printerData?.inventory?.contact}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Status</TitleContent>
                <ContentValue>{printerData?.inventory?.status}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Hostname</TitleContent>
                <ContentValue>{printerData?.inventory?.hostname}</ContentValue>
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Cor</TitleContent>
                <ContentValue>{printerData?.inventory?.color}</ContentValue>
            </ContainerContent>

            
        </Container>
    )
} 