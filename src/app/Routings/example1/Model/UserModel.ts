export interface I_User {
  // declaring a structure
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface I_Example1Component {
  title: string; // variable(property as in a class) assignment
  UserList: I_User[]; // variable(property as in a class) assignment
  removeUser(id: number): void; // call signature
  onSubmit(data: I_User): void; // call signature
}
