import { useGetAllUsers } from "@/app/api";
import { User } from "@/app/api/users/dto/user";
import { FormControl, MenuItem } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { StyledSelect } from "../../books/components/drawer/editComponents/styled";
import { UseFormRegister } from "react-hook-form";

type UserDropDownProps = {
  register: UseFormRegister<{ userId: number }>;
};

export const UserDropDown = ({ register }: UserDropDownProps) => {
  const { data } = useGetAllUsers();
  const users: User[] = data?.data || [];

  const [selectedUserId, setSelectedUserId] = useState<number | string>("");

  useEffect(() => {
    if (users.length > 0) {
      const randomIndex = Math.floor(Math.random() * users.length);
      const initialUser = users[randomIndex];
      setSelectedUserId(initialUser.id);
    }
  }, [users]);

  const handleWriterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedUserId(+event.target.value);
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
        placeholder="שם סופר"
      >
        {users && users.length > 0 ? (
          users.map((user: User) => (
            <MenuItem key={user.id} value={user.id}>
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
