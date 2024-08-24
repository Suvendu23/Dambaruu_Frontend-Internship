document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    if (!terms) {
        alert("Please accept the terms and conditions!");
        return;
    }

    // Add data to table
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${country}</td>
    `;

    // Show table
    document.getElementById('dataTable').style.display = 'block';

    // Clear form
    this.reset();
});
