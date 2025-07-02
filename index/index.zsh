#!/bin/zsh
# StrixSpeed Initialization Script (Zsh)

echo "🔧 Launching StrixSpeed CLI..."
echo "⏳ Checking system usage..."

CPU_LOAD=$(sysctl -n hw.ncpu)
MEM_FREE=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')

echo "🧠 CPU Cores: $CPU_LOAD"
echo "💾 Memory Free: $MEM_FREE pages"

echo "🚀 Running Boost Routine..."
python3 ../core/python/boost_engine.py &

echo "🛡️ Launching Defender..."
sudo ../core/shell/defend_scan.sh

echo "🌐 Starting Secure VPN Tunnel..."
sudo openvpn --config ../config/vpn/strixspeed.ovpn

echo "✅ All systems active. StrixSpeed is now protecting your device."
