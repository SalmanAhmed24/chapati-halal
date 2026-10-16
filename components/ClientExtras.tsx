"use client";
import dynamic from "next/dynamic";

// Desktop-only flourishes: loaded lazily so they never compete with first paint.
const Cursor = dynamic(() => import("./Cursor"), { ssr: false });

export default function ClientExtras() {
  return <Cursor />;
}
