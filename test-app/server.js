import http from "http";

let hitCount = 0;

async function startServer() {
  const port = process.env.PORT || 4000;
  const host = "0.0.0.0";

  // Create a simple HTTP server
  const server = http.createServer((req, res) => {
    const emojis = ["🚀", "🌟", "🔥", "💫", "⚡", "🎉", "✨", "🌈"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const time = new Date().toLocaleTimeString();
    
    const art = `
    ╭─────────────────────────────────────╮
    │                                     │
    │   ${emoji}  H E L L O   W O R L D  ${emoji}   │
    │                                     │
    │      ┌ ┐┌─┐┬  ┬  ┌─┐                │
    │      ├─┤├┤ │  │  │ │                │
    │      ┴ ┴└─┘┴─┘┴─┘└─┘                │
    │                                     │
    │   🎯 Visit #${String(++hitCount).padStart(5, '0')}                   │
    │   ⏰ ${time.padEnd(20)}      │
    │   📡 Running on port ${port}             │
    │                                     │
    ╰─────────────────────────────────────╯

    `;
    
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(art);
  });

  // Start listening
  server.listen(port, host, () => {
    console.log(`🚀 Server ready at http://${host}:${port}`);
  });
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Shutting down server...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n👋 Shutting down server...");
  process.exit(0);
});

// Start the server
startServer().catch((error) => {
  console.error("❌ Error starting server:", error);
  process.exit(1);
});
