'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY || process.env.REESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'Configurație lipsă: RESEND_API_KEY nu este setat.' };
  }
  const resend = new Resend(apiKey);
  const name = (formData.get('name') as string) || '';
  const email = (formData.get('email') as string) || '';
  const subject = (formData.get('subject') as string) || 'Fără subiect';
  const message = (formData.get('message') as string) || '';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Anuntul.info <onboarding@resend.dev>',
      to: ['contact@anuntul.info'],
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
      from: 'Anuntul.info <onboarding@resend.dev>',
      to: [email],
      subject: 'Am primit mesajul tău - Anuntul.info',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Bună, ${name}</h2>
          <p>Îți confirmăm că am primit mesajul tău cu subiectul: <strong>${subject}</strong>.</p>
          <p>Echipa noastră te va contacta în cel mai scurt timp posibil.</p>
          <br />
          <p>O zi excelentă,<br />Echipa Anuntul.info</p>
        </div>
      `
    }).catch(e => console.error("Could not send customer confirmation:", e));

    if (error) {
      console.error('Detailed Resend Error:', JSON.stringify(error, null, 2));
      let friendlyError = `Eroare Resend: ${error.message}`;
      if (error.message.toLowerCase().includes('trial') || error.message.toLowerCase().includes('onboarding')) {
        friendlyError = "Eroare: Resend e în modul 'Onboarding'. Poți trimite doar la adresa cu care te-ai înscris în Resend. Verifică email-ul sau validează domeniul anuntul.info.";
      }
      return { success: false, error: friendlyError };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Eroare necunoscută';
    return { success: false, error: `Eroare server: ${errorMessage}` };
  }
}

export async function sendPressReleaseEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY || process.env.REESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'Configurație lipsă: RESEND_API_KEY nu este setat.' };
  }
  const resend = new Resend(apiKey);
  
  const name = (formData.get('name') as string) || '';
  const email = (formData.get('email') as string) || '';
  const phone = (formData.get('phone') as string) || '';
  const title = (formData.get('title') as string) || 'Fără titlu';
  const content = (formData.get('content') as string) || '';
  const attachment = formData.get('attachment') as File | null;

  const wantsVisualIdentity = formData.get('wantsVisualIdentity') === 'yes';
  const wantsProof = formData.get('wantsProof') === 'yes';
  const grandTotal = formData.get('grandTotal') as string;
  const pressReleasePrice = formData.get('pressReleasePrice') as string;
  const kitTotal = formData.get('kitTotal') as string;
  
  const FONDURI_EU_OPTIONS = [
    { id: 'vi_banner_digital', label: 'Banner site (Digital)', group: 'Banner site' },
    { id: 'vi_afis_a4', label: 'Format A4', group: 'Afiș informativ' },
    { id: 'vi_afis_a3', label: 'Format A3', group: 'Afiș informativ' },
    { id: 'vi_afis_a2', label: 'Format A2', group: 'Afiș informativ' },
    { id: 'vi_auto_mic_10', label: '10×10 cm (set 20 buc)', group: 'Autocolante mici' },
    { id: 'vi_auto_mic_15', label: '15×15 cm (set 10 buc)', group: 'Autocolante mici' },
    { id: 'vi_auto_mic_21', label: '15×21 cm (set 5 buc)', group: 'Autocolante mici' },
    { id: 'vi_auto_mare_30', label: '30×30 cm (set 3 buc)', group: 'Autocolante mari' },
    { id: 'vi_auto_mare_40', label: '40×40 cm (1 buc)', group: 'Autocolante mari' },
    { id: 'vi_panou_a2', label: 'Format A2', group: 'Panou temporar' },
    { id: 'vi_panou_80', label: '80×50 cm', group: 'Panou temporar' },
    { id: 'vi_panou_200', label: '200×150 cm', group: 'Panou temporar' },
    { id: 'vi_panou_300', label: '300×200 cm', group: 'Panou temporar' },
    { id: 'vi_placa_a2', label: 'Format A2', group: 'Placă permanentă' },
    { id: 'vi_placa_80', label: '80×50 cm', group: 'Placă permanentă' },
    { id: 'vi_placa_150', label: '150×100 cm', group: 'Placă permanentă' },
  ];

  const visualIdentitySelected = FONDURI_EU_OPTIONS
    .map(opt => {
      const qty = parseInt(formData.get(opt.id) as string || '0', 10);
      return qty > 0 ? `&bull; ${opt.group}: <strong>${opt.label}</strong> (x${qty} buc)` : null;
    })
    .filter(Boolean)
    .join('<br />');

  try {
    const emailPayload: any = {
      from: 'Anuntul.info Press <onboarding@resend.dev>',
      to: ['contact@anuntul.info'],
      replyTo: email,
      subject: `Solicitare Publicare Comunicat: ${title}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 4px solid #cc0000; border-radius: 0;">
          <h1 style="color: #cc0000; text-transform: uppercase; font-family: serif; border-bottom: 2px solid #eee; padding-bottom: 15px;">Solicitare Publicare</h1>
          
          <p><strong>Nume/Instituție:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Titlu propus:</strong> ${title}</p>
          ${attachment && attachment.size > 0 ? `<p style="color: #cc0000; font-weight: bold;">📎 Fișier atașat: ${attachment.name}</p>` : ''}
          
          <h3 style="color: #1a1a1a; text-transform: uppercase; font-size: 0.9rem;">Detalii Financiare / Servicii Solicitate</h3>
          <div style="background-color: #fafafa; padding: 15px; border: 1px solid #eee; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Servicii Publicare:</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Publicare Standard: 490 LEI</li>
              ${wantsProof ? '<li>Dovadă performanță (3000 vizitatori unici): +200 LEI</li>' : ''}
            </ul>
            <p style="margin: 10px 0 0 0;">Total Publicare: <strong>${pressReleasePrice} LEI</strong></p>
          </div>

          ${wantsVisualIdentity ? `
          <div style="background-color: #fafafa; padding: 15px; border-left: 4px solid #cc0000; margin: 15px 0;">
            <strong style="color: #cc0000; text-transform: uppercase;">A solicitat și Kit Identitate Vizuală (Print/PNRR)</strong><br /><br />
            <div style="font-size: 14px; line-height: 1.6;">
              ${visualIdentitySelected || '<em>A bifat opțiunea, dar nu a configurat materiale.'}
            </div>
            ${visualIdentitySelected ? `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #ccc; font-weight: bold;">Valoare estimată Kit PNRR: ${kitTotal} LEI</div>` : ''}
          </div>` : ''}

          <div style="background-color: #000; color: #fff; padding: 15px; text-transform: uppercase; font-weight: bold; font-size: 1.1rem; margin: 20px 0;">
            TOTAL ESTIMAT DE FACTURAT: ${grandTotal} LEI
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <h3 style="color: #1a1a1a; text-transform: uppercase; font-size: 0.9rem;">Conținut / Observații:</h3>
          <div style="background-color: #fff; padding: 15px; border: 1px solid #eee; line-height: 1.6;">
            ${content ? content.replace(/\n/g, '<br>') : '<em>Fișierul a fost trimis ca atașament.</em>'}
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
      from: 'Anuntul.info Press <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmare Solicitare Comunicat - Anuntul.info',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #cc0000; font-family: serif;">Am primit solicitarea dumneavoastră</h2>
          <p>Bună ziua, ${name},</p>
          <p>Vă mulțumim pentru interesul manifestat față de platforma <strong>Anuntul.info</strong>.</p>
          <p>Am primit solicitarea dumneavoastră pentru publicarea comunicatului și un specialist din departamentul nostru editorial o va analiza în cel mai scurt timp.</p>
          <p>Vă vom contacta telefonic sau prin email pentru pașii următori privind validarea textului și facturarea.</p>
          <br />
          <p>Cu stimă,<br />Echipa Anuntul.info</p>
        </div>
      `
    }).catch(e => console.error("Could not send press release confirmation to customer:", e));

    if (error) {
      console.error('Detailed Resend Error:', JSON.stringify(error, null, 2));
      return { success: false, error: `Eroare trimitere: ${error.message}` };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Eroare necunoscută';
    return { success: false, error: `Eroare server: ${errorMessage}` };
  }
}
