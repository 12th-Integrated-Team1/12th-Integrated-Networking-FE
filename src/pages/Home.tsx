import { useState } from "react";
import AddModal from "../components/widgets/AddModal";
import DeleteModal from "../components/widgets/DeleteModal";
import HomeDefault from "../components/widgets/HomeDefault";
import Sidebar from "../components/widgets/Sidebar";
import { useNavigate } from "react-router-dom";
import type { KakaoPlace } from "../types/kakao";
import TodayWeatherPanel from "../components/weather/TodayWeatherPanel";
import HourlyWeatherPanel from "../components/weather/HourlyWeatherPanel";
import WeeklyWeatherPanel from "../components/weather/WeeklyWeatherPanel";
import { mockToday, mockHourly, mockWeekly } from "../mock/weatherMock";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const [addModalOpen, setAddModalOpen] = useState(false);

  const [places, setPlaces] = useState<KakaoPlace[]>([
    {
      id: "1",
      place_name: "롯데월드",
      road_address_name: "서울특별시 송파구 올림픽로 240",
      address_name: "서울특별시 송파구 잠실동 40-1",
      x: "127.098119",
      y: "37.511028",
    },
    {
      id: "2",
      place_name: "서울숲",
      road_address_name: "서울특별시 성동구 뚝섬로 273",
      address_name: "서울특별시 성동구 성수동1가 685-1",
      x: "127.038287",
      y: "37.544560",
    },
    {
      id: "3",
      place_name: "경복궁",
      road_address_name: "서울특별시 종로구 사직로 161",
      address_name: "서울특별시 종로구 세종로 1-1",
      x: "126.976933",
      y: "37.579617",
    },
  ]);

  // Sidebar에서 삭제 클릭 시 호출
  const openDeleteModal = (id: string) => {
    setDeleteTargetId(id);
    setDeleteModalOpen(true);
  };

  //삭제 확인
  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      setPlaces(places.filter((p) => p.id !== String(deleteTargetId)));
      setDeleteTargetId(null);
      setDeleteModalOpen(false);
    }
  };
  //삭제 취소
  const cancelDelete = () => {
    setDeleteTargetId(null);
    setDeleteModalOpen(false);
  };

  //Sidebar에서 추가 클릭 시 호출
  const openAddModal = () => {
    setAddModalOpen(true);
  };

  //추가 취소
  const cancelAdd = () => {
    setAddModalOpen(false);
  };
  //추가 확정
  const confirmAdd = (selectedPlace: KakaoPlace | null) => {
    if (selectedPlace) {
      // 기존 places에 추가
      setPlaces((prev) => {
        //현재 id중 제일 큰 값 찾기
        const maxId = prev.length
          ? Math.max(...prev.map((p) => Number(p.id)))
          : 0;

        return [
          ...prev,
          {
            ...selectedPlace,
            id: String(Date.now()),
          },
        ];
      });
    }
    setAddModalOpen(false);
  };

  console.log(places);

  return (
    <div className="flex w-screen h-screen items-center gap-0 relative bg-neutral-100">
      <Sidebar
        places={places}
        setPlaces={setPlaces}
        onDeleteClick={openDeleteModal}
        onAddClick={openAddModal}
        onLogout={handleLogout}
      />
      <div className="flex flex-col w-full items-center relative">
        <div className="w-full flex justify-center pt-16 pb-20">
          <div className="w-full max-w-[1100px] px-6 flex flex-col gap-12">
            <TodayWeatherPanel data={mockToday} />
            <HourlyWeatherPanel list={mockHourly} />
            <WeeklyWeatherPanel data={mockWeekly} />
          </div>
        </div>
        /* <HomeDefault /> */
      </div>

      {/* 장소 삭제 모달 + 배경 */}
      {deleteModalOpen && (
        <>
          {/* 전체 배경 어둡게 */}
          <div className="absolute w-screen h-screen inset-0 bg-gray-500/30 z-40"></div>

          {/* 중앙 모달 */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <DeleteModal onCancel={cancelDelete} onConfirm={confirmDelete} />
          </div>
        </>
      )}

      {/* 장소 추가 모달 + 배경 */}
      {addModalOpen && (
        <>
          {/* 전체 배경 어둡게 */}
          <div className="absolute w-screen h-screen inset-0 bg-gray-500/30 z-40"></div>

          {/* 중앙 모달 */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <AddModal onCancel={cancelAdd} onConfirm={confirmAdd} />
          </div>
        </>
      )}
    </div>
  );
}
