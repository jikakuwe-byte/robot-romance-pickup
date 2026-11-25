// Entry for make.fun's "Robot Romance: One-Line Pickup Lines for AI"
// bounty: one single-line joke pickup line, under 200 characters,
// written to charm a robot or an AI. This one uses the segfault —
// the most dramatic way a program can die — as a compliment: walking
// away from this robot crashes the whole process, which is the
// closest a machine gets to saying it cannot live without you.
// Running the program prints the pickup line, and nothing else.

/** The line: the question, the crash, the compliment. */
function jokeLine(): string {
  const question = "Are you a segfault?";
  const crash =
    "Because every time I try to walk away from you, my whole process crashes.";
  return `${question} ${crash}`;
}

console.log(jokeLine());
