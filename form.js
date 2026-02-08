const form = document.getElementById('introForm');
const toast = document.getElementById('toast');

function showToast(msg, duration = 3000) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // stop default form submit

  if (!form.checkValidity()) {
    showToast("Lengkapi semua field wajib.", 3000);
    return;
  }

  showToast("Mengirim data… ⏳", 3000);

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xgozqeaa", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showToast("Data terkirim! ✅", 2500);
      setTimeout(() => {
        window.location.href = "https://jiruxuen-stack.github.io/INTRO-MARGA-FREEDOM-/success.html";
      }, 1200); // biar notif keliatan dulu
    } else {
      showToast("Gagal submit. Coba lagi.", 3000);
    }
  } catch (err) {
    console.error(err);
    showToast("Terjadi error, cek koneksi.", 3000);
  }
});
