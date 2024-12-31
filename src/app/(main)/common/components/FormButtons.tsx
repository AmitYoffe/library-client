import { Box } from "@mui/material";
import { StyledCancelBtn, StyledSubmitBtn } from "./styled";

type FormButtonsProps = {
  handleClose: () => void;
};

export const FormButtons = ({ handleClose }: FormButtonsProps) => {
  return (
    <Box display="flex" gap={2}>
      <StyledCancelBtn onClick={handleClose} variant="contained">
        ביטול
      </StyledCancelBtn>
      <StyledSubmitBtn variant="contained" color="primary" type="submit">
        אישור
      </StyledSubmitBtn>
    </Box>
  );
};
