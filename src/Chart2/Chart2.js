import {Pie} from 'react-chartjs-2'
import React, {Component} from 'react'
import axios from 'axios'

class Chart extends Component {
    componentDidMount(){
        axios.get(`/budget`)
        .then(res => {
            for(var i = 0; i<res.data.length; i++){
                this.title.charData.datasets[0].data[i] = res.data[i].budget;
                this.title.chartData.label[i] = res.data[i].title;
            }
            
        });
    }
    constructor(props){
        super(props);
        this.title = {
            chartData:{
                label: [],
                datasets: [{
                    data: [],
                    backgroundColor:[
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#f66b19',
                        '#90f542',
                        '#bc34d1',
                        '#33cccc'
                    ]
                }
                ]
            }

        }
    }




    render(){
        return(
            <div className="chart">
               <Pie data={{
                   labels: this.title.chartData.label,
                   datasets: this.title.chartData.datasets
               }} />
            </div>

    )
    }
}

export default Chart;