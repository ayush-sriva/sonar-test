import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {App} from "./App";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
it("Registration Page Should Render", async () => {
  const jobs = [
    {
      id: 1,
      time: "4 days ago",
      title: "User Experience Designer",
      companyName: "Myntra",
      companyIcon: "/assets/icons/myntra.svg",
      location: "Hyderabad, Telangana, India",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      about:
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills  SEE MORE",
      greenCommute: true,
      experienceLevel: "Fresher",
      jobType: "Internship",
      datePosted: "Past 24 Hours",
      distance: "6",
    },
    {
      id: 2,
      time: "10 Days ago",
      title: "Product Designer",
      companyName: "BMW",
      companyIcon: "/assets/icons/bmw.svg",
      location: "Hyderabad , Telangana,India",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      about:
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
      greenCommute: true,
      experienceLevel: "Mid Level",
      jobType: "Contract",
      datePosted: "Past Week",
      distance: "22",
    },
  ];

  const savedJobs = [
    {
      id: 1,
      time: "4 days ago",
      title: "User Experience Designer",
      companyName: "Myntra",
      companyIcon: "/assets/icons/myntra.svg",
      location: "Hyderabad, Telangana, India",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      about:
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills  SEE MORE",
      greenCommute: true,
      experienceLevel: "Fresher",
      jobType: "Internship",
      datePosted: "Past 24 Hours",
      distance: "6",
    },
    {
      id: 2,
      time: "10 Days ago",
      title: "Product Designer",
      companyName: "BMW",
      companyIcon: "/assets/icons/bmw.svg",
      location: "Hyderabad , Telangana,India",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      about:
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products. Excellent written and oral communication and presentation skills  SEE MORE",
      greenCommute: true,
      experienceLevel: "Mid Level",
      jobType: "Contract",
      datePosted: "Past Week",
      distance: "22",
    },
  ];
  const resp = { jobs: jobs, savedJobs: savedJobs };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
