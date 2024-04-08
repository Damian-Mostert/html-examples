const examples = [
  {
    title: "Position",
    examples: [
      `
      <div style="position:relative;height:100px;background:red">
        relative container with absolute block
        <div style="position:absolute;background:blue;padding:1rem;bottom:5px;left:5px">
        test
        </div>
      </div>
      `,
      `
      <div style="position:relative;height:100px;background:red">
        relative container with absolute block
        <div style="position:absolute;background:blue;padding:1rem;bottom:5px;right:5px">
        test
        </div>
      </div>
      `,
      `
      <div style="position:relative;height:100px;background:red">
        relative container with absolute block
        <div style="position:absolute;background:blue;padding:1rem;top:5px;right:5px">
        test
        </div>
      </div>
      `,
      `
      <div style="position:relative;height:100px;background:red">
        relative container with absolute block
        <div style="position:absolute;background:blue;padding:1rem;top:5px;left:5px">
        test
        </div>
      </div>
      `,
    ],
  },
  {
    title: "Display",
    examples: [
      `
      <div style="display:none">
        I am hidden
      </div>
      `,
      `
      <div style="display:block">
        I am normal
        <div>
          things go under
        </div>
        <div>
          things go under
        </div>
      </div>
      `,
      `
      <div style="display:flex">
        I am a flex container
        <div style="padding-left:2rem">
          things go in flex-direction
        </div>
      </div>
      `,
      `
      <div style="display:flex;flex-direction:column">
        I am a flex container
        <div>
          things go in flex-direction
        </div>
      </div>
      `,
    ],
  },
  {
    title: "flex",
    examples: [
      `
      <div style="width:100%;display:flex;justify-content:center">
        I am centered
      </div>
      `,
      `
      <div style="width:100%;display:flex;justify-content:end">
        I am on the end
      </div>
      `,
      `
      <div style="width:100%;display:flex;justify-content:start">
        I am on the start
      </div>
      `,
      `
      <div style="height:100%;display:flex;align-items:center">
        I am centered
      </div>
      `,
      `
      <div style="height:100%;display:flex;align-items:end">
        I am on the end
      </div>
      `,
      `
      <div style="height:100%;display:flex;align-items:start">
        I am on the start
      </div>
      `,

      `
      <!-- example desktop -->
      <div style="display:flex;width:100%">
        <div style="background:green;padding:1rem;width:100%">A</div>
        <div style="background:blue;padding:1rem;width:100%">B</div>
        <div style="background:red;padding:1rem;width:100%">C</div>
      </div>
  
      `,
      `
      <!-- example mobile, flex-wrap make items wrap -->
      <div style="flex-wrap:wrap;display:flex;width:100%">
        <div style="background:green;padding:1rem;width:50%">A</div>
        <div style="background:blue;padding:1rem;width:50%">B</div>
        <div style="background:red;padding:1rem;width:100%">C</div>
      </div>
  
      `,
      `
      <!-- example desktop -->
      <div style="display:flex;width:100%">
        <div style="background:green;padding:1rem;width:40px%">A</div>
        <div style="background:blue;padding:1rem;width:100%">B</div>
        <div style="background:red;padding:1rem;width:40px">C</div>
      </div>
  
      `,
    ],
  },
  {
    title: "Margin",
    examples: [
      `
      <div style="background:red;margin:2rem">
        I have margin
      </div>
      `,
      `
      <div style="width:100%;display:flex">
        <div style="margin-left:auto">
          I have margin
        </div>
      </div>
      `,
      `
      <div style="width:100%;display:flex">
        <div style="margin-right:auto">
          I have margin
        </div>
      </div>
      `,
      `
      <div style="height:100%;display:flex">
        <div style="margin-top:auto">
          I have margin
        </div>
      </div>
      `,
      `
    <div style="height:100%;display:flex">
      <div style="margin-bottom:auto">
        I have margin
      </div>
    </div>
      `,
      `
      <div style="width:100%;height:100%;display:flex">
        <div style="margin:auto">
          I have margin
        </div>
      </div>
        `,
        `
        <div style="width:100%;height:100%;">
          <div style="">
            I have negative margin
          </div>
          <div style="margin-top:-1rem">
            I have negative margin
          </div>
        </div>
          `,
    ],
  },
  {
    title: "Padding",
    examples: [
      `
      <div style="background:red;padding:2rem">
        I have padding
      </div>
      `,
    ],
  },
];


export default examples;