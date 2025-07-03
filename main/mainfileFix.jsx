import { exec } from 'child_process';

export const runSecureCommand = (command) => {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Command failed: ${stderr}`);
    } else {
      console.log(`✅ Command output: ${stdout}`);
    }
  });
};

// Example usage in secure routines
runSecureCommand("sudo python3 main.py");
