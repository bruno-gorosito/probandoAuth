import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

interface RequestBody {
    name: string;
    lastName: string;
    email: string;
    password: string;
    admin?: boolean;
}


export async function POST(req: NextRequest){
    const body: RequestBody = await req.json();
    const res = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if (res) return NextResponse.json(null)

    let user;
    if (!body.admin) {
        user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                lastName: body.lastName,
                password: await bcrypt.hash(body.password, 10)
            }
        })    
    } else {
        user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                lastName: body.lastName,
                admin: body.admin,
                password: await bcrypt.hash(body.password, 10)
            }
        })    
    }
    const {password, ...result} = user;
    return NextResponse.json(result);
}

export function GET(){
    return NextResponse.json({msgh: 'olis'})
}