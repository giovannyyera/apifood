document.getElementById("searchButton").addEventListener("click", function() {
    const foodInput = document.getElementById("foodInput").value;
    fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + foodInput + '&apiKey=3a35379ff66a47d3bea0043f37929475&number=1')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = JSON.stringify(data, null, 2); 
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });


        
});