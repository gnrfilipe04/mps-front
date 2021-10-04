import Modal from '@material-ui/core/Modal';
import { useEffect, useState } from 'react';
import { useConfigContext } from '../../../contexts/ConfigContext';
import { useSnackBar } from '../../../contexts/SnackBarContext';
import { api } from '../../../services/api';
import { hex2a } from '../../../utils/hex2a';
import { 
    Container, 
    TitleSession,
    ContainerContent,
    TitleContent, 
    ContentValue,
    ContainerButton,
    Button,
    Input,
    ContainerInput,
    ModalBody,
    TitleModal,
} from "./styles"

export const IdentificationConfig = () => {
    const { changeInfoPartner, infoPartner } = useConfigContext()
    const { changeIsSucess, changeOpenSnackbar } = useSnackBar()

    const [open, setOpen] = useState(false)
    const [hexInput, setHexInput] = useState('')

    async function handleInfoPrinter(hex: string){
        const ascData = hex2a(hex).split(',')
    
        const info = {
          revenda: ascData[0],
          cliente: ascData[1],
          id: ascData[2],
          key: hex
        }
        
        if(hexInput != ''){
            changeInfoPartner(info)

            await api.post('partner', info)

            setHexInput('')
            setOpen(false)

            changeIsSucess(true)
            changeOpenSnackbar(true)
        }else {
            changeIsSucess(false)
            changeOpenSnackbar(true)
        }
    }

    return(
        <Container>

            <TitleSession >Identificação</TitleSession>
    
                <ContainerContent>
                    <TitleContent>Revenda</TitleContent>
                    <ContentValue>{infoPartner.revenda}</ContentValue>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>Cliente</TitleContent>
                    <ContentValue>{infoPartner.cliente}</ContentValue>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>Id</TitleContent>
                    <ContentValue>{infoPartner.id}</ContentValue>
                </ContainerContent>

                <ContainerContent>
                    <TitleContent>Key</TitleContent>
                    <ContentValue>{infoPartner.key}</ContentValue>
                </ContainerContent>
                    
                <ContainerButton>
                    <Button 
                        onClick={() => setOpen(true)}
                    >Inserir chave</Button>
                </ContainerButton>
            
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        style={{
                            display: 'flex', 
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <ModalBody>
                            <ContainerInput>
                                <TitleModal>Chave identificadora</TitleModal>
                                <Input 
                                    placeholder="Inserir chave"
                                    value={hexInput}
                                    onChange={(e) => setHexInput(e.target.value)}
                                />
                                <Button 
                                onClick={() => handleInfoPrinter(hexInput)}
                                >Ok</Button>
                            </ContainerInput>
                        </ModalBody>       
                    </Modal>
            
        </Container>
    )
}