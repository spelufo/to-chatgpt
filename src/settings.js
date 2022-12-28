// This file is loaded both as a background script and the settings UI.
// Keep it stateless to avoid issues.

const DEFAULTS = {
  templates: {
    "Who": "Who is _? Answer in 100 words or less.",
    "What": "What is _? Answer in 100 words or less.",
    "Where": "Where is _? Answer with the country, GPS coordinates and a link to google maps.",
    "When": "When did _? Answer in 100 words or less.",
    "How": "How did _?",

    "History of _": "Tell me about the history of _. Just the main events.",
    "Works by _": "List _'s most important work",
    "Joke about _": "Tell me joke about _",
    "Poem about _": "Write a poem about _",
  },
}

async function load_settings() {
  let settings = await browser.storage.local.get(DEFAULTS)
  return settings
}

async function save_settings(settings) {
  await browser.storage.local.set(settings)
  browser.runtime.sendMessage({event: "settings_saved"})
}
