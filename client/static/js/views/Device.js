import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Device");
        }
        async getHtml() {
            return `
            <h1>Device</h1>
            <p>
                List of All Devices
            </p>
            <p>
                    <a href="/api/v1/device" class='nav__link' data-link>Device</a>.
            </p>





            <form action="http://localhost:3001/api/v1/device" method="post">
            
            <div class="container">
              <label for="name"><b>Devicename</b></label>
              <input type="text" placeholder="Enter devicename" name="name" required>
          
              <label for="type"><b>DeviceType</b></label>
              <input type="text" placeholder="Enter Device type" name="type" required>
              
              <label for="description"><b>Device Description</b></label>
              <input type="text" placeholder="Enter Device description" name="description" required>
              
              <label for="version"><b>Device version</b></label>
              <input type="number" placeholder="Enter Device version" name="version" required>
          
              <label for="tempSenseUUID"><b>tempSenseUUID</b></label>
              <input type="number" placeholder="Enter tempSenseUUID" name="tempSenseUUID" required>
          
              <label for="masterDeviceUUID"><b>Device masterDeviceUUID</b></label>
              <input type="number" placeholder="Enter masterDeviceUUID" name="masterDeviceUUID" required>
              
              <label for="masterDeviceType"><b>Device masterDeviceType</b></label>
              <input type="text" placeholder="Enter masterDeviceType" name="masterDeviceType" required>
              
              <label for="createdBy"><b>Device createdBy</b></label>
              <input type="text" placeholder="Enter createdBy" name="createdBy" required>
              
              <label for="updatedBy"><b>Device createdBy</b></label>
              <input type="text" placeholder="Enter updatedBy" name="updatedBy" required>
              
              <button type="submit">Add Device</button>
            
            </div>
          
            
            </form> 
            `;
            
        }
}   