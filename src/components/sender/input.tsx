"use client"

interface IndexProps {
  value: string[];
}

const Index: React.FC<IndexProps> = ({ value }) => {
  return (
    <div>
      {value.map((message: string, index: number) => (
        <div
          key={index}
          className={
            message
              ? "border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 ml-auto rounded-lg"
              : "hidden"
          }
        >
          <span>{message}</span>
        </div>
      ))}
    </div>
  );
};

export default Index;
