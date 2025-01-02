import {
  StyledCancelBtn,
  StyledFormButtonBox,
  StyledSubmitBtn,
} from "./styled";

type FormButtonsProps = {
  handleClose: () => void;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const FormButtons = ({ handleClose, onSubmit }: FormButtonsProps) => {
  return (
    <StyledFormButtonBox>
      <StyledCancelBtn onClick={handleClose} variant="contained">
        ביטול
      </StyledCancelBtn>
      <StyledSubmitBtn onClick={onSubmit} variant="contained" type="submit">
        אישור
      </StyledSubmitBtn>
    </StyledFormButtonBox>
  );
};
