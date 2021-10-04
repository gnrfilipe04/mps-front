import { useState } from "react"
import { CustomSwitch } from "../../CustomSwitch"
import { ListSelectInput } from "../../ListSelectInput"
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent,
    ContainerButton,
    Button 
} from "./styles"

export const AutomaticUpateConfig = () => {
    const [active, setActive] = useState(true)

    const listProtocol = [
        {
            value: '08:00',
            label: '08:00'
        },
        {
            value: '12:00',
            label: '12:00'
        }
    ]

    return(
        <Container>

            <TitleSession>Atualização automática</TitleSession>

                <ContainerContent>
                    <TitleContent>Horário da atualização</TitleContent>
                    <ListSelectInput data={listProtocol} value={listProtocol[0].value}/>
                </ContainerContent>
    
                <ContainerContent>
                    <TitleContent>Executar atualizações automáticas</TitleContent>
                    <CustomSwitch
                        checked={active}
                        onChange={() => setActive(!active)}
                        name="activeSwitch"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </ContainerContent>
                    
                <ContainerButton>
                    <Button>Atualizar agora</Button>
                </ContainerButton>      
            
        </Container>
    )
}