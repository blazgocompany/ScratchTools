if (chrome.runtime.getManifest().version_name.toLowerCase().includes('beta')) {
    var style = document.createElement('style')
    style.innerHTML = `
    input:checked+.slider {
    background-color: #6f00ff;
    float: right;
}
input:focus+.slider {
    box-shadow: 0 0 1px #6f00ff;
    float: right;
}
.featureTitle {
    color: #6f00ff;
}
    `
    document.body.appendChild(style)
}