// MQTT over WebSocket configuration
const broker = "wss://va1de099.ala.us-east-1.emqxsl.com:8084/mqtt";
const topic = "device/vaa001/cmd";  // change to your unique device topic
const options = {
  username: "can101",
  password: "402340",
  reconnectPeriod: 1000
};

const client = mqtt.connect(broker, options);

client.on("connect", () => {
  document.getElementById("status").innerText = "✅ Connected to MQTT broker";
});

client.on("error", (err) => {
  console.error("MQTT Error:", err);
  document.getElementById("status").innerText = "❌ MQTT connection failed";
});

function sendCommand(command) {
  if (client.connected) {
    client.publish(topic, command);
    document.getElementById("status").innerText = `📤 Sent: ${command}`;
  } else {
    document.getElementById("status").innerText = "❌ Not connected to broker";
  }
}
