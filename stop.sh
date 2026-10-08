#!/usr/bin/env bash
# ==============================================================================
# The World of Opera — Server Stop Script
# Usage:
#   ./stop.sh           Stop the server gracefully
#   npm stop            Convenience alias
# ==============================================================================

cd "$(dirname "$0")"

PORT=3000
PID_FILE=".server.pid"

# Colors for terminal output
GOLD='\033[0;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GOLD}========================================${NC}"
echo -e "${GOLD}  The World of Opera — Stopping Server  ${NC}"
echo -e "${GOLD}========================================${NC}"

# Find PID from PID_FILE or by checking port 3000
PID=""
if [ -f "$PID_FILE" ]; then
  FILE_PID=$(cat "$PID_FILE" 2>/dev/null)
  if [ -n "$FILE_PID" ] && kill -0 "$FILE_PID" 2>/dev/null; then
    PID="$FILE_PID"
  fi
fi

# Fallback to lsof on port 3000
if [ -z "$PID" ]; then
  PID=$(lsof -ti :$PORT 2>/dev/null)
fi

if [ -z "$PID" ]; then
  echo -e "No running server found on port $PORT."
  rm -f "$PID_FILE"
  echo -e "${GOLD}========================================${NC}"
  exit 0
fi

echo -e "Stopping server process (PID: $PID)..."

# Send SIGTERM for graceful shutdown
kill "$PID" 2>/dev/null

# Wait up to 5 seconds for process to exit
STOPPED=false
for i in {1..10}; do
  if ! kill -0 "$PID" 2>/dev/null; then
    STOPPED=true
    break
  fi
  sleep 0.5
done

# If still running, force kill with SIGKILL
if [ "$STOPPED" = false ]; then
  echo -e "Process did not terminate gracefully, sending SIGKILL..."
  kill -9 "$PID" 2>/dev/null
  sleep 0.5
fi

# Also ensure any lingering listeners on port 3000 are freed
REMAINING_PIDS=$(lsof -ti :$PORT 2>/dev/null)
if [ -n "$REMAINING_PIDS" ]; then
  kill -9 $REMAINING_PIDS 2>/dev/null
fi

rm -f "$PID_FILE"
echo -e "${GREEN}✓ Server stopped successfully.${NC}"
echo -e "${GOLD}========================================${NC}"
exit 0
