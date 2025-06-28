document.getElementById("formulaire").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // if (!prenom || !nom || !email || !message) {
    //   alert("Veuillez remplir tous les champs.");
    //   return;
    // }

    const confirmation = document.getElementById("confirmation");
    confirmation.textContent = `✅ Merci ${prenom} ${nom}, votre message a bien été envoyé.`;
    confirmation.style.display = "block";

    
    this.reset();
  });