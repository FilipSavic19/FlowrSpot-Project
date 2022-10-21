import React from "react";
import ReportButton from "../components/Buttons/ReportButton";
import ViewOnGoogleMaps from "../components/Buttons/ViewOnGoogleMaps";
import SightingDetailCard from "../components/SightingDetailCard";
import Map from "../components/Map";
import "../Styles/SightingDetail.css";

const SightingDetail = () => {
  return (
    <div className="sightingDetail">
      <div className="sightingMap">
        <Map />
        <div className="sightingButtons">
          <ViewOnGoogleMaps />
          <ReportButton />
        </div>
      </div>
      <div className="sightingDetailCardProfile">
        <SightingDetailCard />
      </div>
    </div>
  );
};

export default SightingDetail;
