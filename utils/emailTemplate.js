export const emailTemplate = ({
  email,
  first_name,
  last_name,
  phone_nbr,
  code_postal,
  isDeliveryOption,
  phone,
  model,
  problems,
}) => {
  const staticProblemHTML = problems
    .map(
      (problem) => `<p style="margin: 0; margin-bottom: 16px;">${problem}</p>`
    )
    .join("");

  return `
      <!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta first_name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
          <style>
              * {
                  box-sizing: border-box;
              }
      
              body {
                  margin: 0;
                  padding: 0;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
      
              .image_block img+div {
                  display: none;
              }
      
              @media (max-width:620px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
      
                  .icons-inner {
                      text-align: center;
                  }
      
                  .icons-inner td {
                      margin: 0 auto;
                  }
      
                  .mobile_hide {
                      display: none;
                  }
      
                  .row-content {
                      width: 100% !important;
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      
      <body style="background-color: #fff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
              <tbody>
                  <tr>
                      <td>
                          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 600px; margin: 0 auto;" width="600">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                          <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad" style="width:100%;">
                                                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://prestige-phone.vercel.app/_next/static/media/Logo.621adf2c.svg" style="display: block; height: auto; border: 0; max-width: 190px; width: 100%;" width="190"></div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <h1 style="margin: 0; color: #424242; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 30px; font-weight: 700; letter-spacing: normal; line-height: 120%; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">
                                                                      Email du site web d'I-rep
                                                                      </span></h1>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                              <tr>
                                                                  <td class="pad">
                                                                      <div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                      ${
                                                                        email
                                                                          ? `<p style="margin: 0; margin-bottom: 16px;">E-mail: <strong>${email}</strong></p>`
                                                                          : ""
                                                                      }    
                                                                      ${
                                                                        first_name
                                                                          ? `<p style="margin: 0; margin-bottom: 16px;">Nom Complet: <strong>${
                                                                              first_name +
                                                                              "  "
                                                                            }  ${last_name}</strong></p>`
                                                                          : ""
                                                                      }

                                                                      ${
                                                                        phone_nbr
                                                                          ? `<p style="margin: 0; margin-bottom: 16px;">Numéro de Téléphone: <strong>${phone_nbr}</strong></p>`
                                                                          : ""
                                                                      }
                                                                             
                                                                              ${
                                                                                code_postal
                                                                                  ? `<p style="margin: 0; margin-bottom: 16px;">code postal: <strong>${code_postal}</strong></p>`
                                                                                  : ""
                                                                              }
                                                                      
                                                                                  ${`<p style="margin: 0; margin-bottom: 16px;">Service concerné: <strong>${
                                                                                    isDeliveryOption
                                                                                      ? "Il apportera son téléphone"
                                                                                      : "Nous devons appeler le livreur"
                                                                                  }</strong></p>`}

                                                                      <!-- Phone Details -->
                                                                      <h2 style="margin: 20px 0; color: #424242; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%;">Détails du téléphone</h2>
                                                                      <p style="margin: 0; margin-bottom: 16px;">Téléphone: <strong>${phone}</strong></p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">Modèle: <strong>${model}</strong></p>
                                                                      
                                                      ${staticProblemHTML}
                                                                  </div>
                                                                  </td>
                                                              </tr>
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
      </body>
      
      </html>
      `;
};