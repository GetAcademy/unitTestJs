function reverseText(text) {
    if (text == null) return null;
    return text.split('').reverse().join('');
}