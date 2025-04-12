import { TeamMember, AthleteDetail } from "@/services/api";
import PlayerCard from "@/app/components/PlayerCard";

interface TeamMembersProps {
  members: TeamMember[];
  athleteDetails: Record<string, AthleteDetail>;
}

export default function TeamMembers({
  members,
  athleteDetails,
}: TeamMembersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {members.map((member) => (
        <PlayerCard
          key={member.id}
          player={{
            id: member.vdv_id,
            name: member.thanhvien_ten,
            birthYear: athleteDetails[member.vdv_id]?.nam_sinh || "",
            rank: member.vdv_hang || "",
            rankPoints: member.vdv_diem?.toString() || "0",
            totalPoints: member.vdv_diem?.toString() || "0",
            accumulatedPoints: member.diem_tich_luy?.toString() || "0",
            avatarUrl: member.thanhvien_avatar_url
              ? `https://admin.hanoispl.com/static${member.thanhvien_avatar_url}`
              : undefined,
          }}
        />
      ))}
    </div>
  );
}
