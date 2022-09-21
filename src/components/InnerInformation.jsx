import React from "react";

const InnerInformation = ( ) =>{
    return (
        <div className="innerinformation">
            <div className="left">
                 <table>
                    <tr>
                        <th>Father Name:</th>
                        <td>Cristino</td>
                    </tr>
                    <tr>
                        <th>Marital Status:</th>
                        <td>Single</td>
                    </tr>
                    <tr>
                        <th>Residential Address:</th>
                        <td>1206, Tower B, Millennium Plaza, Sushant Lok,<br></br>Gurgaon, Delhi, (22001)</td>
                    </tr>
                    <tr>
                        <th>Residential Address (Line 2) :</th>
                        <td>1206, Tower B, Millennium Plaza, Sushant Lok,<br></br>Gurgaon, Delhi, (22001)</td>
                    </tr>
                 </table>                
              </div>
              <div className="right">
                 <table>
                    <tr>
                        <th>Country: </th>
                        <td>India</td>
                    </tr>
                    <tr>
                        <th>State: </th>
                        <td>Maharastra</td>
                    </tr>
                    <tr>
                        <th>City:  </th>
                        <td>Delhi</td>
                    </tr>
                    <tr>
                        <th>Date Of Birth:</th>
                        <td>28/01/1993</td>
                    </tr>
                    <tr>
                        <th>Document Type :</th>
                        <td>PAN CARD</td>
                    </tr>
                    <tr>
                        <th>Document Number :</th>
                        <td>BTJPT12345</td>
                    </tr>
                 </table>
              </div>
        </div>
    )
}
export default InnerInformation;