import { NextResponse } from 'next/server';
import sgClient from '@sendgrid/client';

sgClient.setApiKey("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");

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, city, phone  } = body;
    // Prepare the contact data

    // Case 1 If the email is already in the contact data
    // const searchRequest = {
    //   url: `/v3/marketing/contacts/search/emails`,
    //   method: 'POST',
    //   body: { emails: [email] }
    // };
    // const [searchResponse] = await sgClient.request(searchRequest);
    // const existingContacts = searchResponse.body.result[email]; 

    // if (existingContacts) {
    //   return NextResponse.json({
    //     success: false,
    //     message: 'Email already exists in the contact list.'
    //   });
    // }
    // else{
      
    // }

    const data = {
      list_ids: ["6b8b8054-ae4d-4a97-9c60-26902cb28ee7"],
      contacts: [
        {
          email: email,
          first_name: fullName.split(' ')[0],
          last_name: fullName.split(' ').slice(1).join(' '),
          city: city,
          phone_number: phone,
          custom_fields: {
            // university: university,
            // test: test
          }
        }
      ]
    };

    // Case 2 If the email is not in the contact data
    const request = {
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: data
    };

    const [response] = await sgClient.request(request);
    // console.log('Contact added to SendGrid: ', response);

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