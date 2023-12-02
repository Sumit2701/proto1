import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

 export async function POST(req,res) { 
  const formData = req.body; // The form data sent from the client

  try {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();
    
    // Insert the formData into your MongoDB collection
    const result = await db.collection('yourCollection').insertOne(formData);
    
    await client.close();

    return Response.json(" submitted sucessfully")

  } catch (error) {
    // res.status(500).json({ error: 'Error submitting form data' });
  }
}
  




    // export default async function GET(req, res) {
    //   const client = new MongoClient(process.env.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   });
    //   await client.connect();
    //   const db = client.db();
    //    const posts = await db.collection('posts').find({}).toArray();
    //       res.status(200).json(posts);
    //   await client.close();
    // }

    // const newPost = req.body;
    // const result = await db.collection('posts').insertOne(newPost);
    // res.status(201).json(result.ops[0]);