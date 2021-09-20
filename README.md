
# Random NRIC Generator

This is a simple dockerized web application made using React, and [Ant Design](https://ant.design/). <br/>
When the button `Generate NRIC` is clicked, a unique NRIC will be generated. <br/>
The generated NRICs will be added to a table which will appear once at least one NRIC is generated. <br/>
The table is scrollable and has a pagination function which by default shows 20 NRICs per page. When at least 50 NRIC is generated, the option of displaying the NRICs an option to display 10, 20, 50, or 100 per page will appear. 

## App Demo 
<img src="https://github.com/josiahphua/random_nric_gen/raw/master/src/lib/nric_generator_example.gif" alt="App Demo Gif" style="width: 50%;">
As I was using an external recording app, the quality of the app is not the same the as the gif above. 

## Testing
Simple Testing is done to check for rendering and proper functioning of component. <br/>
Run tests using `npm test`

## Docker 
Run the following commands to use in Docker.<br/>
    - `docker build -t rng_dockerimage:dev .`<br/>
    - `docker-compose build`<br/>
    - `docker-compose up`<br/>

To run application please use `localhost:3000`.










### Done by Josiah Phua