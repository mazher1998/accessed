// pages/api/enroll.js
import { Client } from "pg";
import { NextResponse } from "next/server";

export async function POST(req) {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    const { fullName, email, city, phone } = await req.json();

    if (!fullName || !city || !phone) {
      return NextResponse.json({
        success: false,
        message: "Please fill out all fields",
        status: 400,
      });
    }

    const duplicatePhone = await client.query(
      'SELECT phone FROM "Enrollments" WHERE phone = $1',
      [phone]
    );

    let duplicateEmail;
    if (email) {
      duplicateEmail = await client.query(
        'SELECT email FROM "Enrollments" WHERE  email = $1',
        [email]
      );
    }

    if (duplicatePhone?.rows?.length > 0 || duplicateEmail?.rows?.length > 0) {
      let message = "";

      if (
        duplicatePhone?.rows[0]?.phone === phone &&
        duplicateEmail?.rows[0]?.email === email
      ) {
        message = "Phone number and Email address already exists";
      } else if (duplicatePhone?.rows[0]?.phone === phone) {
        message = "Phone number already exists";
      } else if (duplicateEmail?.rows[0]?.email === email) {
        message = "Email address already exists";
      }

      return NextResponse.json({ success: false, message, status: 409 });
    }

     await client.query(
      'INSERT INTO "Enrollments" (full_name, email, phone, city) VALUES ($1, $2, $3, $4)',
      [fullName, email, phone, city]
    );

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({
      success: false,
      message: error.message,
      status: 500,
    });
  } finally {
    await client.end();
  }
}
