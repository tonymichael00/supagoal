export const getUserQuery = `
query GetUser($email: String!) {
  user(by: {email: $email}) {
    name
    email
  }
}`;
