import { NextResponse} from "next/server";
import fsPromises from 'fs/promises';
import path from 'path';

const scheduleFilePath = path.join(process.cwd(), 'public/mocks/schedule.json');

export async function GET() {
  try {
    const schedule = await fsPromises.readFile(scheduleFilePath, 'utf-8');
    const json = JSON.parse(schedule);
    return NextResponse.json(json);
  } catch (err) { 
    return new NextResponse(JSON.stringify({ message: "No dishes found!" }),
            { status: 404, headers: { 'content-type': 'application/json' } });  
  }
}