
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get the input value
            const keywords = document.getElementById('keywords').value;

            // Perform any client-side validation if needed
            
            // Send an AJAX request to the server to search for quotes
            fetch('/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keywords: keywords })
            })
            .then(response => response.json())
            .then(data => {
                // Process the search results returned from the server
                console.log(data);
                // Update the UI to display the search results
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
