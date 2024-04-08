"use client";

export default function PlayGround() {
  return (
    <main className="w-full h-screen flex bg-white text-black">
      <div className="flex flex-col w-full">
        <div>css</div>
        <div
          onInput={(ev) => {
            document.getElementById("styles").innerHTML = ev.target.innerText;
            console.log(document.getElementById("styles"));
          }}
          contentEditable={true}
          className="w-full h-full overflow-auto"
        ></div>
      </div>
      <div className="flex flex-col w-full">
        <div>html</div>
        <div
          onInput={(ev) => {
            console.log(ev.target.innerHTML);
            document.getElementById("container").innerHTML =
              ev.target.innerText;
          }}
          contentEditable={true}
          className="w-full h-full overflow-auto"
        ></div>
      </div>

      <div className="w-full flex flex-col">
        Canvas
        <div id="container" className="w-full h-full overflow-auto"></div>
      </div>
      <style id="styles" />
    </main>
  );
}
