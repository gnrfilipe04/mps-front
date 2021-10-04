import { useState } from "react"
import { CustomSwitch } from "../../CustomSwitch"
import { ListSelectInput } from "../../ListSelectInput"
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent,
    Input,
    ContainerButton,
    Button
} from "./styles"

export const SendDataConfig = () => {
    const [activeProxy, setActiveProxy] = useState(false)
    const [activeAuthenticate, setActiveAuthenticate] = useState(false)

    const listProtocol = [
        {
            value: 'HTTPS',
            label: 'HTTPS (443)'
        },
        {
            value: 'HTTP',
            label: 'HTTP (80)'
        },
        {
            value: 'UNC',
            label: 'Outro agente (UNC)' 
        }
    ]

    return (
        <Container>

            <TitleSession>Envio de dados</TitleSession>
    
                <ContainerContent>
                    <TitleContent>Servidor</TitleContent>
                    <Input placeholder='proxy.exemplo.com'/>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>Protocolo</TitleContent>
                    <ListSelectInput data={listProtocol} value={listProtocol[0].value}/>
                </ContainerContent>

                {activeProxy && (
                    <>
                        <ContainerContent>
                            <TitleContent>Servidor proxy</TitleContent>
                            <Input placeholder='proxy.exemplo.com'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Porta</TitleContent>
                            <Input placeholder='8080'/>
                        </ContainerContent>
                    </>
                )}

                {activeAuthenticate && (
                    <>  
                        <ContainerContent>
                            <TitleContent>Domínio (opcional)</TitleContent>
                            <Input placeholder='endereco.exemplo.com'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Usuário</TitleContent>
                            <Input placeholder='usuário'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Senha</TitleContent>
                            <Input placeholder='senha' type="password"/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Confirmar senha</TitleContent>
                            <Input placeholder='confime sua senha' type="password"/>
                        </ContainerContent>
                    </>
                )}

                <ContainerButton>
                    <Button>Testar conexão</Button>
                </ContainerButton>    
            
        </Container>
    )
}