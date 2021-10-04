import { IdentificationConfig } from "../../ConfigItems/IdentificationConfig";
import { ServicesConfig } from "../../ConfigItems/ServicesConfig";
import { AutomaticUpateConfig } from "../../ConfigItems/AutomaticUpdateConfig";
import { ProxyConfig } from "../../ConfigItems/ProxyConfig";
import { SendDataConfig } from "../../ConfigItems/SendDataConfig";
import { DeleteDevice } from "../../ConfigItems/DeleteDevice";
import { AutomaticSearchNet } from "../../ConfigItems/AutomaticSearchNet";
import { Button, ContainerButton } from "./styles";
import { useConfigContext } from "../../../contexts/ConfigContext";

export const Configurations = () => {
    const { saveConfig } = useConfigContext()

    return(
        <>  
            <IdentificationConfig />
            <ServicesConfig />
            {/* <AutomaticUpateConfig />
            <ProxyConfig />
            <SendDataConfig />
            <DeleteDevice />
            <AutomaticSearchNet /> */}

            {/* <ContainerButton>
                <Button onClick={() => saveConfig()}>Salvar configurações</Button>
            </ContainerButton> */}
        </>
    )
}