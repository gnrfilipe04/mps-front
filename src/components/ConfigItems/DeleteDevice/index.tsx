import { useConfigContext } from "../../../contexts/ConfigContext"
import { CustomSwitch } from "../../CustomSwitch"
import { ListSelectInput } from "../../ListSelectInput"
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent
} from "./styles"

export const DeleteDevice = () => {
    const { 
        removeUnreadingDevices, 
        activeRemoveUnreadingDevices,
        changeActiveRemoveUnreading,
    } = useConfigContext()

    const days = [
        {
            value: '7',
            label: '7 dias'
        },
        {
            value: '8',
            label: '8 dias'
        }
    ]

    return (
        <Container>
            <TitleSession>Remover dispositivos sem leitura</TitleSession>
    
            <ContainerContent>
                <TitleContent>Ativar exclusão</TitleContent>
                <CustomSwitch
                    checked={activeRemoveUnreadingDevices}
                    onChange={() => changeActiveRemoveUnreading(!activeRemoveUnreadingDevices)}
                    name="switchDelete"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </ContainerContent>

            {activeRemoveUnreadingDevices && (
                <ContainerContent>
                    <TitleContent>Excluir em</TitleContent>
                    <ListSelectInput 
                        data={days} 
                        value={removeUnreadingDevices.removeAt}
                        title='RUD'
                    />
                </ContainerContent>
            )}

        </Container>

    )
}