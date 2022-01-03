document.getElementById('fetch-user').onclick = fetchAndRenderUsers;

async function fetchAndRenderUsers() {
    const response = await fetch('/users');
    const users = await response.json();

    let usersHTML = "<h1>Felhasználók</h1>";
    for (user of users) {
        usersHTML += `<div class ='card mb-2 w-50'>
                    <h5 class='card-title'>${user.name}</h5>
                    <p class='card-text'>${user.email}</p>
                    <p class='card-text'>${user.tel}</p>
                    </div>
                    </div>`;
    }

    document.getElementById("user-list-components").innerHTML = usersHTML;
}

document.getElementById('create-user').onsubmit = async function (event) {

    event.preventDefault();
    const cname = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    console.log(`Az új felhasználó neve: ${name} (${email})`);
    const res = await fetch('/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            tel
        })
    });

    if (res.ok) {
        fetchAndRenderUsers();
    } else {
        console.log("Hiba történt");
        alert("A szerver a kérést nem tudta feldolgozni");
    }
}