import { useState } from "react"
import { IRangeIpsDTO, useConfigContext } from "../../../contexts/ConfigContext"
import { useSnackBar } from "../../../contexts/SnackBarContext"
import { api } from "../../../services/api"
import { CustomSwitch } from "../../CustomSwitch"
import { ListSelectInput } from "../../ListSelectInput"
import { 
    Container,
    TitleSession, 
    ContainerContent,
    TitleContent,
    Input,
    ContainerButton,
    Button,
    TitleNetworkIp,
    ErrorMessage,
    ContainerErrorMessage,
    ContainerRange,
    RangeTitle,
    DeleteIcon,
    ArrowRightIcon,
} from "./styles"

export const AutomaticSearchNet = () => {
    const { 
        networkSearch, 
        changeIsActiveSearchScheduled,
        changeIsActiveSearchRecurrent,
        activeSearchScheduled,
        activeSearchRecurrent,
        isAddIp, 
        changeIsAdd,
    } = useConfigContext()

    const { changeOpenSnackbar } = useSnackBar()

    const [inputInitialIp, setInputInitialIp] = useState('')
    const [inputFinalIp, setInputFinalIp] = useState('')

    const [isError, setIsError] = useState(false)

    const hours = [
        {
            value: '14:00',
            label: '14:00'
        },
        {
            value: '15:00',
            label: '15:00'
        }
    ]

    const intervals = [
        {
            value: '1',
            label: '1 horas'
        },
        {
            value: '2',
            label: '2 horas'
        },
        {
            value: '3',
            label: '3 horas'
        }
    ]

    async function addNetworkIps(){
       if(inputInitialIp === '' || inputFinalIp === ''){
        return setIsError(true)
        
       }else {
            setIsError(false)   
       }

       await api.post('searchautomaticnetwork', {
            ...networkSearch,
            rangeIps: [
                ...networkSearch.rangeIps,
                {
                    initialIp: inputInitialIp,
                    finalIp: inputFinalIp
                }
            ]
       })

       setInputInitialIp('')
       setInputFinalIp('')

       changeIsAdd(!isAddIp)

       changeOpenSnackbar(true)

    }

    async function removeNetworkIps(itemToRemove: IRangeIpsDTO){

        const newRangeIps = networkSearch.rangeIps.filter((item) => item != itemToRemove)

        await api.post(`searchautomaticnetwork`, {
            ...networkSearch,
            rangeIps: newRangeIps
        })

        changeIsAdd(!isAddIp)

        changeOpenSnackbar(true)
        
    }

    return (
        <Container> 

            <TitleSession>Busca automática na rede</TitleSession>
    
            <ContainerContent>
                <TitleContent>Realizar busca agendada</TitleContent>
                <CustomSwitch
                    checked={activeSearchScheduled}
                    onChange={() => changeIsActiveSearchScheduled(!activeSearchScheduled)}
                    name="switchSearch"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </ContainerContent>

            <ContainerContent>
                <TitleContent>Realizar busca recorrente</TitleContent>
                <CustomSwitch
                    checked={activeSearchRecurrent}
                    onChange={() => changeIsActiveSearchRecurrent(!activeSearchRecurrent)}
                    name="switchSearch"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </ContainerContent>

            {activeSearchScheduled || activeSearchRecurrent ? (
                <>
                    <ContainerContent>
                        {activeSearchScheduled && (
                            <>
                                <TitleContent>Buscar às</TitleContent>
                                <ListSelectInput 
                                    data={hours} 
                                    value={networkSearch?.scheduled?.fetchAt}
                                    title='SAN'
                                />
                            </>
                        )}

                        {activeSearchRecurrent && (
                            <>
                                <TitleContent>Buscar no intervalo de</TitleContent>
                                <ListSelectInput 
                                    data={intervals} 
                                    value={networkSearch?.recurrent?.fetchAt}
                                    title='SAN'
                                />
                            </>
                        )}
                        
                    </ContainerContent>

                    <ContainerContent>
                        <TitleContent>Ip inicial</TitleContent>

                        <Input
                            mask='99.9.9.9'
                            placeholder='10.0.0.1'
                            value={inputInitialIp}
                            onChange={(e) => setInputInitialIp(e.target.value)}
                        />
    
                    </ContainerContent>

                    <ContainerContent>
                        <TitleContent>Ip final</TitleContent>
                        <Input
                            mask='999'
                            placeholder='251'
                            value={inputFinalIp}
                            onChange={(e) => setInputFinalIp(e.target.value)}
                        />
                    </ContainerContent>
                    {isError &&  (
                        <ContainerErrorMessage>
                            <ErrorMessage>Campos obrigatórios vazios</ErrorMessage>
                        </ContainerErrorMessage>
                    )}
                    <ContainerButton>
                        <Button onClick={() => addNetworkIps()}>Adicionar</Button>
                    </ContainerButton>

                    <ContainerContent>
                        <TitleNetworkIp>Range</TitleNetworkIp>
                    </ContainerContent>

                    {networkSearch.rangeIps.length <= 0 && <RangeTitle>Sem range cadastrados</RangeTitle>}    
                    {networkSearch.rangeIps?.map((item) => (
                        <>
                            <ContainerContent>
                                <ContainerRange>
                                    <RangeTitle>{item.initialIp}</RangeTitle>
                                    <ArrowRightIcon />
                                    <RangeTitle>{item.finalIp}</RangeTitle>
                                </ContainerRange>
                                    <DeleteIcon 
                                        onClick={() => removeNetworkIps(item)}
                                    />
                            </ContainerContent>
                        </>
                    ))}

                    <ContainerButton>
                        <Button>Buscar agora</Button>
                    </ContainerButton>       
                </>
            ) : ''}

        </Container>
    )
}