import { UserAlreadyExistsError } from "./user-already-exist";

export async function createUser(data: any) {
    const userExists = await findUserByEmail(data.email)

    if(userExists) {
        throw new UserAlreadyExistsError();
    }
}