document.addEventListener("DOMContentLoaded", () => {
  const inputCommand = document.getElementById("inputCommand");
  const submitButton = document.getElementById("submitButton");
  const outputBash = document.getElementById("outputBash");

  submitButton.addEventListener("click", async () => {
    const naturalLanguageCommand = inputCommand.value;
    const bashCommand = await convertToBash(naturalLanguageCommand);
    outputBash.textContent = bashCommand;
  });
});

async function convertToBash(naturalLanguageCommand) {
  const systemprompt = "Convert the following natural language command to a bash command:";
  const userprompt = naturalLanguageCommand;

  const message = [
    { role: "system", content: systemprompt },
    { role: "user", content: userprompt },
  ];

  const response = await fetch("/getBashCommand", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages: message }),
  });

  const data = await response.json();
  return data.bashCommand;
}