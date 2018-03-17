// (c) 2018 aukdata
function convertXlsx(data) {
    const workbook = XLSX.read(data, {
        type: "binary"
    })

    return getArrayOfParts(workbook).reduce((a, b) => {
        Array.prototype.push.apply(a, b)
        return a
    })
}

function getArrayOfParts(workbook, prefix = true) {
    const multiple = workbook.Sheets.length != 1

    return workbook.SheetNames.map(sheetName => {
        const raw = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName], {
                raw: true,
            }
        )

        return convertData(multiple && prefix ? sheetName : "", raw)
    })
}

function convertData(name, raw) {
    header = raw[0]

    let periodColumn = "",
        contentColumn = ""
    for (key in header) {
        switch (header[key]) {
            case "時間":
            case "時間(分)":
                periodColumn = key
                break;
            case "内容":
            case "内容(スライド名)":
                contentColumn = key
                break;
        }
    }
    if (periodColumn == "" || contentColumn == "")
        return []

    let parts = []
    for (row of raw.slice(1)) {
        if (periodColumn in row) {
            let milliseconds = row[periodColumn] * 60 * 1000, contents = row[contentColumn]

            if (contents == null) {
                contents = "───"
            }
            const dict = {
                milliseconds: milliseconds,
                contents: (name === "" ? "" : name + " - ") + contents
            }
            parts.push(dict)
        } else {
            parts[parts.length - 1].contents += " ・ " + contents
        }
    }
    return parts
}