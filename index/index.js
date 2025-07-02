document.addEventListener('DOMContentLoaded', () => {
  const boostBtn = document.getElementById('boostBtn');
  const defendBtn = document.getElementById('defendBtn');
  const vpnBtn = document.getElementById('vpnBtn');

  boostBtn.addEventListener('click', () => {
    alert('System optimization started. 🚀');
    // Call Python backend via CLI or REST endpoint
  });

  defendBtn.addEventListener('click', () => {
    alert('Security scan initiated. 🛡️');
    // Trigger Rust-based security audit or Shell script
  });

  vpnBtn.addEventListener('click', () => {
    alert('Secure VPN activated. 🌐');
    // Link to OpenVPN process
  });
});
