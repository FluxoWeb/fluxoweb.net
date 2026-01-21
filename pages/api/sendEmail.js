import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com', // Cambia esto por tu servidor SMTP
      port: 587, // Puerto SMTP
      secure: false, // No usar SSL o TLS
      auth: {
        user: 'a081f8001@smtp-brevo.com', // Tu dirección de correo
        pass: process.env.BREVO_API_KEY, // Tu contraseña
      },
    });

    const htmlMessage = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>${subject}</title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    
    <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif;">
    
        <!-- Wrapper -->
        <div class="es-wrapper-color" style="background-color: #efefef; padding: 20px;">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#efefef"></v:fill>
          </v:background>
        <![endif]-->
    
            <!-- Main Table -->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed; border-radius: 20px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
                <tbody>
                    <!-- Header -->
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="es-adaptive esd-stripe" esd-custom-block-id="6020" align="center">
                                            <table class="es-content-body" style="background-color: transparent;"
                                                width="600" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p10" align="center">
                                                            <!-- Logo -->
                                                            <img src="https://i.postimg.cc/0NNkHgPZ/Brain.png"
                                                                alt="Financial Logo" title="Financial Logo" width="134"
                                                                style="display: block; margin: 0 auto; border-radius: 20px;">
                                                            <!-- Title -->
                                                            <h1 style="margin: 10px 0; text-align: center; color: #333333;">Fluxo Web Form WebSite</h1>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
    
                            <!-- Content -->
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" esd-custom-block-id="6023" align="center">
                                            <table class="es-content-body" width="600" cellspacing="0" cellpadding="0"
                                                bgcolor="#ffffff" align="center" style="border-radius: 20px; margin-bottom: 25px;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p30r es-p30l"
                                                            align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame"
                                                                            esd-custom-block-id="11296" width="540"
                                                                            valign="top" align="center">
                                                                            <table width="100%" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text"
                                                                                            align="left">
                                                                                            <!-- Email Label and Value -->
                                                                                            <p style="color: #999999; margin-bottom: 5px; padding-left: 1em;">Email del Cliente:</p>
                                                                                            <h3 style="color: #666666; margin: 0; padding-left: 2em;">${email}
                                                                                            </h3>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p15t"
                                                                                            align="left">
                                                                                            <!-- Message Label and Value -->
                                                                                            <p style="color: #999999; margin-bottom: 5px; padding-left: 1em;">Mensaje del Cliente:</p>
                                                                                            <p style="color: #666666; margin: 0; padding-left: 2em; margin-bottom: 20px;">${message}</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>
    
    `;

    const mailOptions = {
      from: email,
      to: 'fluxoweb.py@gmail.com', // Reemplaza con la dirección de correo de destino
      subject,
      html: htmlMessage,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Correo enviado con éxito.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    }
  } else {
    res.status(405).end();
  }
};
