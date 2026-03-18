/**
 * Creates a DOM element with optional attributes and children.
 * @param {string} tag - The HTML tag name.
 * @param {Object} attrs - Key/value pairs of attributes (use "className" for class).
 * @param {...(HTMLElement|string)} children - Child elements or text strings.
 * @returns {HTMLElement}
 */
export function createEl(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    for (const [attrName, attrValue] of Object.entries(attrs)) {
        if (attrName === 'className') {
            element.className = attrValue;
        } else {
            element.setAttribute(attrName, attrValue);
        }
    }
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    }
    return element;
}
