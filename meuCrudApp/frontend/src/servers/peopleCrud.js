import { API_URL } from "./configApi";

export async function getPeople() {
    try {
        const response = await fetch(`${API_URL}/people`);
        console.log("Status:", response.status);
        const text = await response.text();
        console.log("Resposta crua:", text);
        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.log("Erro API:", error);
        return [];
    }
}

//função para criar nova pessoa 
export async function createPerson(person) {
    //método HTTP: POST
    const response = await fetch(`${API_URL}/people` , {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
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
