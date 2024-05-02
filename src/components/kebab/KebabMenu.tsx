import { useState } from "react";
import Image from "next/image";

// Types
import { LinkCardFunctionObjectType } from "@/src/types/ModalFunctionDataTypes";
interface KebabMenuPropType {
  items: LinkCardFunctionObjectType[];
  data: string;
}

/**
 *
 * @param {KebabMenu} items 케밥 메뉴의 이름, 동작, 동작 타입 등의 다양한 정보가 담긴 객체입니다.
 * @param {string} data 모달 상단에 현재 선택된 링크나 폴더 등을 받아 caption으로 추가할 데이터입니다.
 * @returns 케밥 메뉴 종합 데이터를 받아 케밥 클릭시 소메뉴를 표시하고, 각 메뉴에 따른 기능을 전달하는 컴포넌트입니다.
 */
export default function KebabMenu({ items }: KebabMenuPropType) {
  const [kebabMenuPop, setKebabMenuPop] = useState(false);

  const handleKebabToggle = () => {
    setKebabMenuPop(!kebabMenuPop);
  };

  return (
    <div className="absolute right-8 top-[21.5rem] flex">
      <button
        className="relative h-[1.7rem] w-[2.1rem] border-none bg-transparent p-0"
        type="button"
        onClick={handleKebabToggle}
      >
        <Image fill src="/assets/icons/svg/kebab.svg" alt="kebabButton" />
      </button>
      {kebabMenuPop && (
        <>
          <div className="gat-[0.4rem] absolute top-[1.6rem] z-[1] flex-col items-start shadow-[0_0.2rem_0.8rem_0_rgba(51,50,54,0.1)]">
            {items.map((item) => (
              <button
                className="lb-body2-regular px-1.2rem] w-40 bg-white py-[0.7rem] text-center text-gray100 hover:bg-gray10 hover:text-primary"
                key={item.buttonName}
                onClick={() => item.modalHandle(item.type, item.data)}
              >
                {item.buttonName}
              </button>
            ))}
          </div>
          <div
            className="fixed left-0 top-0 h-screen w-screen bg-transparent"
            onClick={handleKebabToggle}
          />
        </>
      )}
    </div>
  );
}
