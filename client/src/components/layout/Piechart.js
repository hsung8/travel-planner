import React, { Component } from "react";
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Flights', 'Hotels', 'Rental Cars',
             'Activities', 'Miscellaneous'],
    datasets: [
      {
        label: 'Travel Budgets',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [75, 59, 30, 40, 20]
      }
    ]
  }
  

class Piechart extends Component {
        render() {
          return (
            <div>    
            <Doughnut
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Travel Budgets',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
        );
      }
    
}

export default Piechart;