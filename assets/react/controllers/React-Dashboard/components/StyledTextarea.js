import {styled, TextareaAutosize} from "@mui/material";

export const StyledTextarea = styled(TextareaAutosize)(
    ({theme}) => `
        min-width: 100%;
        color: ${theme.palette.mode === "dark" ? "#fff" : "#000"};
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        background: transparent;
        &:hover {
            border-color: #fff;
        }
        &:focus-visible {
          outline: 0;
        }
        &:focus {
            border: none;        
        }
      `,
);
