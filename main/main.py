import os
import psutil

def free_memory():
    memory = psutil.virtual_memory()
    print(f"🔄 RAM Usage: {memory.percent}%")
    if memory.percent > 70:
        print("💡 High RAM usage detected. Attempting cleanup...")
        os.system("sync; echo 3 > /proc/sys/vm/drop_caches")  # Linux only

def reduce_cpu_load():
    print("⚙️ Evaluating CPU usage...")
    cpu = psutil.cpu_percent(interval=1)
    print(f"🔧 CPU Usage: {cpu}%")
    if cpu > 80:
        print("💡 High CPU usage detected. Priority adjustment needed.")

if __name__ == "__main__":
    free_memory()
    reduce_cpu_load()
    print("✅ Main Python optimization routine complete.")
