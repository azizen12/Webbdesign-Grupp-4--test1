import { createEl } from '../utils/dom.js';

export default function render() {
    return createEl('div', { className: 'container' },
        createEl('article', {},
            createEl('h2', {}, 'Welcome!'),
            createEl('section', {},
                createEl('p', {}, 'This is a page regarding all kinds of information and help about growing your own plants.'),
                createEl('p', {}, 'We got sections about seasonal plants as well as a catalogue of plants'),
                createEl('p', {}, 'We hope that you will enjoy your visit'),
            ),
        ),
        createEl('img', { src: 'img/image1.png', alt: 'A beautiful sunflower in a garden', width: '500' }),
    );
}
