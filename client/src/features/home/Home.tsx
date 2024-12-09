import { Card } from "../../ui/Card";
import {image} from '@src'

export const Home = () => {
  const data = [
    {
      id: 1,
      author: "Santosh",
      userImage: "./santosh.jpg",
      heading: "Old Nepal",
      text: "this is the awesome time that we are witnessing with the major of the hcudsgcu wdgcuywdgc hwsdgcywd hwdgywegd",
    },
    {
      id: 2,
      author: "Santosh",
      userImage: "",
      heading: "Old Nepal",
      text: "this is the awesome time that we are witnessing with the major of the hcudsgcu wdgcuywdgc hwsdgcywd hwdgywegd",
    },
  ];
  return (
    <div className="mt-10 flex gap-4">
      {data.map((item) => (
        <div key={item.id}>
          <Card
            author={item.author}
            imageSrc={item.userImage}
            heading={item.heading}
            text={item.text}
          />
        </div>
      ))}
    </div>
  );
};
