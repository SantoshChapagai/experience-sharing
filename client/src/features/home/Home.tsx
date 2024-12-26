import { Card } from "../../ui/Card";

export const Home = () => {
  const data = [
    {
      id: 1,
      author: "Santosh",
      userImage:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Old Nepal",
      text: "this is the awesome time that we are witnessing with the major of the hcudsgcu wdgcuywdgc hwsdgcywd hwdgywegd",
    },
    {
      id: 2,
      author: "Santosh",
      userImage:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
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
            buttonText="See more"
          />
        </div>
      ))}
    </div>
  );
};
