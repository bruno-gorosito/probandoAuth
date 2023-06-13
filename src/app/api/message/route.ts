import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    msg: string;
    transmitter: string;
    receiver: string;
}

export async function POST(req: NextRequest){
    const body: RequestBody = await req.json()
    return NextResponse.json(body)
}

export async function GET() {
    return NextResponse.json({msg: 'ola'})
}