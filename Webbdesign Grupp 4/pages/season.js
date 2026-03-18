import { createEl } from '../utils/dom.js';

export default function render() {
    return createEl('div', { className: 'container' },
        createEl('article', {},
            createEl('h2', {}, 'Welcome!'),
            createEl('section', {},
                createEl('p', {}, 'On this page, you will find all kinds of tips and tricks to start your very own plant cultivation!'),
                createEl('p', {}, 'Information about both vegetables and herbs can be found on this site.'),
                createEl('p', {}, 'We also have a section that takes the seasons into consideration.'),
            ),
        ),
        createEl('img', { src: 'img/image1.png', alt: 'A beautiful sunflower in a garden', width: '500' }),
    );
}
