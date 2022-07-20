import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import Myntra from "../../../assets/icons/myntra.svg";
import FilteredJobList from ".";
it("JobListCard should Render", () => {
  render(
    <FilteredJobList
      title="Recommended for you"
      subHeading="Based on your skills"
      jobs={[
        {
          id: 1,
          time: "4 days ago",
          title: "User Experience Designer",
          companyName: "Myntra",
          companyIcon: Myntra,
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
      ]}
      onClick={jest.fn()}
      jobObj={{
        id: 1,
        time: "4 days ago",
        title: "User Experience Designerr",
        companyName: "Myntraa",
        companyIcon: Myntra,
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
      }}
      currindex={1}
    />
  );
  const companyName = screen.getByText("Myntra");
  expect(companyName).toBeInTheDocument();
  const companyPost = screen.getByText("User Experience Designer");
  expect(companyPost).toBeInTheDocument();
});
