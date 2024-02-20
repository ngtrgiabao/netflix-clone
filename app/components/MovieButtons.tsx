"use client"

import { Button } from "@/components/ui/button"
import { Info, PlayCircle } from "lucide-react"
import { useState } from "react"
import PlayVideoModal from "./PlayVideoModal";

interface MovieButtonsProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

export default function MovieButtons({
  overview,
  youtubeUrl,
  id,
  age,
  title,
  releaseDate,
  duration,
}: MovieButtonsProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
        <Info className="mr-2 h-6 w-6" /> Learn more
      </Button>

      <PlayVideoModal
        key={id}
        state={open}
        changeState={setOpen}
        overview={overview}
        youtubeUrl={youtubeUrl}
        age={age}
        title={title}
        release={releaseDate}
        duration={duration} />
    </>
  )
}