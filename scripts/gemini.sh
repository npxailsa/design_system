#!/bin/sh
# gemini.sh — Start Gemini CLI with gemini-3.1-pro-preview.
# Falls back to gemini-2.5-pro automatically when the daily quota is exhausted.
#
# Usage:
#   ./scripts/gemini.sh [extra gemini flags...]
#   ./scripts/gemini.sh --yolo
#   ./scripts/gemini.sh -p "Your prompt here"

PRIMARY_MODEL="gemini-3.1-pro-preview"
FALLBACK_MODEL="gemini-2.5-pro"

# Capture all extra args passed to this script
EXTRA_ARGS="$*"

echo "Starting Gemini CLI with model: $PRIMARY_MODEL"
echo ""

# Run with the primary model; capture output to detect quota errors.
# If the quota is exhausted, gemini exits with code 1 and prints TerminalQuotaError.
OUTPUT=$(gemini -m "$PRIMARY_MODEL" $EXTRA_ARGS 2>&1)
EXIT_CODE=$?

if echo "$OUTPUT" | grep -q "TerminalQuotaError\|quota\|RESOURCE_EXHAUSTED" 2>/dev/null && [ $EXIT_CODE -ne 0 ]; then
  echo ""
  echo "⚠️  Daily quota reached for $PRIMARY_MODEL."
  echo "   Switching to fallback model: $FALLBACK_MODEL"
  echo ""
  exec gemini -m "$FALLBACK_MODEL" $EXTRA_ARGS
else
  echo "$OUTPUT"
  exit $EXIT_CODE
fi
