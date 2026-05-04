export class UserAlreadyExistsError extends BaseError {
    constructor() {
        super('Usuário com esse e-mail já existe no banco de dados.', 409);     
    }
}

