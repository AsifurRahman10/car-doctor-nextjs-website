import { authOptions } from "@/lib/authOptions";
import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const bookingCollection = dbConnect(collectionListObj.bookingCollection)
        const myBookingData = await bookingCollection.find({ email }).toArray()
        return NextResponse.json(myBookingData)
    }
    return NextResponse.json([])
}

export const POST = async (req) => {
    const BookingData = await req.json();
    const bookingCollection = dbConnect(collectionListObj.bookingCollection);
    const result = await bookingCollection.insertOne(BookingData);

    return NextResponse.json(result)
}