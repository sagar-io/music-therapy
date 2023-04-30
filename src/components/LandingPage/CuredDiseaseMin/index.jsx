import { CuredDiseaseMinBuilder } from "./CuredDiseaseMinBuilder";

export const CuredDiseaseMin = () => {
  const diseaseList = [
    {
      path: 'Depression',
      title: "Depression",
      img: "assets/d1.png",
      text: "Muic Therapy it can offer short-term benefits by improving mood and encouraging connection and self-expression",
    },
    {
      path: 'ASD',
      title: "Autism spectrum Disorders(ASD)",
      img: "assets/d2.png",
      text: "Research has shown that music therapy can help children develop or improve skills like shared attention, communication and play.",
    },
    {
      path: 'Parkinson',
      title: "Parkinson's Disease",
      img: "assets/d3.png",
      text: "Music is a powerful tool that can ease many symptoms of Parkinson's disease, such as walking, speech and mood changes. ",
    },
    {
      path: 'Stroke',
      title: "Stroke",
      img: "assets/d4.png",
      text: "music therapy can help attenuate dysphagia and aphasia, improve cognition and motor function, alleviate negative moods, and accelerate neurological recovery in stroke patients",
    },
  ];
  const disaseElements = diseaseList.map((disease, i) => {
    return (
      <CuredDiseaseMinBuilder
        key={i}
        path={disease.path}
        title={disease.title}
        img={disease.img}
        text={disease.text}
      />
    );
  });

  return (
    <div className="flex align-middle justify-around float-right w-10/12 my-24 px-12 gap-8">
       <h2 className="text-6xl max-w-md leading-snug mt-24"><i className="fas fa-exclamation-triangle"></i> Dangerous Disease cured by Music Therapy</h2>
      <div>{disaseElements}</div>
    </div>
  );
};
