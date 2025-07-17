document.addEventListener("DOMContentLoaded", () => {
  // Cek apakah nama sudah tersimpan di sessionStorage
  let name = sessionStorage.getItem("username");

  // Kalau belum, minta nama lewat prompt dan simpan ke sessionStorage
  if (!name) {
    name = prompt("What's your name?");
    name = name || "Guest";
    sessionStorage.setItem("username", name);
  }

  // Tampilkan nama ke elemen dengan id "username"
  document.getElementById("username").textContent = name;

  // Tangani form kalau ada di halaman ini
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const message = formData.get("message");

      if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return;
      }

      document.getElementById("formResult").innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    });
  }
});
