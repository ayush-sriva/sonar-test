import axios from "axios";

const LandingPageServie = {
  getLocation: async () => {
    try {
      const getLocationResponse = await axios.get(
        "http://localhost:4004/api/locations"
      );
      return getLocationResponse.data;
    } catch (error) {}
  },
  getSkills: async () => {
    try {
      const getSkillsResponse = await axios.get(
        "http://localhost:4004/api/skills"
      );
      return getSkillsResponse.data;
    } catch (error) {}
  },
};

export default LandingPageServie;
