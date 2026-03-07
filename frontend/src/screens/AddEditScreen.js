fetch('http://localhost:3000/people', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newPerson)
})

fetch('http://localhost:3000/people/${id}', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedPerson)
})

fetch('http://localhost:3000/people/${id}', {
    method: 'DELETE',
})