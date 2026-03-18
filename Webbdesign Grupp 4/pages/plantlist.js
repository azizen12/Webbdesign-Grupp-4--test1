import { createEl } from '../utils/dom.js';

export default function render() {
    return createEl('div', { className: 'container' },
        createEl('article', {},
            createEl('h2', {}, 'Plant List'),
            createEl('section', {},
                createEl('p', {}, 'Coming soon...'),
            ),
        ),
    );
}
