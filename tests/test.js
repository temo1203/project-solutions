fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipAddress = data.ip;
    console.log("Your public IP address is:", ipAddress);
  })
  .catch((error) => {
    console.error("Error fetching IP address:", error);
  });
