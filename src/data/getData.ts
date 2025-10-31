export function getData() {
    // API Dashboard auth0
    fetch('http://localhost:6060/api/users', 
        {
            method: 'GET',
            headers: {
                "authorization": "Bearer MY_TOKEN_AQUI"
            }
        }
    ).then(response => {
        if(response.ok) {
            console.log(response.json())
        }

    }).catch(err => console.error('Erro ao solicitar recurso da API: ', err))
}