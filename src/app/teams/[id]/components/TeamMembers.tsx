import { TeamMember, AthleteDetail } from "@/services/api";
import PlayerCard from "@/app/components/PlayerCard";

interface TeamMembersProps {
  members: TeamMember[];
  athleteDetails: Record<string, AthleteDetail>;
  selectedSeason: string;
}

export default function TeamMembers({
  members,
  athleteDetails,
  selectedSeason,
}: TeamMembersProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
      {members.map((member) => {
        const athleteDetail = athleteDetails[member.vdv_id];
        const seasonInfo = athleteDetail?.mua_giai_tham_gia?.find(
          (season) => season.mua_giai_id === selectedSeason
        );

        return (
          <PlayerCard
            key={member.id}
            player={{
              id: member.vdv_id,
              name: member.thanhvien_ten,
              birthYear: athleteDetail?.nam_sinh || "",
              rank: seasonInfo?.hang_vdv || athleteDetail?.hang_vdv || "",
              rankPoints:
                seasonInfo?.diem_tham_gia?.toString() ||
                athleteDetail?.diem_vdv?.toString() ||
                "0",
              totalPoints:
                seasonInfo?.diem_tham_gia?.toString() ||
                athleteDetail?.diem_vdv?.toString() ||
                "0",
              accumulatedPoints:
                seasonInfo?.diem_tich_luy?.toString() ||
                athleteDetail?.diem_tich_luy?.toString() ||
                "0",
              avatarUrl: member.thanhvien_avatar_url
                ? `https://admin.hanoispl.com/static${member.thanhvien_avatar_url}`
                : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
