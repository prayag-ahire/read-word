
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Home() {
  return (
    <div className="flex items-center justify-center">
    <div className="w-1/2">
      <div className=" mt-10 ">
        <h1 className="text-4xl font-bold mb-4">Read-Word</h1>
      </div>

      <div className="flex flex-row mb-4">
        <div className=" rounded-2xl border-4 border-gray w-1/3">
            <div className="ml-2 mt-10">
              <h2 className="font-semibold">Please input your word</h2>
              <div className="w-44 mt-1">
                <Input placeholder="Enter Word"/>
              </div>
              <div className="mt-5 mb-2"><Button> listen Voice</Button> </div>
            </div>
        </div>

        <div className="flex flex-col justify-content: space-between ml-2 w-1/3 rounded-2xl border-4 border-gray ">
          <div className="font-semibold m-1">Past</div>
          <div className="w-full h-full"></div>
          <div className="font-semibold m-1">Present</div>
          <div className="w-full h-full"></div>
          <div className="font-semibold m-1">Future</div>
          <div className="w-full h-full"></div>
        </div>
      </div>
      <div className="flex flex-row space-x-1 h-32 w-full mb-4">
        <div className="rounded-2xl border-4 border-gray w-full">
          <div className="font-semibold m-1">Synonyms</div>
          <div></div>
        </div>
        <div className="rounded-2xl border-4 border-gray w-full">
          <div className="font-semibold m-1">antynoms</div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col h-44 space-y-2">
          <div>
            <div className="rounded-2xl border-4 border-gray w-full h-20 ">
              <div className="m-1 font-semibold">defination</div>
            </div>
            <div></div>
          </div>
          <div>
            <div className="rounded-2xl border-4 border-gray w-full h-20">
              <div className="m-1 font-semibold">Examples</div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
