import { Box } from "@mui/material";
import { StyledCancelBtn, StyledSubmitBtn } from "./styled";

type FormButtonsProps = {
  handleClose: () => void;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const FormButtons = ({ handleClose, onSubmit }: FormButtonsProps) => {
  return (
    <Box display="flex" gap={2}>
      <StyledCancelBtn onClick={handleClose} variant="contained">
        ביטול
      </StyledCancelBtn>
      <StyledSubmitBtn
        onClick={onSubmit}
        variant="contained"
        color="primary"
        type="submit"
      >
        אישור
      </StyledSubmitBtn>
    </Box>
  );
};
