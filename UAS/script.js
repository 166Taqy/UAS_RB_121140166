document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const tableBody = document.querySelector('#myTable tbody');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmit();
    });
  
    // Add more event handlers as needed
  
    function handleFormSubmit() {
      // Validation logic here
      // Append data to table and send to server
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const checkbox = document.getElementById('check').checked;
      const radio = document.querySelector('input[name="radio"]:checked')?.value;
  
      // Append data to the table
      const newRow = tableBody.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
  
      cell1.textContent = name;
      cell2.textContent = email;
      cell3.textContent = checkbox ? 'Checked' : 'Unchecked';
      cell4.textContent = radio || 'N/A';
  
      // Send data to the server using AJAX or fetch API
      // You can also use the FormData object to serialize the form data
    }
  });  