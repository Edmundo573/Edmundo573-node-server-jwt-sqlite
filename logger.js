import fs from 'fs';
import path from 'path';

export function createLogger(logsDir) {
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
  const file = path.join(logsDir, `audit-${new Date().toISOString().slice(0,10)}.jsonl`);

  return function logEvent(event) {
    const entry = {
      timestamp: new Date().toISOString(),
      ...event
    };
    fs.appendFileSync(file, JSON.stringify(entry) + '\n', 'utf-8');
  };
}
