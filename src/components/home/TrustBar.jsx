const stats = [
  { value: "1,000+", label: "Satisfied Clients" },
  { value: "CAC", label: "Registered Business" },
  { value: "Google", label: "Verified" },
  { value: "Ibadan", label: "Nigeria" },
];

export default function TrustBar() {
  return (
    <section className="bg-gold py-16 px-5 w-full font-dmSans">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ value, label }) => (
          <li key={label} className="flex flex-col items-center text-center">
            <span className="text-black text-2xl tracking-wide font-bold font-cormorant">
              {value}
            </span>
            <span className="text-black/60 text-[10px] tracking-widest uppercase">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
