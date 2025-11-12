import { type FunctionComponent, render } from 'preact'
import { html } from 'htm/preact'
import '@substrate-system/css-normalize'

const Example:FunctionComponent<unknown> = function () {
    return html`<div>
        <h1>This is an example</h1>
    </div>`
}

render(html`<${Example} />`, document.getElementById('root')!)
