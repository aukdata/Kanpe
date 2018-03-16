(() => {
	function formatTime(milisecond) {
		let second = Math.floor(Math.abs(milisecond) / 1000) % 60
		let minute = Math.floor(Math.abs(milisecond) / 1000 / 60) % 60
		let hour = Math.floor(Math.abs(milisecond) / 1000 / 60 / 60)

		return (milisecond > -1000 ? "" : "- ") +
			(hour > 0 ? hour + "h " : "") +
			(minute > 0 ? minute + "m " : "") + second + "s"
	}

	let section_timer = new Timer()
	let part_timer = new Timer()
	let part_lap_elapsed_time = []

	let section_title = ""
	let parts = null
	let index = 0

	const element_section_title = document.getElementById("section_title")

	const element_section_elapsed_time_bar = document.getElementById("section_elapsed_time_bar")
	const element_section_remaining_time_bar = document.getElementById("section_remaining_time_bar")

	const element_section_elapsed_time = document.getElementById("section_elapsed_time")
	const element_section_remaining_time = document.getElementById("section_remaining_time")

	const element_gap_time = document.getElementById("gap_time")


	const element_present_part_contents = document.getElementById("present_part_contents")

	const element_present_part_elapsed_time_bar = document.getElementById("present_part_elapsed_time_bar")
	const element_present_part_remaining_time_bar = document.getElementById("present_part_remaining_time_bar")

	const element_present_part_elapsed_time = document.getElementById("present_part_elapsed_time")
	const element_present_part_remaining_time = document.getElementById("present_part_remaining_time")

	const element_next_part_contents = document.getElementById("next_part_contents")


	// When json file loaded
	document.getElementById("file_selector").addEventListener("change", e => {
		const f = e.target.files[0]
		const reader = new FileReader()
		reader.readAsText(f)
		reader.addEventListener("load", () => {
			const data = JSON.parse(reader.result)
			section_title = data.title
			parts = data.parts

			element_section_title.textContent = section_title
			initializeSection()
		})
	})

	// When screen is tappped
	document.addEventListener("click", () => {
		nextPart()
	})

	// Update every 100ms
	window.setInterval(() => {
		updateTime()
	}, 100)


	function initializeSection() {
		calcEndTime()

		section_timer.start()
		part_timer.start()
		pause()

		index = 0
		part_lap_elapsed_time = []

		updatePart()
		updateTime()

		element_pause_button.style.height = "80px"
	}

	function calcEndTime() {
		let accumlation = 0
		for (part of parts) {
			accumlation += part.period
			part.until = accumlation * 60 * 1000
			part.periodms = part.period * 60 * 1000
		}
	}

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

		let elapsed_time = section_timer.milliseconds()
		let remaining_time = parts[parts.length - 1].until - elapsed_time
		updateGraph(element_section_elapsed_time, element_section_remaining_time,
			element_section_elapsed_time_bar, element_section_remaining_time_bar,
			elapsed_time, remaining_time)


		let gap_period = 0
		let elapsed_time_till_prev_part = index - 1 >= 0 ? part_lap_elapsed_time[index - 1] : 0
		let planned_elapsed_time_till_prev_part = index - 1 >= 0 ? parts[index - 1].until : 0
		let present_part_ending_elapsed_time = elapsed_time_till_prev_part + parts[index].periodms

		if (elapsed_time > present_part_ending_elapsed_time) {
			gap_period = elapsed_time_till_prev_part - planned_elapsed_time_till_prev_part + elapsed_time - present_part_ending_elapsed_time
		} else {
			gap_period = elapsed_time_till_prev_part - planned_elapsed_time_till_prev_part
		}
		element_gap_time.textContent = (gap_period == 0 ? "± " : (gap_period < 0 ? "- " : "+ ")) + formatTime(Math.abs(gap_period))


		let present_part_elapsed_time = part_timer.milliseconds()
		let present_part_remaining_time = parts[index].periodms - present_part_elapsed_time
		updateGraph(element_present_part_elapsed_time, element_present_part_remaining_time,
			element_present_part_elapsed_time_bar, element_present_part_remaining_time_bar,
			present_part_elapsed_time, present_part_remaining_time)
	}

	function updateGraph(element_elapsed_text, element_remaining_text, element_elapsed_bar, element_remaining_bar, elapsed, remaining) {
		element_elapsed_text.textContent = formatTime(elapsed)
		element_remaining_text.textContent = formatTime(remaining)

		if (remaining >= 0) {
			element_elapsed_bar.style.width = "" + (100 * elapsed / (remaining + elapsed)) + "%"
			element_remaining_bar.style.width = "" + (100 * remaining / (remaining + elapsed)) + "%"
		} else {
			element_elapsed_bar.style.width = "100%"
			element_remaining_bar.style.width = "0%"
		}
	}

	function nextPart() {
		if (parts == null) return

		part_lap_elapsed_time.push(section_timer.milliseconds())

		if (index + 1 < parts.length) {
			part_timer.start()
			if (section_timer.isPausing()) {
				part_timer.pause()
			}
		} else {
			finishSection()
		}

		index++
		updatePart()
	}

	function finishSection() {
		element_pause_button.style.height = "0px"
		updateTime()
		parts = null
	}


	const element_pause_button = document.getElementById("pause_button")
	const element_pause_image_left = document.getElementById("pause_button_image_left")
	const element_pause_image_right = document.getElementById("pause_button_image_right")

	element_pause_button.addEventListener("click", e => {
		if (parts != null) {
			if (section_timer.isPausing()) {
				remuse()
			} else {
				pause()
			}
		}
		e.stopPropagation()
	})

	function pause() {
		section_timer.pause()
		part_timer.pause()

		element_pause_button.style.background = "limegreen"
		element_pause_image_left.className = "play"
		element_pause_image_right.className = "play"
	}

	function remuse() {
		section_timer.remuse()
		part_timer.remuse()

		element_pause_button.style.background = "red"
		element_pause_image_left.className = "pause"
		element_pause_image_right.className = "pause"
	}
})()