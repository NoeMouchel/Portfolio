export function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

export function AddRootStyle(property) {
    addStyle(`:root {
        ${property}
    }`);
}

