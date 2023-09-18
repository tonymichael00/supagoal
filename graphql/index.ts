export const getUserQuery = `
query GetUser($email: String!) {
  user(by: {email: $email}) {
    name
    email
  }
}`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input:$input){
      user{
        name
        email
      }
    }
  }
`;
