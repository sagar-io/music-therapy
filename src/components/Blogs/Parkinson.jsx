import { BlogBuilder } from "./BlogBuilder";

export const Parkinson = () => {
  const musicMeritsData = [
    "Research has shown that listening to classical music can have a calming effect on the mind and body, reducing stress and anxiety.",
    "Jazz music has been shown to have a positive effect on mental health by reducing stress, anxiety, and depression. Jazz features improvisation and creative expression, which can be cathartic and uplifting.",
    "Nature sounds, such as bird songs, ocean waves, and forest sounds, can be incredibly calming and soothing. These types of sounds can help reduce stress and promote relaxation.",
    "Listening to music with a positive message and upbeat tempo can help lift your mood and increase energy levels. This can include pop, rock, and hip hop music.",
  ];

  const musicDeMeritsData = [
    "Electonic Dance Music(EDM) is likely to contribute to feelings of isolation and loneliness, leading to more stress, causing regular physical and mental exhaustion and sleep deprivation",
    "Black metal which is already extreme by itself and add extremely severe depression to it, you'll get depressive suicidal black metal.",
    "Emo is a style of rock music characterized by melodic musicianship and expressive, often confessional lyrics.",
    "Nu metal bands talk about depression, substance abuse, and other dark subject matter.",
  ];

  return (
    <BlogBuilder
      musicDeMeritsData={musicDeMeritsData}
      musicMeritsData={musicMeritsData}
    />
  );
};
