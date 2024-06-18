"use client";

import { GiSwordman } from "react-icons/gi";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
import Image from "next/image";

export const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <Image
        className="group-hover:text-white transition text-emerald-500 mt-3"
        src="/mirror.png"
        alt="Gadriel Mirror"
        width={69}
        height={69}
      />

      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center pt-16"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <GiSwordman
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
