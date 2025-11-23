import { useState } from "react";
import AddModal from "../components/widgets/AddModal";
import DeleteModal from "../components/widgets/DeleteModal";
import HomeDefault from "../components/widgets/HomeDefault";
import Sidebar from "../components/widgets/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const [addModalOpen, setAddModalOpen] = useState(false);

  const [places, setPlaces] = useState([
    { id: 1, name: "강남역 1번 출구" },
    { id: 2, name: "RATTHAT" },
    { id: 3, name: "파이홀" },
    { id: 4, name: "청수당공명" },
    { id: 5, name: "롯데월드" },
    { id: 6, name: "구관" },
    { id: 7, name: "Osiu" },
  ]);

  // Sidebar에서 삭제 클릭 시 호출
  const openDeleteModal = (id: number) => {
    setDeleteTargetId(id);
    setDeleteModalOpen(true);
  };

  //삭제 확인
  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      setPlaces(places.filter((p) => p.id !== deleteTargetId));
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
  const confirmAdd = () => {
    setAddModalOpen(false);
  };

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
        <HomeDefault />
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
