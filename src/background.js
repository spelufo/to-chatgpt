let settings = null
let the_query = ""

function main() {
  chrome.contextMenus.onClicked.addListener(on_context_menu_clicked)
  browser.runtime.onMessage.addListener(on_message)
  chrome.runtime.onInstalled.addListener(setup)
  setup()
}

async function setup() {
  settings = await load_settings()
  function create_context_menues() {
    for (let template_name in settings.templates) {
      let menu = {id: template_name, title: template_name, contexts: ['selection']}
      chrome.contextMenus.create(menu)
    }
  }
  chrome.contextMenus.removeAll(create_context_menues)
}

function on_context_menu_clicked(info, tab) {
  let text = info.selectionText
  let template_name = info.menuItemId
  let template = settings.templates[template_name] || "_"
  the_query = template.replaceAll("_", text)
  open_chatgpt()
}

function open_chatgpt() {
  chrome.tabs.create({url: "https://chat.openai.com/chat"})
}

function on_message(message, sender, respond) {
  let this_file = this  // refers to the global scope
  let handler_name = "on_" + message.event
  let handler = this_file[handler_name]
  if (!handler) {
    console.error("Message handler not found: " + handler_name)
    return
  }
  handler(message, sender, respond)
}

function on_settings_saved(message, sender, respond) {
  setup()
}

function on_ready(message, sender, respond) {
  if (!the_query) return;
  respond({command: "write_prompt", args: [the_query]})
}

main()
