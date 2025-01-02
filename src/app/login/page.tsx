"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { decode, JwtPayload } from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setAuthToken } from "../api/httpClient";
import { useLogUser } from "../api/users/userMethods";
import { LoginHeader } from "./components/LoginHeader";
import { LoginBoxContainer, StyledCard, StyledLogInContainer } from "./styled";
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
      const loggedUser = decode(token) as JwtPayload;

      if (token) {
        setAuthToken(token);
        if (loggedUser?.isAdmin) {
          router.push("/books");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <StyledLogInContainer>
      <StyledCard>
        <LoginHeader />
        <LoginBoxContainer component="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>שם משתמש</FormLabel>
            <TextField
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
              id="username"
              type="username"
              placeholder="השם המגניב והאישי שלי"
              required
              variant="outlined"
            />
            <FormLabel>סיסמא</FormLabel>
            <TextField
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              id="password"
              type="password"
              placeholder="••••••"
              required
              variant="outlined"
            />
          </FormControl>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : "התחבר"}
          </Button>
        </LoginBoxContainer>
      </StyledCard>
    </StyledLogInContainer>
  );
};

export default LogInPage;
