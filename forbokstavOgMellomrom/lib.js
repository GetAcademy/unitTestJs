function fixText(txt){
    const fixedText = txt.trim();    
    return fixedText[0].toUpperCase() + fixedText.substr(1).toLowerCase();
}