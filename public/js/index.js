function loadStudents() {
    let url = "/api/students";
    let settings = {
        method: "GET",
        'Content-Type': "application/json"
    };

    fetch(url, settings)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseJSON => {
            console.log(responseJSON);
            displayResults(responseJSON);
        });
}

function displayResults(responseJSON) {
    students = responseJSON;

    $('#studentList').empty();

    students.forEach(student => {
        $('#studentList').append(`
            <li>${student.nombre} ${student.apellido} </li>
        `);
    });
}

function init() {
    loadStudents();
}

init();