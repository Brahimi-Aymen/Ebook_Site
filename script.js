document.getElementById("year").textContent = new Date().getFullYear();

/*
  Remplace BUY_URL par ton lien de paiement (Gumroad / Payhip / Beacons).
  Exemple Gumroad: https://toncompte.gumroad.com/l/ton-produit
*/
const BUY_URL = "https://example.com";
document.getElementById("buyLink").href = BUY_URL;
