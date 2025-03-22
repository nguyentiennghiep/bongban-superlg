import Image from "next/image";

const executiveMembers = [
  {
    name: "Nguyễn Văn A",
    position: "President",
    image: "https://picsum.photos/200/267?random=1",
  },
  {
    name: "Trần Văn B",
    position: "Vice President",
    image: "https://picsum.photos/200/267?random=2",
  },
  {
    name: "Lê Văn C",
    position: "Member",
    image: "https://picsum.photos/200/267?random=3",
  },
];

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-primary mb-6">
        Executive Board
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {executiveMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md text-center border-2 border-primary"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={267}
              className="mx-auto rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-secondary">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
