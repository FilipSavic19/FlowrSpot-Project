import React from "react";
import ReportButton from "../components/Buttons/ReportButton";
import ViewOnGoogleMaps from "../components/Buttons/ViewOnGoogleMaps";
import SightingDetailCard from "../components/SightingDetailCard";
import Map from "../components/Map";
import "../Styles/SightingDetail.css";
import CommentsList from "../components/CommentsList";

const SightingDetail = () => {
  return (
    <div className="sightingDetail">
      <div className="sightingMap">
        <Map />
        <div className="sightingButtons">
          <div className="view-report-buttons">
            <ViewOnGoogleMaps />
            <ReportButton />
          </div>
        </div>
      </div>
      <div className="sightingDetailCardProfile">
        <SightingDetailCard />
      </div>
      <div className="listOfComments">
        <CommentsList />
      </div>
    </div>
  );
};

export default SightingDetail;
