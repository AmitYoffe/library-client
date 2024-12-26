import { StyledTextField } from "../../components/dialogs/addItem/styled";

export const FormFields = () => {
  return (
    <>
      <StyledTextField
        autoFocus
        required
        margin="dense"
        id="title"
        name="title"
        label="כותרת"
        type="text"
        fullWidth
      />
      <StyledTextField
        required
        margin="dense"
        id="writerId"
        name="writerId"
        label="שם הסופר"
        type="text"
        fullWidth
      />
      <StyledTextField
        required
        margin="dense"
        id="count"
        name="count"
        label="כמות המלאי"
        type="number"
        placeholder="000"
        fullWidth
      />
    </>
  );
};
