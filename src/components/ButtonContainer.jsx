import Button from "../ui/Button";

const buttonList = [
  "All",
  "News",
  "Live",
  "Music",
  "Comedy",
  "Mixes",
  "Accounting",
  "Lessons",
  "New To You",
  "Recently Uploaded",
];

const ButtonContainer = () => {
  return (
    <div className="overscroll mx-6 mt-2">
      {buttonList.map((button, index) => (
        <Button key={index} children={button} />
      ))}
    </div>
  );
};

export default ButtonContainer;
