import { saltAndHashPassword } from "../../../lib/password";
import {
  checkEmailExistsInDb,
  createClientInDb,
} from "../../api/auth/auth.repository";
import { signIn } from "../../auth";

export async function registerNewClient(client) {
  const mailAlreadyExists = await checkEmailExistsInDb(client.email);
  if (mailAlreadyExists) {
    throw new Error("This email is already in use. Please try another one.");
  }
  const nonHashedPassword = client.password;
  client.password = saltAndHashPassword(client.password);
  const createdClient = await createClientInDb(client);
  if (createdClient) {
    await signIn("credentials", {
      redirect: false,
      email: client.email,
      password: nonHashedPassword,
    });
    return createdClient;
  }
}

export async function getClientByEmail(email: string) {
  try {
    return checkEmailExistsInDb(email);
  } catch (error) {
    console.error(error);
  }
}
