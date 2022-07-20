import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import theme from "./theme/index";
import "./styles.css";
import Sidebar from "./components/templates/sidebar";
import FindJobs from "./components/pages/findJobs";
import SavedJobs from "./components/pages/savedJobs";
import { useEffect, useState } from "react";
import { baseUrl } from "./baseUrl";
import axios from "axios";
export const App = () => {
  const history = useLocation();
  const [jobs, setJobs] = useState<any>(null);
  const [savedJobs, setSavedJobs] = useState<any>(null);
  const [index, setIndex] = useState<number>(1);
  const [userLocation, getUserLocation] = useState<string>("");
  useEffect(() => {
    const processor = async () => {
      let res = await axios.get(`${baseUrl}jobs`, {
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      let jobs = await res.data;
      setJobs(jobs);
    };
    processor();
    const savedJobprocessor = async () => {
      let res = await axios.get(`${baseUrl}savedJobs`, {
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      let savedJobs = await res.data;
      setSavedJobs(savedJobs);
    };
    savedJobprocessor();
  }, []);
  useEffect(() => {
    history.pathname === "/jobs/findjobs" ? setIndex(1) : setIndex(2);
  }, [history]);
  return (
    <MUIThemeProvider theme={theme}>
      <Routes>
        <Route
          index
          element={<LandingPage getUserLocation={getUserLocation} />}
        />
        <Route
          path="jobs"
          element={
            <Sidebar
              location={userLocation}
              setJobs={setJobs}
              jobs={jobs}
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
              index={index}
            />
          }
        >
          <Route
            path="savedjobs"
            element={<SavedJobs jobs={savedJobs} setJobs={setSavedJobs} />}
          ></Route>
          <Route
            path="findjobs"
            element={<FindJobs jobs={jobs} setJobs={setJobs} />}
          ></Route>
        </Route>
      </Routes>
    </MUIThemeProvider>
  );
};
