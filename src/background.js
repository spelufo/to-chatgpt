// TODO: Configure these from UI.
let the_templates = {
  "What is _?":  "What is _? ELI5, TLDR",
  "Who was _?":  "Who was _? Answer with a short paragraph.",
  "Ask Feynman": "What would Richard Feynman say about _?",
  "Ask Trump":   "What would Trump say about _?",
}
let the_query = ""

function main() {
  chrome.runtime.onInstalled.addListener(on_installed)
  browser.commands.onCommand.addListener(on_command)
  chrome.contextMenus.onClicked.addListener(on_context_menu_clicked)
  browser.runtime.onMessage.addListener(on_message)
  setup_context_menu()
}

function on_installed(info) {
  console.log("on_installed", info)
}

function setup_context_menu() {
  function create_context_menues() {
    console.log("create_context_menues", the_templates)
    for (let template_name in the_templates) {
      let template = the_templates[template_name]
      let title = `To ChatGPT: "${template_name}"`
      chrome.contextMenus.create({id: template_name, title: title, contexts: ['selection']})
    }
  }
  chrome.contextMenus.removeAll(create_context_menues)
}

function on_context_menu_clicked(info, tab) {
  let text = info.selectionText
  let template_name = info.menuItemId
  let template = the_templates[template_name] || "_"
  the_query = template.replaceAll("_", text)
  open_chatgpt()
}

function on_command() {
  console.log("on_command", JSON.stringify(arguments))
}

function on_message(message, sender, sendResponse) {
  if (message.event === "ready") {
    if (!the_query) return;
    sendResponse({command: "write_prompt", args: [the_query]})
  } else {
    console.log("on_message", message)
  }
}

function open_chatgpt() {
  chrome.tabs.create({url: "https://chat.openai.com/chat"})
}

main()

