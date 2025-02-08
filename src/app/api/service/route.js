import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const BookingData = await req.json();
    const bookingCollection = dbConnect(collectionListObj.bookingCollection);
    const result = await bookingCollection.insertOne(BookingData);

    return NextResponse.json(result)
}