#!/usr/bin/env bash
# ==============================================================================
# The World of Opera — Server Start Script
# Usage:
#   ./start.sh          Start the server in the background
#   ./start.sh --open   Start the server and open it in the default browser
#   npm start           Convenience alias (runs ./start.sh)
# ==============================================================================

cd "$(dirname "$0")"

PORT=3000
PID_FILE=".server.pid"
LOG_FILE=".server.log"

# Colors for terminal output
GOLD='\033[0;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${GOLD}========================================${NC}"
echo -e "${GOLD}  The World of Opera — Dev Server       ${NC}"
echo -e "${GOLD}========================================${NC}"

# Check if server is already running on port 3000
EXISTING_PID=$(lsof -ti :$PORT 2>/dev/null)
if [ -n "$EXISTING_PID" ]; then
  echo -e "${CYAN}Server is already running!${NC}"
  echo -e "  PID:     ${GREEN}$EXISTING_PID${NC}"
  echo -e "  Local:   ${CYAN}http://localhost:$PORT${NC}"
  echo -e "  Logs:    tail -f $LOG_FILE"
  echo -e ""
  echo -e "  To stop: ${GOLD}./stop.sh${NC} (or ${GOLD}npm stop${NC})"
  echo -e "${GOLD}========================================${NC}"
  
  if [ "$1" == "--open" ]; then
    open "http://localhost:$PORT"
  fi
  exit 0
fi

# Clean up stale PID file if present
rm -f "$PID_FILE"

echo -e "Starting server on port ${CYAN}$PORT${NC}..."

# Launch Vite detached in background via node spawn
node -e "
const { spawn } = require('child_process');
const fs = require('fs');
const out = fs.openSync('$LOG_FILE', 'w');
const p = spawn('./node_modules/.bin/vite', ['--port', '$PORT', '--host'], {
  detached: true,
  stdio: ['ignore', out, out]
});
p.unref();
fs.writeFileSync('$PID_FILE', String(p.pid));
"

# Wait for server to become responsive
READY=false
for i in {1..20}; do
  if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT" 2>/dev/null | grep -q "200"; then
    READY=true
    break
  fi
  sleep 0.3
done

SERVER_PID=$(cat "$PID_FILE" 2>/dev/null)
if [ -z "$SERVER_PID" ]; then
  SERVER_PID=$(lsof -ti :$PORT 2>/dev/null)
fi

if [ "$READY" = true ]; then
  NETWORK_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "localhost")
  echo -e "${GREEN}✓ Server started successfully in the background!${NC}"
  echo -e "  PID:     ${GREEN}$SERVER_PID${NC}"
  echo -e "  Local:   ${CYAN}http://localhost:$PORT${NC}"
  echo -e "  Network: ${CYAN}http://$NETWORK_IP:$PORT${NC}"
  echo -e "  Logs:    tail -f $LOG_FILE"
  echo -e ""
  echo -e "  Commands:"
  echo -e "    ${GOLD}./status.sh${NC}  (or ${GOLD}npm run status${NC})  Check server status"
  echo -e "    ${GOLD}./stop.sh${NC}    (or ${GOLD}npm stop${NC})        Stop the server"
  echo -e "${GOLD}========================================${NC}"

  if [ "$1" == "--open" ]; then
    open "http://localhost:$PORT"
  fi
  exit 0
else
  echo -e "${RED}✗ Failed to start server within timeout.${NC}"
  if [ -f "$LOG_FILE" ]; then
    echo -e "${RED}Recent log output:${NC}"
    tail -n 15 "$LOG_FILE"
  fi
  rm -f "$PID_FILE"
  exit 1
fi
