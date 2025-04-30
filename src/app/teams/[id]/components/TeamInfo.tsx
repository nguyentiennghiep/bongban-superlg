import Image from "next/image";
import { Team } from "@/services/api";

interface TeamInfoProps {
  team: Team;
}

export default function TeamInfo({ team }: TeamInfoProps) {
  return (
    <div className="bg-[#F3F3F3] p-4 sm:p-6 rounded-sm mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex-1">
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="font-[600] text-black">Tên đội</div>
            <div className="text-black">{team.ten_doi}</div>
            <div className="font-[600] text-black">Đội trưởng</div>
            <div className="text-black">
              {team.doi_truong_ten} -{" "}
              <a
                href={`tel:${team.doi_truong_sdt}`}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {team.doi_truong_sdt}
              </a>
            </div>
            <div className="font-[600] text-black">Sân nhà</div>
            <div className="text-black">{team.dia_chi}</div>
            {team.dia_chi_map && (
              <>
                <div className="font-[600] text-black"></div>
                <div className="w-full h-[200px] sm:h-[300px]">
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{
                      __html: team.dia_chi_map.replace(
                        'width="600" height="450"',
                        'width="100%" height="100%"'
                      ),
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-start justify-center sm:justify-end">
          <Image
            src={
              team.logo_url
                ? `https://admin.hanoispl.com/static${team.logo_url}`
                : "/images/default-team-logo.png"
            }
            alt={`Logo ${team.ten_doi}`}
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
