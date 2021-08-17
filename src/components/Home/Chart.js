import {Line} from "react-chartjs-2";



function Chart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [

            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                lineTension:0.5,
                borderColor: "#cacecf",
                // stepped: true
                borderDash: [1, 1],
                borderDashOffset: 5
            },
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                lineTension:0.5,
                backgroundColor:  "#cc5e6e",
                borderColor: "#c42f2f"
            },
        ],

    };

    return (

        <div className="App">

                      <Line data={data}  options= {{ plugins: { legend: { display: false}}}}/>
                    </div>

    )
}

export default Chart;

