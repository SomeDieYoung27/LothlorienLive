"use client";

import { useSocket } from "./providers/socket-provider";
import { Badge } from "lucide-react";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();
  if (!isConnected) {
    return (
      <Badge className="bg-yellow-600 text-white border-none">
        Fallback : Polling every 1s
      </Badge>
    );
  }
  return (
    <Badge className="bg-emerald-600 text-white border-none">
      Live : Real-time updates
    </Badge>
  );
};
