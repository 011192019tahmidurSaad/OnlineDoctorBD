function loadDoctors(){
    apiLink = '';
    fetch(apiLink)
    .then(response => response.json())
    .then(data => displayDoctor(data))
}

function displayDoctor(data){
    

}