import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

    const p = await params;
    const collection = dbConnect(collectionListObj.serviceCollection);
    const data = await collection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
}