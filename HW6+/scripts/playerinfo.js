document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    
    const playerData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        attempts: 0
    };
    
    localStorage.setItem("playerData", JSON.stringify(playerData));
    
    // Redirect to memory_game.html
    window.location.href = "memory_game.html";
});
