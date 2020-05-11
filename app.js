/*function getData() {
  document.getElementById("data").innerHTML = "hello world";
}
*/

const getData = async () => {
  const tempResponse = await fetch(
    "https://api.particle.io/v1/devices/e00fce68c64a665630efeb01/Temperature?access_token=f9aa0737b9bf7ff0722132181296bfcc3c0197dc"
  );

  const humiResponse = await fetch(
    "https://api.particle.io/v1/devices/e00fce68c64a665630efeb01/Humidity?access_token=f9aa0737b9bf7ff0722132181296bfcc3c0197dc"
  );

  const heatIndexResponse = await fetch(
    "https://api.particle.io/v1/devices/e00fce68c64a665630efeb01/HeatIndex?access_token=f9aa0737b9bf7ff0722132181296bfcc3c0197dc"
  );

  const tempJson = await tempResponse.json(); //extract JSON from the http response
  const humiJson = await humiResponse.json(); //extract JSON from the http response
  const heatIndexJson = await heatIndexResponse.json(); //extract JSON from the http response

  document.getElementById("temp-data").innerHTML = tempJson.result;
  document.getElementById("humi-data").innerHTML = humiJson.result;
  document.getElementById("heatindex-data").innerHTML = heatIndexJson.result;

  // for debugging

  console.log(tempJson);
  console.log(humiJson);
  console.log(heatIndexJson);
};
