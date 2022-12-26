const http = require("http");
const Reader = require("@maxmind/geoip2-node").Reader;
const ip = require("ip");

http
  .createServer(async (req, res) => {
    // Get the user's IP address
    const userIP = ip.address();
    console.log(`Received request from IP address: ${userIP}`);

    // Get the user's country based on their IP address
    let country = "";
    try {
      const reader = await Reader.open("./GeoLite2-Country.mmdb");
      const response = reader.country(userIP);
      country = response.country.isoCode;
      console.log(`Country for IP address ${userIP}: ${country}`);
    } catch (error) {
      console.error(error);
    }

    // Check if the request is for the '/api/country' endpoint
    if (req.url === "/api/country") {
      // Set the response headers and status code
      res.writeHead(200, { "Content-Type": "application/json" });

      // Write the response body
      res.write(JSON.stringify({ country: country }));

      // End the response
      res.end();
    } else {
      // Set the response headers and status code for other requests
      res.writeHead(200, { "Content-Type": "text/plain" });

      // Write the response body for other requests
      res.write(`User's country: ${country}`);

      // End the response
      res.end();
    }
  })
  .listen(3000);
