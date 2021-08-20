export interface I_User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface I_Example3Component {
  title: string; // variable(property as in a class) assignment
  UserListNew: I_User[]; // variable(property as in a class) assignment
  removeUser(id: number): void; // call signature
  onSubmit(data: I_User): void; // call signature
}
