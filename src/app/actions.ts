'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const subject = (formData.get('subject') as string) || 'Fără subiect';
    const message = (formData.get('message') as string) || '';

    try {
        const { data, error } = await resend.emails.send({
            from: 'Anuntul.net Contact <onboarding@resend.dev>',
            to: ['contact@anuntul.net'],
            replyTo: email,
            subject: `Mesaj nou: ${subject}`,
            html: `
        <div>
          <h1>Mesaj nou de pe site</h1>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subiect:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        if (error) {
            // Logic for handling error
            console.error('Resend error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Server error:', error);
        return { success: false, error: 'Eroare internă la trimiterea emailului.' };
    }
}

export async function sendPressReleaseEmail(formData: FormData) {
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const title = (formData.get('title') as string) || 'Fără titlu';
    const category = (formData.get('category') as string) || 'General';
    const region = (formData.get('region') as string) || 'National';
    const content = (formData.get('content') as string) || '';

    try {
        const { data, error } = await resend.emails.send({
            from: 'Anuntul.net Press <onboarding@resend.dev>',
            to: ['contact@anuntul.net'],
            replyTo: email,
            subject: `Comunicat Nou: ${title}`,
            html: `
        <div>
          <h1>Comunicat de Presă Nou</h1>
          <p><strong>Nume/Instituție:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Titlu:</strong> ${title}</p>
          <p><strong>Categorie:</strong> ${category}</p>
          <p><strong>Regiune:</strong> ${region}</p>
          <hr />
          <p><strong>Conținut:</strong></p>
          <p>${content.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Server error:', error);
        return { success: false, error: 'Eroare internă la trimiterea comunicatului.' };
    }
}
