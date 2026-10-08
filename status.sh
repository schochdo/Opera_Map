#!/usr/bin/env bash
# ==============================================================================
# The World of Opera — Server Status Script
# Usage:
#   ./status.sh         Check whether the server is running
#   npm run status      Convenience alias
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
echo -e "${GOLD}  The World of Opera — Server Status    ${NC}"
echo -e "${GOLD}========================================${NC}"

PID=$(lsof -ti :$PORT 2>/dev/null)

if [ -n "$PID" ]; then
  echo -e "Status:  ${GREEN}RUNNING${NC}"
  echo -e "PID:     ${GREEN}$PID${NC}"
  echo -e "Port:    ${CYAN}$PORT${NC}"
  echo -e "URL:     ${CYAN}http://localhost:$PORT${NC}"
  echo -e ""
  echo -e "Commands:"
  echo -e "  Stop:  ${GOLD}./stop.sh${NC} (or ${GOLD}npm stop${NC})"
  echo -e "  Logs:  tail -f $LOG_FILE"
  
  if [ -f "$LOG_FILE" ]; then
    echo -e ""
    echo -e "Recent log output:"
    tail -n 5 "$LOG_FILE"
  fi
else
  echo -e "Status:  ${RED}STOPPED${NC}"
  echo -e "Commands:"
  echo -e "  Start: ${GOLD}./start.sh${NC} (or ${GOLD}npm start${NC})"
fi

echo -e "${GOLD}========================================${NC}"
