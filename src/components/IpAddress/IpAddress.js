import React, { useEffect, useState } from "react";
import Stats from "../Stats/Stats";
import SearchBar from "../SeachBar/SearchBar";
import Map from "../Map/Map";
import axios from "axios";
import './IpAddress.css'

const IpAddress = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errExists, setErrExists] = useState(false);

  async function fetchLocation(ipAddress = "") {
    setIsLoading(true);
    setErrExists(false);
    const resp = await axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_u9fr4cYoEKVRx6dDi8tzPMEEhUJTC&ipAddress=${ipAddress}`
      )
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
        setErrExists(true);
        setIpAddress("");
        setLocation("");
        setIsp("");
        setTimeZone("");
        setCoordinates({});
      });
  
   try{ 
    setIpAddress(resp.data.ip);
    setLocation(`${resp.data.location.city}, ${resp.data.location.country}
    ${resp.data.location.postalCode}`);
    setTimeZone(`UTC ${resp.data.location.timezone}`);
    setIsp(`${resp.data.isp}`);
    setCoordinates({
      lat: resp.data.location.lat,
      long: resp.data.location.lng,
    });} catch(err){
      // console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="container">
      <SearchBar setIPAddress={setIpAddress} fetchLocation={fetchLocation} />
      <Stats
        ipAddress={ipAddress}
        location={location}
        timeZone={timeZone}
        isp={isp}
      />
      {(!isLoading && !errExists) && <Map coordinates={coordinates} />}
    </div>
  );
};

export default IpAddress;

