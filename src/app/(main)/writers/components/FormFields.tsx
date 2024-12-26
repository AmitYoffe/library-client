import { StyledTextField } from "../../components/dialogs/addItem/styled";

export const FormFields = () => {
  return (
    <>
      <StyledTextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="שם פרטי"
        type="text"
        fullWidth
      />
      <StyledTextField
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="שם משפחה"
        type="text"
        fullWidth
      />
    </>
  );
};
