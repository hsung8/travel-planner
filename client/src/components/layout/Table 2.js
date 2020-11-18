import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
       super(props) 
       this.state = {
          travel: [
             { id: 1, category: 'Flights', price: 75, savedDate: 'Nov 14, 2020' },
             { id: 2, category: 'Hotels', price: 59, savedDate: 'Nov 12, 2020' },
            //  { id: 3, category: 'Rental Cars', price: 30, savedDate: 'Nov 10, 2020' },
             { id: 3, category: 'Activities', price: 40, savedDate: 'Nov 4, 2020' },
             { id: 4, category: 'Miscellaneous', price: 20, savedDate: 'Oct 8, 2020' }
          ]
       };
    };
 
    renderTableData() {
        return this.state.travel.map((travel, index) => {
           const { id, category, price, savedDate } = travel
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{category}</td>
                 <td>{price}</td>
                 <td>{savedDate}</td>
                 <td><button type="button">Delete</button></td>
              </tr>
           )
        });
    };

    renderTableHeader() {
        let header = Object.keys(this.state.travel[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        });
    };
  
    render() {
        return (
           <div>
              <table id='travel'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        );
    };
 };
 
 export default Table 