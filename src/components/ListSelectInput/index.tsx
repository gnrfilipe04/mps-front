import { MenuItem, TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import { ThemeProvider as ReactTheme} from '@material-ui/core/styles';
import { reactTheme } from "../../styles/reactTheme";
import { useConfigContext } from "../../contexts/ConfigContext";

interface IListSelectInputDTO {
    value: string;
    label: string;
}

interface IListSelectInputProps {
    data: IListSelectInputDTO[];
    value: string;
    title?: string;
}

export const ListSelectInput = ({data, value, title}: IListSelectInputProps) => {
    const { changeFetchAtValue, changeRemoveAtValue } = useConfigContext()
    const [initialData, setInitialData] = useState(value)

    function checkTitle(){
        switch (title) {
            case 'RUD':
                changeRemoveAtValue(initialData) 
                break;

            case 'SAN':
                changeFetchAtValue(initialData)
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {
        checkTitle()
    }, [initialData])

    return (
        <ReactTheme theme={reactTheme}>
            <TextField
            id="standard-select-currency"
            select
            value={initialData}
            onChange={(e) => setInitialData(e.target.value)}
            >
            {data?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </ReactTheme>
    )
}