// (c) 2018 aukdata
document.addEventListener("DOMContentLoaded", e => {
    document.getElementById("xlsx_sample").addEventListener("click", e => {
        downloadSample()
    })

    function downloadSample(json) {
        const workbook = {"Directory":{"workbooks":["/xl/workbook.xml"],"sheets":["/xl/worksheets/sheet1.xml"],"charts":[],"dialogs":[],"macros":[],"rels":[],"strs":["/xl/sharedStrings.xml"],"comments":[],"links":[],"coreprops":["/docProps/core.xml"],"extprops":["/docProps/app.xml"],"custprops":[],"themes":["/xl/theme/theme1.xml"],"styles":["/xl/styles.xml"],"vba":[],"drawings":[],"TODO":[],"xmlns":"http://schemas.openxmlformats.org/package/2006/content-types","calcchain":"","sst":"/xl/sharedStrings.xml","style":"/xl/styles.xml","defaults":{"rels":"application/vnd.openxmlformats-package.relationships+xml","xml":"application/xml"}},"Workbook":{"AppVersion":{"appName":"xl","lastEdited":"7","lowestEdited":"7","rupBuild":"10410"},"WBProps":{"defaultThemeVersion":166925,"allowRefreshQuery":false,"autoCompressPictures":true,"backupFile":false,"checkCompatibility":false,"CodeName":"","date1904":false,"filterPrivacy":false,"hidePivotFieldList":false,"promptedSolutions":false,"publishItems":false,"refreshAllConnections":false,"saveExternalLinkValues":true,"showBorderUnselectedTables":true,"showInkAnnotation":true,"showObjects":"all","showPivotChartFilter":false,"updateLinks":"userSet"},"WBView":[{"xWindow":"0","yWindow":"0","windowWidth":"28800","windowHeight":"18000","uid":"{AB07E78F-20AF-4A4E-92B8-B8AECC9D92C3}","activeTab":0,"autoFilterDateGrouping":true,"firstSheet":0,"minimized":false,"showHorizontalScroll":true,"showSheetTabs":true,"showVerticalScroll":true,"tabRatio":600,"visibility":"visible"}],"Sheets":[{"name":"Sheet1","sheetId":"1","id":"rId1","Hidden":0}],"CalcPr":{"calcId":"162913","calcCompleted":"true","calcMode":"auto","calcOnSave":"true","concurrentCalc":"true","fullCalcOnLoad":"false","fullPrecision":"true","iterate":"false","iterateCount":"100","iterateDelta":"0.001","refMode":"A1"},"Names":[],"xmlns":"http://schemas.openxmlformats.org/spreadsheetml/2006/main"},"Props":{"LastAuthor":"Kanpe","Author":"Kanpe","CreatedDate":"1970-01-01T00:00:00.000Z","ModifiedDate":"1970-01-01T00:00:00.000Z","Application":"Microsoft Macintosh Excel","AppVersion":"16.0300","Company":"","DocSecurity":"0","HyperlinksChanged":false,"SharedDoc":false,"LinksUpToDate":false,"ScaleCrop":false,"Worksheets":1,"SheetNames":["Sheet1"]},"Custprops":{},"Deps":{},"Sheets":{"Sheet1":{"!ref":"B2:C6","B2":{"t":"s","v":"時間(分)","r":"<t>時間(分)</t><rPh sb=\"0\" eb=\"2\"><t>ジカn</t></rPh><phoneticPr fontId=\"1\"/>","h":"時間(分)","w":"時間(分)"},"C2":{"t":"s","v":"内容","r":"<t>内容</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容","w":"内容"},"B3":{"t":"n","v":1,"w":"1"},"C3":{"t":"s","v":"イントロダクション","r":"<t>イントロダクション</t><rPh sb=\"0\" eb=\"1\"><t>ダク</t></rPh><phoneticPr fontId=\"1\"/>","h":"イントロダクション","w":"イントロダクション"},"B4":{"t":"n","v":5,"w":"5"},"C4":{"t":"s","v":"内容1","r":"<t>内容1</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容1","w":"内容1"},"C5":{"t":"s","v":"内容2","r":"<t>内容2</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容2","w":"内容2"},"C6":{"t":"s","v":"内容3","r":"<t>内容3</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容3","w":"内容3"},"!margins":{"left":0.7,"right":0.7,"top":0.75,"bottom":0.75,"header":0.3,"footer":0.3},"!merges":[{"s":{"c":1,"r":3},"e":{"c":1,"r":5}}]}},"SheetNames":["Sheet1"],"Strings":[{"t":"時間(分)","r":"<t>時間(分)</t><rPh sb=\"0\" eb=\"2\"><t>ジカn</t></rPh><phoneticPr fontId=\"1\"/>","h":"時間(分)"},{"t":"内容","r":"<t>内容</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容"},{"t":"内容1","r":"<t>内容1</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容1"},{"t":"内容2","r":"<t>内容2</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容2"},{"t":"内容3","r":"<t>内容3</t><rPh sb=\"0\" eb=\"2\"><t>ナイヨウ</t></rPh><phoneticPr fontId=\"1\"/>","h":"内容3"},{"t":"イントロダクション","r":"<t>イントロダクション</t><rPh sb=\"0\" eb=\"1\"><t>ダク</t></rPh><phoneticPr fontId=\"1\"/>","h":"イントロダクション"}],"Styles":{"Fonts":[{"sz":12,"color":{"theme":1},"name":"æ¸¸ã´ã·ãã¯","family":2,"scheme":"minor"},{"sz":6,"name":"æ¸¸ã´ã·ãã¯","family":2,"scheme":"minor"}],"Fills":[{"patternType":"none"},{"patternType":"gray125"}],"Borders":[{},{},{},{}],"CellXf":[{"numFmtId":0,"fontId":0,"fillId":0,"borderId":0,"xfId":0,"alignment":{"vertical":"center"}},{"numFmtId":0,"fontId":0,"fillId":0,"borderId":1,"xfId":0,"applyBorder":true,"applyAlignment":true,"alignment":{"horizontal":"center"}},{"numFmtId":0,"fontId":0,"fillId":0,"borderId":2,"xfId":0,"applyBorder":true,"applyAlignment":true,"alignment":{"vertical":"center","horizontal":"center"}},{"numFmtId":0,"fontId":0,"fillId":0,"borderId":2,"xfId":0,"applyBorder":true,"applyAlignment":true},{"numFmtId":0,"fontId":0,"fillId":0,"borderId":3,"xfId":0,"applyBorder":true,"applyAlignment":true,"alignment":{"vertical":"center","horizontal":"center"}},{"numFmtId":0,"fontId":0,"fillId":0,"borderId":3,"xfId":0,"applyBorder":true,"applyAlignment":true}]},"Themes":{},"SSF":{"0":"General","1":"0","2":"0.00","3":"#,##0","4":"#,##0.00","9":"0%","10":"0.00%","11":"0.00E+00","12":"# ?/?","13":"# ??/??","14":"m/d/yy","15":"d-mmm-yy","16":"d-mmm","17":"mmm-yy","18":"h:mm AM/PM","19":"h:mm:ss AM/PM","20":"h:mm","21":"h:mm:ss","22":"m/d/yy h:mm","37":"#,##0 ;(#,##0)","38":"#,##0 ;[Red](#,##0)","39":"#,##0.00;(#,##0.00)","40":"#,##0.00;[Red](#,##0.00)","45":"mm:ss","46":"[h]:mm:ss","47":"mmss.0","48":"##0.0E+0","49":"@","56":"\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"","65535":"General"}}

        XLSX.writeFile(workbook, "sample.xlsx")
    }

    document.getElementById("file_selector").addEventListener("change", e => {
        const f = e.target.files[0]

        if (f.name.match(".+\.xlsx")) {
            const reader = new FileReader()
            reader.addEventListener("load", e => {
                const workbook = XLSX.read(reader.result, {
                    type: "binary"
                })
                const sections = getArrayOfParts(workbook, false)

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
})
