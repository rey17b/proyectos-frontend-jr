//import Json data from file
const data = fetch('data.json')
.then(response => response.json())
.then(data => {
	console.log(data)
	return data
	//console.log(data.products)
} 
)
.catch(error => console.log(error))

// convert data into array
let chartContainer = document.querySelector('chart-container')

// map through data and poulate chart
data.then(data =>{
	data.forEach(item =>{
		let chart = document.createElement('div')
		chart.classList.add('chart')
		chart.innerHTML =`
		<div class="chart-value">${item.amount}</div>
		<div class="chart-title">${item.day}</div>
		`
		chartContainer.appendChild(chart)
	}
	)
}
)


