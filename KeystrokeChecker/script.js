const content = document.querySelector("#content")

window.addEventListener('keydown', function(e){
    const x =
    `
    <table>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    <tr> 
    <tr>
        <td>${e.key === " " ? "Space":e.key}</td>
        <td>${e.keyCode}</td> 
        <td>${e.code}</td>
    <tr> 
    </table>
    `
    content.innerHTML = x;
})