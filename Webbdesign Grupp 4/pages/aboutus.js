import { createEl } from '../utils/dom.js';

export default function render() {
    return createEl('div', { className: 'container' },
        createEl('article', {},
            createEl('h2', {}, 'About Us'),
            createEl('section', {},
                createEl('p', {}, 'On this page, you will find all sorts of tips and tricks to start your own plant cultivation!'),
                createEl('p', {}, 'Information about both vegetables and herbs can be found on this site.'),
                createEl('p', {}, 'We also have a section that takes the seasons into consideration.'),
            ),
        ),
        createEl('img', { src: 'img/image2.jpg', alt: 'A beautiful sunflower in a garden', width: '500' }),
    );
}
