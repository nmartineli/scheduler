import { NextResponse } from 'next/server';
import fsPromises from 'fs/promises';
import path from 'path';

const profileFilePath = path.join(process.cwd(), 'public/mocks/profile.json');

export async function GET() {
	try {
		const profile = await fsPromises.readFile(profileFilePath, 'utf-8');
		const json = JSON.parse(profile);
		return NextResponse.json(json);
	} catch (err) {
		return new NextResponse(JSON.stringify({ message: 'No dishes found!' }), {
			status: 404,
			headers: { 'content-type': 'application/json' },
		});
	}
}
