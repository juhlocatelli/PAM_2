useEffect(() => {
    fetch('http://localhost:3000/people')
    .then(response => response.json())
    .then(data => setPeople(data))
    .catch(error => console.error(error));
}, []);

<FlatList
    data={people}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
        <View>
            <Text>{item.firstname} {item.lastname}</Text>
            <Text>{item.email}</Text>
        </View>
    )}
/>