## To ChatGPT

A browser extension to quickly experiment with GPT prompts.

### Features / TODO

- [x] Define custom prompt templates through the extension's UI.
- [ ] Nicer settings UI, it is just a textarea with some JSON now.
- [x] Add prompt templates to the browser's context menu to make different kinds
  of queries. When clicked the browser selection is spliced into the template to
  build a prompt that is passed to ChatGPT, which opens in a new browser tab.
- [ ] If already on a ChatGPT conversation when clicking on a context menu
  option, we should run the prompt in the current tab, not open another.


### Ideas for future work

- We may want to make a single abstraction for remote controlling the ChatGPT UI,
  such that the same API can be used from a browser extension or a pupeteer script.


### Acknowledgements

- [To Google Translate](https://github.com/itsecurityco/to-google-translate)
  extension, used as reference to scaffold the project.
