function main() {
  wait_ready(on_ready)
}

let commands = {
  write_prompt(prompt, submit=true) {
    let textarea = get_textarea()
    textarea.value = prompt
    if (submit) textarea.parentElement.querySelector("button").click()
  }
}

function wait_ready(on_ready) {
  let ivl = setInterval(() => {
    let ready = get_new_chat_button()
    if (ready) {
      clearInterval(ivl)
      on_ready()
    }
  }, 500)
}

async function on_ready() {
  let r = await browser.runtime.sendMessage({event: "ready"})
  if (r) commands[r.command].apply(commands, r.args || [])
}

function get_new_chat_button() {
  for (let a of document.getElementsByTagName("a"))
    if (a.innerText === "New chat") return a
}

function get_textarea() {
  let textareas = document.getElementsByTagName("textarea")
  if (textareas.length > 1)
    console.warn("More than one textarea found. Are we picking the right one?")
  return textareas[textareas.length-1]
}


main()
