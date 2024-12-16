"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { FormFields, loginSchema } from "./types/FormFields";
import { LogInContainer, StyledCard } from "./styled";
import { logUser } from "../api/logUser";

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      await logUser(data);
      console.log("Data: ", data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <LogInContainer>
      <StyledCard>
        <Typography variant="h4">התחברות</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="username">שם משתמש</FormLabel>
            <TextField
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
              id="username"
              type="username"
              placeholder="השם המגניב והאישי שלי"
              autoComplete="username"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">סיסמא</FormLabel>
            <TextField
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              id="password"
              type="password"
              placeholder="••••••"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress /> : "התחבר"}
          </Button>
        </Box>
      </StyledCard>
    </LogInContainer>
  );
}
