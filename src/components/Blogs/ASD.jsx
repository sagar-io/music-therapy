import { BlogBuilder } from "./BlogBuilder";

export const Asd = () => {
  const musicMeritsData = [
    "Simplified Music and predictable can be beneficial for individuals with ASD. Simple melodies, rhythms, and lyrics can be easier to understand and process, helping individuals feel more confident and comfortable.",
    "Folk music can be helpful for individuals with ASD, as it often features simple melodies, acoustic instruments, and storytelling lyrics. This can make the music more engaging and easier to understand.",
    "Soundscapes refer to music that creates an immersive sonic environment. This can be helpful for individuals with ASD who may be sensitive to environmental stimuli. Soundscapes can provide a sense of comfort and stability and help individuals with ASD feel more grounded and centered.",
    "Hip-hop music can be helpful for individuals with ASD who are seeking a musical experience that is more rhythmic and lyrical. Many individuals with ASD enjoy the beats and rhymes of hip-hop music, which can provide a sense of excitement and engagement.",
  ];

  const musicDeMeritsData = [
    "Music that is loud, fast-paced, and aggressive, such as heavy metal or punk rock, can be overwhelming and overstimulating for individuals with ASD who are sensitive to sensory stimuli.",
    "Black metal which is already extreme by itself and add extremely severe depression to it, you'll get depressive suicidal black metal.",
    "Emo is a style of rock music characterized by melodic musicianship and expressive, often confessional lyrics.",
    "Music with explicit or violent lyrics: Music with explicit or violent lyrics may be harmful for individuals with ASD who have difficulty distinguishing between reality and fantasy. This type of music can be confusing and contribute to negative behaviors or attitudes.",
  ];

  return (
    <BlogBuilder
      musicDeMeritsData={musicDeMeritsData}
      musicMeritsData={musicMeritsData}
    />
  );
};
