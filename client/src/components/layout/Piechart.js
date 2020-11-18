import React, { Component } from "react";
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Flights', 'Hotels',
             'Activities', 'Miscellaneous'],
    datasets: [
      {
        label: 'Travel Budgets',
        backgroundColor: [
          '#d92027',
          '#50d890',
          
          '#0278ae',
          '#9818d6'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        
        '#003350',
        '#35014F'
        ],
        data: [75, 59, 40, 20]
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