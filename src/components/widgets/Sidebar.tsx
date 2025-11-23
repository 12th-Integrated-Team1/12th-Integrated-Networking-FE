import { useState } from "react";

import mapPinFrontColor from "../../assets/img/map-pin-front-color.png";
import plusFrontClay from "../../assets/img/plus-front-clay.png";
import pinFrontColor from "../../assets/img/pin-front-color.png"; // 빨간 핀
import pinFrontClay from "../../assets/img/pin-front-clay.png"; // 회색 핀
import trashCanFrontColor from "../../assets/img/trash-can-front-color.png";
import DaySun from "../../assets/img/Day-Sun.png";
import Button from "../html/Button";

interface SidebarProps {
  onLogout: () => void;
}

interface Place {
  id: number;
  name: string;
}

export default function Sidebar({ onLogout }: SidebarProps) {
  const [places, setPlaces] = useState<Place[]>([
    { id: 1, name: "강남역 1번 출구" },
    { id: 2, name: "RATTHAT" },
    { id: 3, name: "파이홀" },
    { id: 4, name: "청수당공명" },
    { id: 5, name: "롯데월드" },
    { id: 6, name: "구관" },
    { id: 7, name: "Osiu" },
  ]);

  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [chosenId, setChosenId] = useState<number | null>(null);

  // 핀 클릭 → 최상단 이동
  const handleSelect = (id: number) => {
    const selectedPlace = places.find((p) => p.id === id);
    const others = places.filter((p) => p.id !== id);
    setPlaces([selectedPlace!, ...others]);
    setSelectedId(id); // 선택 표시도 적용
  };

  // 삭제 버튼
  const handleDelete = (id: number) => {
    setPlaces(places.filter((p) => p.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  console.log(hoveredId);

  return (
    <div className="flex flex-col w-[248px] h-screen items-start justify-between px-4 py-12 relative bg-variable-collection-color-gray-0 rounded-[0px_48px_48px_0px] shadow-[2px_0px_4px_#0000001a]">
      {/* ==== 상단 메뉴 ==== */}
      <div className="flex flex-col items-start gap-10 w-full z-1">
        <div className="inline-flex items-center gap-4">
          <img className="w-10 h-10" src={mapPinFrontColor} />
          <div className="font-bold text-variable-collection-color-gray-60 text-xl">
            위치 목록
          </div>
        </div>

        <div className="inline-flex items-center gap-4">
          <img className="w-10 h-10" src={plusFrontClay} />
          <div className="font-bold text-variable-collection-color-gray-60 text-xl">
            추가하기
          </div>
        </div>

        {/* ==== 장소 목록 ==== */}
        <div className="flex flex-col w-full gap-2">
          {places.map((place) => {
            const isSelected = place.id === selectedId;
            const isHovered = place.id === hoveredId;
            const isChosen = place.id === chosenId;

            return (
              <div
                key={place.id}
                className={`relative flex flex-row items-center justify-between p-2 w-full cursor-pointer
                ${
                  isChosen
                    ? "bg-gray-10 rounded-xl shadow-[-2px_2px_2px_1px_#0000001a]"
                    : ""
                }
                group
                `}
                onClick={() => setChosenId(place.id)} // 아이템 클릭 → 선택 표시
                onMouseEnter={() => setHoveredId(place.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-row gap-3">
                  {/* 핀 아이콘 클릭 → 최상단 이동 */}
                  <img
                    className="w-6 h-6 cursor-pointer"
                    src={isSelected ? pinFrontColor : pinFrontClay}
                    onClick={(e) => {
                      e.stopPropagation(); // 부모 클릭 막기
                      handleSelect(place.id);
                    }}
                  />

                  {/* 장소 이름 영역 hover → 삭제 아이콘 표시 */}
                  <div className="flex-1 font-semibold text-variable-collection-color-gray-60 text-base overflow-hidden text-ellipsis whitespace-nowrap relative">
                    {place.name}
                  </div>
                </div>

                {/* hover 시 쓰레기통 아이콘 */}
                {isHovered && (
                  <img
                    src={trashCanFrontColor}
                    className="w-5 h-5 cursor-pointer transition-opacity duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(place.id);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ==== 하단 사용자 정보 ==== */}
      <div className="flex flex-col items-center gap-2.5 w-full">
        <div className="inline-flex items-center gap-2">
          <div
            className="w-9 h-9 bg-center bg-cover rounded-full border border-gray-10"
            style={{ backgroundImage: `url(${DaySun})` }}
          />
          <div className="font-semibold text-gray-60">아이디</div>
        </div>

        <Button
          className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-gray-20 rounded-[10px] cursor-pointer"
          onClick={onLogout}
        >
          <div className="font-semibold text-gray-60 text-sm">로그아웃</div>
        </Button>
      </div>
    </div>
  );
}
