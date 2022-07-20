import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import Myntra from "../../../assets/icons/myntra.svg";
import JobList from ".";
it("JobListCard should Render", () => {
  render(
    <JobList
      title="Recommended for you"
      subHeading="Based on your skills"
      jobs={[
        {
          companyLogo: {Myntra},
          company: "Myntra",
          post: "User Experience Designer",
          location: "Hitech city, Hyderabad - 500072",
          time: "45 days ago",
        },
      ]}
      onClick={jest.fn()}
    />
  );
  const companyName = screen.getByTestId("joblistcard");
  expect(companyName).toBeInTheDocument();
});
