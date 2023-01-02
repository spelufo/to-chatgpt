## To ChatGPT

A browser extension to query ChatGPT with the current selection spliced into
custom prompt templates.

Prompt templates (e.g `Who is _?`) can be defined. Each template will create a
context menu entry for querying ChatGPT with the current selection substituted
into the template in place of underscores.


### Development

Use `make run` to run it in an isolated firefox profile.


### Installation

Currently unreleased. To try it in Firefox:

1. Clone/download the source code.
2. `make`
3. In firefox `about:addons`, from the cog icon menu, use "Install add-on from
file" and pick `web-ext-artifacts/to_chatgpt-1.0.zip` or use "Debug add-ons" and
pick the `manifest.json`.

Extensions installed this way won't stay installed after you restart firefox.
Currently the only way to have an unreleased extension installed permanently
is to be running Firefox Developer Edition with the `xpinstall.signatures.required`
flag set to false in `about:config`.


### TODO

- [ ] Better settings UI.
- [ ] Run the prompt in the current tab if already on a ChatGPT conversation.
- [ ] Check if we are asking for more permissions than we need to function.
- [ ] Release to app stores.
- [ ] Make it work in Chrome too. (Manifest v2 to v3).


### Acknowledgements

- [To Google Translate](https://github.com/itsecurityco/to-google-translate)
  extension, used as reference to scaffold the project.
