import { NextResponse } from 'next/server';
import sgClient from '@sendgrid/client';

sgClient.setApiKey("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");

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, city, phone  } = body;
    const data = {
      list_ids: ["6c5ebd35-e5d9-412d-ba22-4949950e4c5d"],
      contacts: [
        {
          email: email,
          first_name: fullName.split(' ')[0],
          last_name: fullName.split(' ').slice(1).join(' '),
          city: city,
          phone_number_id	: phone,
          custom_fields: {
            // university: university,
            // test: test
          }
        }
      ]
    };

    const request = {
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: data
    };

    const [response] = await sgClient.request(request);

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return NextResponse.json({ success: true, message: "You have been successfully enrolled" });
    } else {
      throw new Error('Failed to add contact to SendGrid');
    }

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}