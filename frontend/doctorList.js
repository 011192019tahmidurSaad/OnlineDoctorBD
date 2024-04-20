function loadDoctors(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data1 => displayDoctor(data1))
}

function displayDoctor(data1){
    const postSelectedDoctors = document.getElementById('selectedDoctorsContainer');
    for(const post of data1){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${post.id}</td>
        <td>${post.name}</td>
        <td>${post.email}</td>
        <td>${post.address.city}</td>
        `;
        postSelectedDoctors.appendChild(tr);

    }
}

function loadAllDoctors(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data2 =>displayAllDoctor(data2))
}

function displayAllDoctor(data2){
    const postAllDoctors = document.getElementById('allDoctorsContainer');
    for(const post of data2){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${post.id}</td>
        <td>${post.name}</td>
        <td>${post.email}</td>
        <td>${post.address.city}</td>
        `;
        postAllDoctors.appendChild(tr);

    }
}
