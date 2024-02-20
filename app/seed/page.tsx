import prisma from "../utils/db"
import { Button } from "../../components/ui/button"
import { fakeData } from "./fake-data"

export default function SeedDatabase() {
  async function postData() {
    "use server"

    await prisma.movie.createMany({
      data: fakeData
    })
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">
          Generate Data
        </Button>
      </form>
    </div>
  )
}