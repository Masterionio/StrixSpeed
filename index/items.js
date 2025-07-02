// Modular UI Stability Helpers – StrixSpeed

export const getElement = (id) => {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`[StrixSpeed] Element with ID '${id}' not found.`);
  }
  return el;
};

export const setText = (id, text) => {
  const el = getElement(id);
  if (el) el.textContent = text;
};

export const toggleClass = (id, className) => {
  const el = getElement(id);
  if (el) el.classList.toggle(className);
};

export const runBoostRoutine = () => {
  alert('💨 Stability Check: Boost Sequence Engaged.');
  // TODO: Add backend link or system trigger
};

export const runDefendRoutine = () => {
  alert('🛡️ Stability Check: Defender Scan Initialized.');
  // TODO: Add security logic interface
};

export const activateVPN = () => {
  alert('🔒 VPN Tunnel Activating...');
  // TODO: Link to OpenVPN config
};
