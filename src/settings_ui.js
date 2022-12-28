console.log("settings_ui.js")


let form_elt = document.querySelector("form")
let templates_elt = document.querySelector("#templates")

form_elt.addEventListener("submit", ui_save_settings)
ui_load_settings()

async function ui_load_settings() {
  let settings = await load_settings()
  templates_elt.value = JSON.stringify(settings.templates)
}

async function ui_save_settings(e) {
  e.preventDefault()
  let settings = {
    templates: JSON.parse(templates_elt.value),
  }
  await save_settings(settings)
}
