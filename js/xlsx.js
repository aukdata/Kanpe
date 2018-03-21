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

function convertData(sheetName, raw) {
    header = raw[0]

    let periodColumn = "",
        contentColumn = ""
    for (key in header) {
        switch (key) {
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
    console.log(header, periodColumn, contentColumn)
    if (periodColumn == "" || contentColumn == "")
        return []

    let parts = []
    for (row of raw) {
        console.log(row, periodColumn, periodColumn in row)
        if (periodColumn in row) {
            const milliseconds = row[periodColumn] * 60 * 1000,
                contents = row[contentColumn]

            if (contents == null) {
                contents = "───"
            }
            parts.push({
                milliseconds: milliseconds,
                contents: (sheetName === "" ? "" : sheetName + " - ") + contents
            })
        } else {
            const contents = row[contentColumn]
            parts[parts.length - 1].contents += " ・ " + contents
        }
    }
    return parts
}