import { Client, Account } from "appwrite";

// Ensure that environment variables are defined
if (
  !process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
  !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
) {
  throw new Error("Missing Appwrite configuration in environment variables.");
}

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a0a7010032e546d67f");

export const account = new Account(client);
export { ID } from "appwrite";
