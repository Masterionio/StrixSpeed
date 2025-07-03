#!/bin/zsh
echo "🌀 Starting Zsh Root Hook..."

# Check root status
if [[ $EUID -ne 0 ]]; then
  echo "⚠️ Root access required. Please run as sudo."
  exit 1
fi

echo "✅ Root access confirmed."
echo "🚀 Running Python optimization sequence..."
python3 main.py

echo "🔒 Triggering Defender scan..."
sudo bash ../core/shell/defender.sh

echo "✅ Zsh execution complete. All systems synchronized."
