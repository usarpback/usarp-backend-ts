import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatBlockedAccountMessage(until: Date): string {
  const formatted = format(until, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  return `⛔ Você está temporariamente bloqueado até ${formatted}.`;
}
