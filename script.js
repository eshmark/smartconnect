Telegram.WebApp.ready();
Telegram.WebApp.expand(); // optional fullscreen

const userDevices = [
  { id: "device1", name: "Main Door" },
  { id: "device2", name: "Back Door" }
];

const container = document.getElementById("deviceList");

userDevices.forEach(device => {
  const div = document.createElement("div");
  div.className = "device";
  div.innerHTML = `
    <h3>${device.name}</h3>
    <button onclick="sendCommand('${device.id}', 'on')">ON</button>
    <button onclick="sendCommand('${device.id}', 'off')">OFF</button>
  `;
  container.appendChild(div);
});

function sendCommand(deviceId, action) {
  const command = `${action} ${deviceId}`;
  Telegram.WebApp.sendData(command); // sent to bot
  alert(`Sent: ${command}`);
}
