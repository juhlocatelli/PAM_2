import { API_URL } from "./configApi";

//função para buscar todas as respostas
export async function getPeople() {
    const response = await fetch(`${API_URL}/people`);

    //realiza requisição GET
    const data = await response.json();

    //retorna a lista
    return data;
}

//função para criar nova pessoa 
export async function createPerson(person) {
    //método HTTP: POST
    const response = await fetch(`${API_URL}/people` , {
        method: "POST",
        headers:{
            "Content-Type": "applçicatin/json"
        },
        //transforma o objeto em JSON
        body: JSON.stringify(person)
    });
    return response.json();
}

//função para atualizar pessoa
export async function updatePerson(id, person) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
    return response.json();
}

//função para deletar pessoa 
export async function deletePerson(id) {
    await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
}
