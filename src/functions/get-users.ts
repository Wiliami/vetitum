export async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error(`Erro ao buscar usuários: ${response.statusText}`)
        }

        return await response.json();
    } catch (err) {
        console.error('Interno server error:', err)
    }
}

async function getData() {
    try {
        const data = await getUsers()
        
        return data;
    } catch (err) {
        console.error('Interno server error:', err)
    }
}   

console.log(getData())