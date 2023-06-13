import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'
import { signJwtAccessToken } from "@/lib/jwt";
import { cookies } from "next/dist/client/components/headers";

interface RequestBody {
    email: string;
    password: string;
}


export async function POST(req: NextRequest) {
    const body: RequestBody = await req.json();
    
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        }
    })

    if (user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass} = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken
        }
        return NextResponse.json(result)
    } else return NextResponse.json(null)
}