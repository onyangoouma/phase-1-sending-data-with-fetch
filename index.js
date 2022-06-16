function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name,
            email

        }),
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object);
        document.body.textContent = object["id"];
    })
    .catch(function(error){
        document.body.textContent = error.message;
    });
}
