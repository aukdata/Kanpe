document.getElementById("file_selector").addEventListener("change", e => {
    const f = e.target.files[0]

    if (f.name.match(".+\.xlsx")) {
        const reader = new FileReader()
        reader.addEventListener("load", e => {
            const workbook = XLSX.read(reader.result, {
                type: "binary"
            })
            const sections = getArrayOfParts(workbook, false)
            console.log(sections)
            for (i in sections) {
                addDownloadLink(workbook.SheetNames[i] + ".json", JSON.stringify({
                    title: workbook.SheetNames[i],
                    parts: sections[i]
                }))
            }
        })
        reader.readAsBinaryString(f)
    } else {
        alert(".xlsxファイルではありません")
    }
})

function addDownloadLink(fileName, content) {
    const blob = new Blob([content])
    const url = window.URL || window.webkitURL
    const blobURL = url.createObjectURL(blob)

    const a = document.createElement("a")
    a.download = fileName
    a.href = blobURL
    a.textContent = fileName

    const ui = document.createElement("li")
    ui.appendChild(a)

    document.getElementById("converted_files").appendChild(ui)
}