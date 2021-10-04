import { Switch, withStyles } from "@material-ui/core";

export const CustomSwitch = withStyles({
        switchBase: {
            color: '#c2c5c4',
            '&$checked': {
            color: '#48BB78',
            },
            '&$checked + $track': {
            backgroundColor: '#48BB78',
            },
            '& + $track': {
            backgroundColor: '#c2c5c4'
            }
        },
        checked: {},
        track: {},
        })(Switch);
