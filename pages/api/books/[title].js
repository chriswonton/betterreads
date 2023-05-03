import path from 'path'
import { promises as fs } from 'fs'
import useSWR from 'swr'
import {userRouter} from 'next/router'

// function to fetch a particular url and return the data as json
const fetcher = url => fetch(url).then(r => r.json())

export default function BookDetail() {
    const router = useRouter() // get access to our router object
    const { title } = router.query

    const { data, error } = useSWR(`api/books/${title}`, fetcher)

      // if the api encounters an error, this will render
    if (error) {
        return <Main>
        Error!
        </Main>
    }

    // if the data has not been resolved yet, this renders
    if (!data) {
        return <Main>
        Loading...
        </Main>
    }
}

export default async function handler(req, res) {
    // get the path that was entered that includes the title
    const { title } = req.query;

    // get the path to the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    // read in components from our json file
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(fileContents).filter(d => d.title === title);
    // send all of the file's contents as JSON to the client
    res.status(200).json(data)
}