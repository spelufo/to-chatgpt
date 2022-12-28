let templates_elt = document.querySelector("#templates")
let save_button = document.querySelector("button#save")
let reset_button = document.querySelector("button#reset")

save_button.addEventListener("click", ui_save_settings)
reset_button.addEventListener("click", ui_reset_settings)
ui_load_settings()

async function ui_load_settings() {
  let settings = await load_settings()
  templates_elt.value = templates_to_string(settings.templates)
}

async function ui_save_settings(e) {
  e.preventDefault()
  let settings = {
    templates: templates_from_string(templates_elt.value),
  }
  await save_settings(settings)
}

async function ui_reset_settings(e) {
  e.preventDefault()
  await save_settings(DEFAULTS)
  await ui_load_settings()
}

// TODO: Replace this with a proper UI.

function templates_from_string(s) {
  let templates = {}
  for (let line of s.split("\n")) {
    let parts = line.split(" (menu: ")
    let template = parts[0]
    let template_name = (parts.length > 1) ? parts[1].slice(0, -1) : template
    templates[template_name] = template
  }
  return templates
}

function templates_to_string(templates) {
  let s = ""
  for (let template_name in templates) {
    let template = templates[template_name]
    if (template === template_name) {
      s += `${template}\n`
    } else {
      s += `${template} (menu: ${template_name})\n`
    }
  }
  return s
}
