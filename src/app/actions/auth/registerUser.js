"use server"

import { dbConnect, collectionListObj } from "@/lib/dbConnect"
import bcrypt from 'bcrypt'

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionListObj.userCollection);
    const { name, email, password } = payload;
    const user = await userCollection.findOne({ email: email });

    if (!email || !password) {
        return null;
    }

    if (!user) {
        const hashPassword = await bcrypt.hash(password, 10);
        payload.password = hashPassword;
        const result = await userCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged, insertedId: insertedId.buffer.toString('hex') }
    }
    else {
        return { success: false }
    }
}