import { Box, Button } from "@mui/material";
import { StyledSubmitBtn } from "./styled";

type FormButtonsProps = {
  handleClose: () => void;
};

export const FormButtons = ({ handleClose }: FormButtonsProps) => {
  return (
    <Box display="flex" gap={2}>
      <Button onClick={handleClose} variant="outlined">
        ביטול
      </Button>
      <StyledSubmitBtn variant="contained" color="primary" type="submit">
        אישור
      </StyledSubmitBtn>
    </Box>
  );
};
