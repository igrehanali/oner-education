import User1 from "../../public/Images/userimg.png";
import blocktick from "../../public/icons/blocktick.png";
import blockcross from "../../public/icons/blockcross.png";

const UsersData = [
  {
    name: "Tom Riddle",
    email: "riddle345@gmail.com",
    phone: "+ (44) 3483 9768",
    location: "Chelmsford, United Kingdom",
    listings: 12,
    status: "active",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+ (44) 3456 7890",
    location: "London, United Kingdom",
    listings: 8,
    status: "active",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+ (44) 1234 5678",
    location: "Manchester, United Kingdom",
    listings: 5,
    status: "blocked",
  },
  {
    name: "Emily Blunt",
    email: "emily.blunt@example.com",
    phone: "+ (44) 5678 1234",
    location: "Birmingham, United Kingdom",
    listings: 10,
    status: "active",
  },
];
const BlockedUsers = () => {
  return (
    <table className="bg-white  w-full rounded-lg table-auto mt-4  ">
      <thead>
        <tr>
          <th className="font-medium text-[16px] text-left p-4 ">Users</th>
          <th className="font-medium text-[16px] text-left p-4 ">Name</th>
          <th className="font-medium text-[16px] text-left p-4 ">Email</th>
          <th className="font-medium text-[16px] text-left p-4">Phone No</th>
          <th className="font-medium text-[16px] text-left p-4 ">Location</th>
          <th className="font-medium text-[16px] text-left p-4 ">Listings</th>
        </tr>
      </thead>

      <tbody className="">
        {UsersData.map((user, index) => (
          <tr className="border-t-black border-t-2" key={index}>
            <td className="p-2">
              <img
                src={User1}
                alt="User"
                className="rounded-full h-[55.75px] w-[55.75px]"
              />
            </td>
            <td className="font-light text-[14px] p-2">{user.name}</td>
            <td className="font-light text-[14px] p-2">{user.email}</td>
            <td className="font-light text-[14px] p-2">{user.phone}</td>
            <td className="font-light text-[14px] p-2">{user.location}</td>
            <td className="flex items-center mt-3 font-light text-[14px] p-2 gap-2">
              <button className="bg-[#029783] w-[53px] h-[23px] rounded-lg text-white">
                {user.listings}
              </button>
              <img src={blocktick} alt="Active" className="h-5 w-5" />
              <img src={blockcross} alt="Blocked" className="h-5 w-5" />
              <button className="ml-2 w-[95px] h-[30px] text-sm font-semibold bg-[#F6F6F6] text-[#029783] rounded-lg border-2 border-[#029783]">
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlockedUsers;
