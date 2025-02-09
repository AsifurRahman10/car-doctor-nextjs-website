import { authOptions } from "@/lib/authOptions";
import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionListObj.bookingCollection);

    const result = await bookingCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(result);
}

export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollection = dbConnect(collectionListObj.bookingCollection);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const body = await req.json()

    const bookingData = await bookingCollection.findOne({ _id: new ObjectId(p.id) });

    const checkUser = email === bookingData.email;

    if (checkUser) {
        const query = { _id: new ObjectId(p.id) };
        const filter = {
            $set: { ...body }
        }
        const updateData = await bookingCollection.updateOne(query, filter)
        return NextResponse.json(updateData)
    }
    else {
        return NextResponse.json({ message: "not allowed" })
    }
}