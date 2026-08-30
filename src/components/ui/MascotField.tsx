import Image from "next/image";

interface MascotFieldProps {
  mascots: string[];
  className?: string;
}

const slots = [
  { style: { top: "8%", left: "4%" }, size: 52, rotate: -12 },
  { style: { top: "10%", right: "6%" }, size: 60, rotate: 14 },
  { style: { bottom: "12%", left: "9%" }, size: 46, rotate: 10 },
  { style: { bottom: "8%", right: "8%" }, size: 58, rotate: -9 },
  { style: { top: "48%", left: "2%" }, size: 42, rotate: 18 },
  { style: { top: "52%", right: "3%" }, size: 48, rotate: -16 },
];

/** Decorative field of small translucent mascot droplets scattered behind plain-background sections. */
export function MascotField({ mascots, className = "" }: MascotFieldProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 hidden overflow-hidden sm:block ${className}`}
      aria-hidden="true"
    >
      {mascots.slice(0, slots.length).map((src, index) => {
        const slot = slots[index];
        return (
          <div
            key={src}
            className="absolute opacity-[0.12]"
            style={{
              ...slot.style,
              width: slot.size,
              height: slot.size,
              transform: `rotate(${slot.rotate}deg)`,
            }}
          >
            <Image src={src} alt="" fill className="object-contain" />
          </div>
        );
      })}
    </div>
  );
}
