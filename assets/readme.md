# `/assets` folder

Contain "static" things that need pre-processing.
(unlike the `/public` folder, which is simply copied)

## `/assets/styles` folder (static/core)

Inject broadly prescriptive styles... [resets, css-custom-properties]

These are also non-thematic utility (non-atomic) styles.
They exist outside the design system eco-system.
Broadly, they can apply anywhere and they use the cascade.

### notes
Utility (atomic) styles are not broadly powerful...
Atomic styles aim to depend less on the cascade.
They are laser focused and work strongly on elements.
