import chalk, { ChalkInstance } from "chalk";

type LogLevel = "log" | "info" | "warn" | "error";

const logColors: Record<LogLevel, ChalkInstance> = {
  log: chalk.white,
  info: chalk.blue,
  warn: chalk.yellow,
  error: chalk.red,
};

const buildLogger = (level: LogLevel, message: string) => {
  const prefix = `[${level.toUpperCase()}]`;
  const colored = logColors[level](prefix + " " + message);

  const output = level === "error" ? console.error :
                 level === "warn" ? console.warn : console.log;
  output(colored);
};

export const Logger: Record<LogLevel, (message: string) => void> = {
  log: (message) => buildLogger("log", message),
  info: (message) => buildLogger("info", message),
  warn: (message) => buildLogger("warn", message),
  error: (message) => buildLogger("error", message),
};
