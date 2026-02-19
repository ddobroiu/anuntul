'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = (formData.get('name') as string) || '';
  const email = (formData.get('email') as string) || '';
  const subject = (formData.get('subject') as string) || 'Fără subiect';
  const message = (formData.get('message') as string) || '';

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Configurație lipsă: RESEND_API_KEY nu este setat.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Anuntul.net <onboarding@resend.dev>',
      to: ['contact@anuntul.net'],
      replyTo: email,
      subject: `Mesaj nou de la ${name}: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #d32f2f;">Mesaj nou de pe site</h2>
          <hr />
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subiect:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: 'Anuntul.net <onboarding@resend.dev>',
      to: [email],
      subject: 'Am primit mesajul tău - Anuntul.net',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Bună, ${name}</h2>
          <p>Îți confirmăm că am primit mesajul tău cu subiectul: <strong>${subject}</strong>.</p>
          <p>Echipa noastră te va contacta în cel mai scurt timp posibil.</p>
          <br />
          <p>O zi excelentă,<br />Echipa Anuntul.net</p>
        </div>
      `
    }).catch(e => console.error("Could not send customer confirmation:", e));

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: `Eroare Resend: ${error.name} - ${error.message}` };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Eroare necunoscută';
    return { success: false, error: `Eroare server: ${errorMessage}` };
  }
}

export async function sendPressReleaseEmail(formData: FormData) {
  const name = (formData.get('name') as string) || '';
  const email = (formData.get('email') as string) || '';
  const phone = (formData.get('phone') as string) || '';
  const title = (formData.get('title') as string) || 'Fără titlu';
  const pressReleaseQty = (formData.get('pressReleaseQty') as string) || '1';
  const content = (formData.get('content') as string) || '';
  const totalPrice = (formData.get('totalPrice') as string) || '490';
  const attachment = formData.get('attachment') as File | null;

  const selectedAddonsRaw = (formData.get('selectedAddonsList') as string) || '[]';
  let selectedAddons: string[] = [];
  try {
    selectedAddons = JSON.parse(selectedAddonsRaw);
  } catch (e) {
    console.error('Error parsing addons:', e);
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Configurație lipsă: RESEND_API_KEY nu este setat.' };
  }

  try {
    const emailPayload: any = {
      from: 'Anuntul.net Press <onboarding@resend.dev>',
      to: ['contact@anuntul.net'],
      replyTo: email,
      subject: `Comandă Nouă (${pressReleaseQty} buc): ${title} - ${totalPrice} LEI`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Comandă Comunicat de Presă</h1>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 20px; margin: 0;"><strong>Total de plată: ${totalPrice} LEI</strong></p>
          </div>

          <p><strong>Nume/Instituție:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Titlu:</strong> ${title}</p>
          ${attachment && attachment.size > 0 ? `<p style="color: #2563eb; font-weight: bold;">📎 Fișier atașat: ${attachment.name}</p>` : ''}
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <h3 style="color: #475569;">Pachet & Opțiuni:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 8px;">✅ Comunicat Standard x ${pressReleaseQty} (${490 * parseInt(pressReleaseQty)} lei)</li>
            ${selectedAddons.map(addon => `<li style="margin-bottom: 8px;">🔹 ${addon}</li>`).join('')}
          </ul>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <h3 style="color: #475569;">Conținut Comunicat:</h3>
          <div style="background-color: #fff; padding: 15px; border: 1px solid #eee; border-radius: 5px; line-height: 1.6;">
            ${content ? content.replace(/\n/g, '<br>') : '<em>Fișierul text/doc a fost trimis ca atașament.</em>'}
          </div>
        </div>
      `,
    };

    if (attachment && attachment.size > 0) {
      const buffer = Buffer.from(await attachment.arrayBuffer());
      emailPayload.attachments = [
        {
          filename: attachment.name,
          content: buffer,
        },
      ];
    }

    const { data, error } = await resend.emails.send(emailPayload);

    // Send confirmation to customer
    await resend.emails.send({
      from: 'Anuntul.net Press <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmare Comandă Comunicat - Anuntul.net',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Am primit comanda ta pentru: ${title}</h2>
          <p>Bună, ${name},</p>
          <p>Îți confirmăm primirea solicitării pentru publicarea comunicatului de presă.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Total de plată: ${totalPrice} LEI</strong></p>
          </div>
          
          <p>Un specialist Anuntul.net va verifica conținutul și te va contacta în scurt timp pentru validare și pașii următori privind plata.</p>
          <br />
          <p>Vă mulțumim pentru colaborare,<br />Echipa Anuntul.net</p>
        </div>
      `
    }).catch(e => console.error("Could not send press release confirmation to customer:", e));

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: `Eroare Resend: ${error.name} - ${error.message}` };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Eroare necunoscută';
    return { success: false, error: `Eroare server: ${errorMessage}` };
  }
}
