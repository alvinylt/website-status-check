const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
if (xhr.readyState === 4) {
    xhr.status === 200 ? document.write('OK') : document.write('Error')
}
}
xhr.open('GET', 'https://alvinylt.net')
xhr.send()