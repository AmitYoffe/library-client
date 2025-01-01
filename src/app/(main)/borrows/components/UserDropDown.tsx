import { useGetAllUsers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { FormControl, MenuItem } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledSelect } from "../../books/components/drawer/editComponents/styled";

type UserDropDownProps = {
  register: UseFormRegister<{ userId: number }>;
};

export const UserDropDown = ({ register }: UserDropDownProps) => {
  const { data } = useGetAllUsers();
  const users: User[] = data?.data || [];

  const [selectedUserId, setSelectedUserId] = useState<string>("");

  useEffect(() => {
    if (users.length > 0) {
      const randomIndex = Math.floor(Math.random() * users.length);
      const initialUser = users[randomIndex];
      setSelectedUserId(initialUser.id.toString());
    }
  }, [users]);

  const handleWriterChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedUserId(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <StyledSelect
        {...register("userId", { required: true })}
        select
        fullWidth
        id="userId"
        name="userId"
        value={selectedUserId}
        onChange={handleWriterChange}
        placeholder="שם השואל"
        label="משתמש שואל"
      >
        {users.length > 0 ? (
          users.map((user) => (
            <MenuItem key={user.id} value={user.id.toString()}>
              {user.username}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" disabled>
            No users available
          </MenuItem>
        )}
      </StyledSelect>
    </FormControl>
  );
};
