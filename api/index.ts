import { PasswordData } from "./types";

export const getPassword = (id: number): PasswordData => ({
  id,
  url: "change.this.later.com",
  description: "this is temporary",
  password: "also temporary",
});

export const savePassword = (passwordData: Omit<PasswordData, "id">) => {
  // TODO write POST
  console.log("saved");
  return;
};

export const updatePassword = (passwordData: Partial<PasswordData>) => {
  // TODO write PATCH
  console.log("updated");
  return;
};
