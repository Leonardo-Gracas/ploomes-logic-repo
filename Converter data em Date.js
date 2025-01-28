
// Atenção ao fuso horário.
// A função sempre irá remover 3hrs quando for pegar qualquer dado.
// Caso transforme sem informar a hora, ele irá marcar como 00:00, e quando tirar 3hrs, chega ao dia anterior.
let data = new Date(dia + "T03:00:00Z"); // Converte a data recebida em formato de string para um objeto Date

// Função para converter em DD/MM/AA
const convertMMDDYYYY = (date) => {
  return (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0') + "-" + date.getFullYear();
}
