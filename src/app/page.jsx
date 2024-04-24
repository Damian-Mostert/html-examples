"use client";

export default function Home() {
  return (
    <main className="text-red-400 text-center animate h-screen items-center flex flex-wrap">
      {[0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((_,x)=>{
        return <div key={x} className="w-full">
          HELLO ANGELO {x} 🤌🏻
        </div>
      })}
    </main>
  );
}
