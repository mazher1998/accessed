import { NextResponse } from 'next/server';
import sgClient from '@sendgrid/client';

sgClient.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email,  } = body;
    // Prepare the contact data
    const data = {
      list_ids: [process.env.CONTACT_LIST_ID],
      contacts: [
        {
          email: email,
          first_name: fullName.split(' ')[0],
          last_name: fullName.split(' ').slice(1).join(' '),
          // custom_fields: {
          //   city: city,
          //   phone: phone,
          //   university: university,
          //   test_type: test
          // }
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
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Failed to add contact to SendGrid');
    }

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}