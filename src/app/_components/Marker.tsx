export function Marker({width}:{width:number}) {
  return (
    <div style={{ gridAutoRows: "min-content" }} className="grid gap-4">
      <div className="h-fit rounded bg-white ring-[1px] ring-slate-200">
        <header className="border-b border-slate-100 px-[16px] py-[12px]">
          <div >
          <h3 className=" tracking-tight text-[19px] font-bold hover:cursor-pointer hover:text-blue-800 mt-[2px]">
            <a>#discuss</a>
            
          </h3>
          <div className="text-xs text-slate-500 tracking-tight font-light mb-[0.5px]">
            Discussion threads targeting the whole community
          </div>
          </div>
         
        </header>
        <div className="mt-[2px] border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px]">
          What was your win this week?
          <div className="text-thin pt-[4px] text-[13.5px] text-slate-500">
            11 comments
          </div>
        </div>
        <div className="mt-[2px] leading-[1.6] border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px]">
          Java vs. JavaScript: Which Language Reigns Supreme in Modern
          Development?
          <div className="pt-[0.5px] ">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-[13px]  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        <div className="leading-[1.6] border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px]">
          React Router: React 18 to 19 with Style and Simplicity
          <div className="pt-[1.5px] ">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-[13px]  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        <div className="leading-[1.6] border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px]">
          Hi everyone, I have question for you. Do you know how load an MFE
          (micro front end) / remote app,...
          <div className="text-thin pt-[3px] text-[14px] text-slate-500">
            1 comment
          </div>
        </div>
        <div className="leading-[1.6] border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px]">
          Where do you put JWT in your React application?
          <div className="pt-[2px]">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-sm  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        
      </div>

      <div className="h-fit rounded bg-white ring-[1px] ring-slate-200">
        <header className="border-b border-slate-100 px-[16px] py-[12px]">
          <h3 className="text-[19px] font-bold hover:cursor-pointer hover:text-blue-800">
            #watercooler
          </h3>
          <div className="text-xs text-slate-500">
            Light, and off-topic conversation.
          </div>
        </header>
        <div className="border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px] leading-[1.6]">
          2024 Developer Advent Calendars
          <div className="pt-[2px]">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-sm  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        <div className="border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px] leading-[1.6]">
          Monthly Challenge: Creative Community Challenge
          <div className="pt-[2px]">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-sm  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        <div className="border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px] leading-[1.6]">
          Why does a reboot make your PC run SO much faster than running all the
          cleaning tools you can pos...
          <div className="pt-[2px]">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-sm  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
        <div className="border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px] leading-[1.6]">
          I am purposefully super nice to AI because I imagine they are trained
          on data where nice people g...
          <div className="text-thin pt-[3px] text-[13.5px] text-slate-500">
            8 comments
          </div>
        </div>
        <div className="border-b border-slate-100 p-4 text-slate-600 hover:cursor-pointer hover:text-blue-800 text-[15px] leading-[1.6]">
          So should I release a teaser for my roblox game monsters ahead? Gimme
          some advice
          <div className="pt-[2px]">
            <span className="rounded-md bg-[#fcd34d] p-[4px] py-[2px] text-sm  text-[#9e350f]">
              New
            </span>
          </div>
        </div>
      </div>
      <div className="mb-[16px] mt-[8px] border-b border-slate-300 p-[16px] pt-0">
        <header className="py-2">
          <h4 className="text-sm font-bold">trending guides/resources</h4>
        </header>

        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Stop Using Try-Catch: A Better Way to Handle Errors in JavaScript
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Top 10 Modern JavaScript Patterns for 2025
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          50 DevOps Project Ideas to Build Your Skills: From Beginner to
          Advanced
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          No more Try/Catch: a better way to handle errors in TypeScript
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          8 System Design Courses to learn Distributed System Architecture
          (2025)
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Diagram-as-Code: Creating Dynamic and Interactive Documentation for
          Visual Content
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Writing a Dockerfile: Beginners to Advanced
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          🔥 200 Project Ideas from Beginner to Advanced with Open Source
          Contributions 🚀
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Top 10 VSCode Extensions to Supercharge Your Workflow
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          How We Moved from AWS to Fly.io
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          10 Advanced TypeScript Concepts Every Developer Should Know
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          5 Awesome Docker Tools To Make Your Life Easier
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          9 Open Source Libraries to Supercharge Your Next Project 🔋⚡️
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Python for DevOps: A Comprehensive Guide from Beginner to Advanced
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Maxun: Open Source No-Code Web Data Extraction Platform⚡️
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Mastering Apache Kafka: A Complete Guide to the Heart of Real-Time
          Data Streaming
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Node.js Frameworks Roundup 2024 — Elysia / Hono / Nest / Encore —
          Which should you pick?
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Building simple event-driven applications with Pub/Sub
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Docker Image Optimization: Reducing Size for Faster Deployments
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          React Native New Architecture
        </div>
      </div>
      <div className="mb-[16px] mt-[8px] border-b border-slate-300 p-[16px] pt-0">
        <header className="py-2">
          <h4 className="text-sm font-bold">recently queried</h4>
        </header>

        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Line-Height CSS
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          React Pure Component
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          List vs Array
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Flask Marshmallow
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Python Package Structure
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Haiku Checker
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Ngrok Alternative
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Handwriting Generator
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          package-lock.json vs package.json
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          How to update Python
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          CSS Important
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          How to click faster
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Button Animation CSS
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Opengl Python
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Table CSS
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Rust for Web
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Javascript Playground
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Azure Free Tier
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Production Environment
        </div>
        <div className="border-b border-transparent p-4  text-slate-600 hover:cursor-pointer hover:bg-white hover:text-blue-700 text-[15px]">
          Flex Two Columns
        </div>
      </div>
    </div>
  );
}
