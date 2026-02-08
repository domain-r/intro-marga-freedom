const form = document.getElementById('introForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // cegah redirect Formspree default

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xgozqeaa", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      window.location.href = "success.html"; // redirect ke halaman utama / sukses
    } else {
      alert("Gagal submit, coba lagi.");
    }
  } catch (error) {
    alert("Ada error. Cek koneksi.");
    console.error(error);
  }
});