function loadDoctors(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data1 => displayDoctor(data1))
}

function loadAllDoctors(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data2 => console.log(data2))
}

function displayDoctor(data1){
    const postAllDoctors = document.getElementById('allDoctorsContainer');
    for(const post of data1){
        const div = document.createElement('div');
        div.innerHTML = 
        `<h4>name - </h4>`;
        postAllDoctors.appendChild(div);

    }
}


function displayAllDoctor(data2){
    const postAllDoctors = document.getElementById('allDoctorsContainer');
    for(const post of data2){
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <th>${post.id}</th>
        <td>${post.name}</td>
        <td>${post.email}</td>
        <td>Blue</td>
        `;
        postAllDoctors.appendChild(tr);

    }
}