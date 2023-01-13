const { parse } = require("csv-parse")
const fs = require("fs")

const result = []

fs.createReadStream("./data.csv")
	.pipe(
		parse({
			comment: "#",
			columns: true,
		})
	)
	.on("data", (data) => {
		result.push(data)
	})
	.on("error", (error) => {
		console.log(error)
	})
	.on("end", () => {
		console.log(result)
	})
