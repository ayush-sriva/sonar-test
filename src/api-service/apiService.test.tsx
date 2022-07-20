import { AxiosResponse } from "axios";
import axios from "axios";
import LandingPage from "./landingPage";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      put: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

const locationData: object[] = [
  { id: "1", name: "Hyderabad", pin: 151, aqi: 500 },
];
const skillData: object[] = [{ id: "1", name: "UI/UX Designer" }];

it("Testing create new application", async () => {
  mockedAxios.get.mockResolvedValueOnce(locationData);
  expect(axios.get).not.toHaveBeenCalled();

  const result = await LandingPage.getLocation();
  expect(axios.get).toHaveBeenCalled();
  expect(result).toEqual(locationData);
});
