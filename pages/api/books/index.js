import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
    // get the path to the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    // read in components from our json file
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(fileContents);
    // send all of the file's contents as JSON to the client
    res.status(200).json(data)
}