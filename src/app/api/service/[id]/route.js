import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const collection = dbConnect(collectionListObj.serviceCollection);
    const data = await collection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
}

export const DELETE = async (req, { params }) => {
    const p = await params;
    const session = await getServerSession();
    const collection = dbConnect(collectionListObj.bookingCollection);
    const email = session?.user?.email;
    const userCheck = await collection.findOne({ _id: new ObjectId(p.id) });
    const isUserOk = userCheck?.email == email

    if (isUserOk) {
        const deletedData = await collection.deleteOne({ _id: new ObjectId(p.id) });
        revalidatePath('/my-bookings')
        return NextResponse.json(deletedData);
    }
    else {
        return NextResponse.json({ success: false, message: "unauthorize access" })
    }
}