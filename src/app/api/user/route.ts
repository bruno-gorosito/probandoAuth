import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

interface RequestBody {
    name: string;
    lastName: string;
    email: string;
    password: string;
}


export async function POST(req: NextRequest){
    const body: RequestBody = await req.json();
    const res = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if (res) return NextResponse.json(null)

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            lastName: body.lastName,
            password: await bcrypt.hash(body.password, 10)
        }
    })

    const {password, ...result} = user;
    return NextResponse.json(result);
}

