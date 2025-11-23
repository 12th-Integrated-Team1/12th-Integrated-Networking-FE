import { DayClouds } from "../img/DayClouds.tsx";
import tickFrontColor from "../../assets/img/tick-front-color.png";
import zoomFrontColor from "../../assets/img/zoom-front-color.png";
import multiply from "../../assets/icon/multiply.svg";
import Input from "../html/Input.tsx";
import Button from "../html/Button.tsx";

interface AddModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function AddModal({ onCancel, onConfirm }: AddModalProps) {
  return (
    <div className="add-card">
      <img className="multiply" src={multiply} onClick={onCancel} />

      <div className="add-logo">
        <DayClouds className="add-logo-image" />
        <div className="add-logo-title">날씨 위치 추가</div>
      </div>

      <div className="title-input-container">
        <div className="title-text">장소 이름</div>
        <Input
          wrapperClassName="input"
          placeholder="검색어를 입력하세요"
          endIcon={<img src={zoomFrontColor} className="w-6 h-6" />}
        />
      </div>

      <div className="location-container">
        <div className="location-item">
          <div className="location-item-title">KFC 광화문점</div>
          <div className="location-item-detail">서울 종로구 세종로 161-1</div>
          <img className="location-item-check" src={tickFrontColor} />
        </div>

        <div className="location-item">
          <div className="location-item-title">KFC 부산서면점</div>
          <div className="location-item-detail">
            부산 부산진구 부전동 241-17
          </div>
          <img className="location-item-check" src={tickFrontColor} />
        </div>

        <div className="location-item">
          <div className="self-stretch justify-start text-color-gray-100 text-base font-medium font-['Pretendard']">
            KFC 홍익대점
          </div>
          <div className="location-item-detail">서울 마포구 동교동 165-8</div>
          <img className="location-item-check" src={tickFrontColor} />
        </div>
      </div>

      <div className="okbutton-container">
        <Button className="okbutton" onClick={onConfirm}>
          <div className="okbutton-text">확인</div>
        </Button>
      </div>
    </div>
  );
}
