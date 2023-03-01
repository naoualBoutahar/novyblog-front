import PopUp from "../PopUp";
import { TextField } from "@mui/material";

export default function addCommentPopUp() {
    return (
        <>
            <PopUp>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Add comment..."
                    multiline
                    fullWidth
                />
            </PopUp>

        </>
    )

}