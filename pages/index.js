import { Sidebar } from "./../components/sidebar";
import { Card } from "./../components/card";
import { useEffect, useState, useRef } from "react";
import * as data from "./content.json";

export default function Home() {
  const player = useRef();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [videosrc, setVideosrc] = useState("");
  const [info, setInfo] = useState("");
  const [chapter, setChapter] = useState({});
  const [exercise, setExercise] = useState("");
  const [files, setFiles] = useState([]);

  const [active, setActive] = useState("din5008");

  useEffect(() => {
    setTitle(data.collection[active].title);
    setSubtitle(data.collection[active].subtitle);
    setVideosrc(data.collection[active].videosrc);
    setInfo(data.collection[active].info);
    setChapter(data.collection[active].chapters);
    setExercise(data.collection[active].exercise);
    setFiles(data.collection[active].files);
    player.current.load();
  }, [active]);

  const handleClick = (temp) => {
    setActive(temp);
  };

  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar handleClick={handleClick} />
        <div className="flex-1">
          <div className="flex h-screen bg-gray-100">
            <div className="flex  flex-1 flex-col p-8">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <div className="text-2xl font-bold">{title}</div>
                    <div className="text-gray-500">{subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                  <div className="rounded-2xl bg-gray-900 px-8 py-3 text-white">
                    Lektion beenden
                  </div>
                </div>
              </div>
              <div className="">
                <video ref={player} controls className="rounded-2xl  w-full">
                  <source src={videosrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <Card
              player={player.current}
              info={info}
              exercise={exercise}
              chapter={chapter}
              files={files}
            />
          </div>
        </div>
      </div>
    </>
  );
}
