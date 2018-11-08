export function symbolMap(tone) {
  let symbol;
  const map = {
    "Sadness": "😰",
    "Analytical": "🧐",
    "Tentative": "🤔",
    "Confident": "🤟",
    "Anger": "😡",
    "Joy": "😃"
  }
  symbol = map[tone.tone_name];
  return symbol;
}
