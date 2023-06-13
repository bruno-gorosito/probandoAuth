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
    console.log(body)
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        }
    })
    console.log(user)

    if (user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass} = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken
        }
        // cookies().set('token', accessToken)
        return NextResponse.json(result)
    } else return NextResponse.json(null)
}