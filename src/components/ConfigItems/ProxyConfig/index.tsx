import { useState } from "react"
import { CustomSwitch } from "../../CustomSwitch"
import { 
    Container,
    TitleSession,
    ContainerContent,
    TitleContent,
    ContentValue,
    ContainerButton,
    Button,
    ProxyInput
} from "./styles"

export const ProxyConfig = () => {
    const [activeProxy, setActiveProxy] = useState(false)
    const [activeAuthenticate, setActiveAuthenticate] = useState(false)

    return (
        <Container>

            <TitleSession>Proxy</TitleSession>
    
                <ContainerContent>
                    <TitleContent>Usar proxy</TitleContent>
                    <CustomSwitch
                        checked={activeProxy}
                        onChange={() => setActiveProxy(!activeProxy)}
                        name="switchProxy"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </ContainerContent>

                {activeProxy && (
                    <>
                        <ContainerContent>
                            <TitleContent>Servidor proxy</TitleContent>
                            <ProxyInput placeholder='proxy.exemplo.com'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Porta</TitleContent>
                            <ProxyInput placeholder='8080'/>
                        </ContainerContent>

                        <ContainerContent>
                    <TitleContent>Autenticação requerida</TitleContent>
                    <CustomSwitch
                        checked={activeAuthenticate}
                        onChange={() => setActiveAuthenticate(!activeAuthenticate)}
                        name="switchAuthenticate"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </ContainerContent>

                {activeAuthenticate && (
                    <>  
                        <ContainerContent>
                            <TitleContent>Domínio (opcional)</TitleContent>
                            <ProxyInput placeholder='endereco.exemplo.com'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Usuário</TitleContent>
                            <ProxyInput placeholder='usuário'/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Senha</TitleContent>
                            <ProxyInput placeholder='senha' type="password"/>
                        </ContainerContent>

                        <ContainerContent>
                            <TitleContent>Confirmar senha</TitleContent>
                            <ProxyInput placeholder='confime sua senha' type="password"/>
                        </ContainerContent>
                    </>
                )}
                    </>
                )}


                
            
        </Container>
    )
}