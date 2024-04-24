"use client";

export default function Home() {
  return (
    <main className="text-red-400">
      {[0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((_,x)=>{
        return <div key={x}>
          HELLO ANGELO {x} 🤌🏻
        </div>
      })}
    </main>
  );
}
