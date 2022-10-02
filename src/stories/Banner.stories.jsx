import { Banner } from "./Banner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Albatross/Banner",
  component: Banner,
};

const props = {
  name: "minju",
  level: 99,
  hp: 20,
  mp: 48,
  color: {
    hpColor: "#47B5FF",
    mpColor: "#FF577F",
  },
};

export const Primary = () => {
  return <Banner {...props} />;
};
