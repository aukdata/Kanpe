(() => {
    function formatTime(milisecond) {
        let second = Math.floor(Math.abs(milisecond) / 1000) % 60
        let minute = Math.floor(Math.abs(milisecond) / 1000 / 60) % 60
        let hour = Math.floor(Math.abs(milisecond) / 1000 / 60 / 60)
        return (milisecond > 0 ? "" : "- ") + (hour > 0 ? hour + "h " : "") + minute + "m " + second + "s"
    }
    function sum(arr) {
        return arr.reduce((a, b) => a + b)
    }

    let section_start_time = 0
	let elapsed_time_till_prev_part = 0
	let part_lap_elapsed_time = []

    let section_title = ""
    let parts = null
    let index = 0

    document.addEventListener("DOMContentLoaded", () => {
        const element_section_title = document.getElementById("section_title")
        const element_section_elapsed_time = document.getElementById("section_elapsed_time")
        const element_section_remaining_time = document.getElementById("section_remaining_time")
        const element_gap_time = document.getElementById("gap_time")

        const element_present_part_contents = document.getElementById("present_part_contents")
        const element_present_part_elapsed_time = document.getElementById("present_part_elapsed_time")
        const element_present_part_remaining_time = document.getElementById("present_part_remaining_time")

        const element_next_part_contents = document.getElementById("next_part_contents")


        function updatePart() {
            if (parts != null) {
				element_present_part_contents.textContent = index < parts.length ? parts[index].contents : "───"
				element_next_part_contents.textContent = index + 1 < parts.length ? parts[index + 1].contents : "───"
			} else {
				element_present_part_contents.textContent = "───"
				element_next_part_contents.textContent = "───"
			}
        }
        function updateTime() {
            if (parts == null) return

			let elapsed_time = Date.now() - section_start_time
            element_section_elapsed_time.textContent = formatTime(elapsed_time)
			let planned_section_period = parts[parts.length - 1].until
            element_section_remaining_time.textContent = formatTime(planned_section_period - elapsed_time)

			let gap_period = 0
			let present_part_ending_elapsed_time = (index - 1 >= 0 ? part_lap_elapsed_time[index - 1] : 0) + parts[index].periodms
			if (elapsed_time > present_part_ending_elapsed_time) {
                gap_period = elapsed_time_till_prev_part - (index - 1 >= 0 ? parts[index - 1].until : 0) + elapsed_time - present_part_ending_elapsed_time
            } else {
                gap_period = elapsed_time_till_prev_part - (index - 1 >= 0 ? parts[index - 1].until : 0)
            }
            element_gap_time.textContent = formatTime(gap_period)

			let present_part_elapsed_time = elapsed_time - (index - 1 >= 0 ? part_lap_elapsed_time[index - 1] : 0)
			element_present_part_elapsed_time.textContent = formatTime(present_part_elapsed_time)
			element_present_part_remaining_time.textContent = formatTime(parts[index].periodms - present_part_elapsed_time)
		}

        function nextPart() {
            if (parts == null) return

            index++
            if (index >= parts.length) parts = null

			let elapsed_time = Date.now() - section_start_time
			elapsed_time_till_prev_part = elapsed_time

			part_lap_elapsed_time.push(elapsed_time)

            updatePart()
		}

		function initialize() {
			let accumlation = 0
			for (part of parts) {
				accumlation += part.period
				part.until = accumlation * 60 * 1000
				part.periodms = part.period * 60 * 1000
			}

            element_section_title.textContent = section_title

            section_start_time = Date.now()
            elapsed_time_till_prev_part = 0

            index = 0

            updatePart()
            updateTime()

            // Update every 100ms
            window.setInterval(() => {
                updateTime()
            }, 100)

            // When screen is tappped
            document.addEventListener("click", () => {
                nextPart()
            })
        }

        // When json file loaded
        document.getElementById("file_selector").addEventListener("change", e => {
            const f = e.target.files[0]
            if (f.type === "application/json") {
                const reader = new FileReader()
                reader.readAsText(f)
                reader.addEventListener("load" , () => {
                    const data = JSON.parse(reader.result)
                    section_title = data.title
					parts = data.parts

                    initialize()
                })
            } else {
                alert("JSONではありません")
            }
        })
    })
})()
