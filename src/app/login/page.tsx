"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setAuthToken } from "../api/httpClient";
import { useLogUser } from "../api/users/useLogUser";
import LoginHeader from "./components/LoginHeader";
import { StyledCard, StyledLogInContainer } from "./components/styled";
import { FormFields, loginSchema } from "./types/FormFields";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { mutateAsync: asyncLogUser } = useLogUser();

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await asyncLogUser(data);
      const token = response?.data.access_token;
      if (token) {
        setAuthToken(token);
        router.push("/books");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <StyledLogInContainer>
      <StyledCard>
        <LoginHeader />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          display={"flex"}
          flexDirection={"column"}
          gap={2}
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
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : "התחבר"}
          </Button>
        </Box>
      </StyledCard>
    </StyledLogInContainer>
  );
};

export default LogInPage;

// read more about form groups and form control
