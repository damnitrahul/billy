const functions = require('firebase-functions');
const admin = require('firebase-admin');

const sg = require('@sendgrid/mail');

admin.initializeApp();
const db = admin.firestore();

const API_KEY = functions.config().sendgrid.key;
sg.setApiKey(API_KEY);

const formatNum = (num) =>
  num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

exports.welcomeMail = functions.auth.user().onCreate((user) => {
  const id = user.uid;
  db.collection('users')
    .doc(id)
    .get()
    .then((doc) => {
      const user = doc.data();
      const mail = {
        to: user.email,
        from: 'billy@damnitrahul.com',
        templateId: 'd-bebf957a522e45898bccc82e3bd1b125',
        dynamic_template_data: {
          name: user.firstName
        }
      };
      sg.send(mail);
    }).catch((err) => {
      console.log(err);
      return 'ERROR';
    });

  return 'Message Sent';
});

exports.invoiceGenerateMail = functions.firestore
  .document('users/{user}/invoices/{invoice}')
  .onCreate((doc) => {
    const invoice = doc.data();
    const mail = {
      to: invoice.email,
      from: 'billy@damnitrahul.com',
      templateId: 'd-7b2a7a4c41604eeda7aa0d7ec57b056c',
      dynamic_template_data: {
        subject: `Invoice Received from ${invoice.companyName}`,
        name: invoice.customerName,
        message: `You have received an Invoice from ${invoice.companyName}.`,
        currency: invoice.currency === 'inr' ? '₹' : '$',
        totalAmount: formatNum(invoice.totalAmount),
        taxPercent: invoice.taxPercent,
        taxEnable: invoice.taxEnable === 'true' ? true : false,
        excTax: invoice.taxType === 'exc',
        incTax: invoice.taxType === 'inc',
        totalExclusiveTax: formatNum(invoice.totalExclusiveTax),
        totalInclusiveTax: formatNum(invoice.totalInclusiveTax),
        totalWithExclusiveTax: formatNum(invoice.totalWithExclusiveTax),
        note: invoice.note,
        items: invoice.items
      }
    };
    sg.send(mail);
    return 'Message Sent';
  });

exports.invoiceRemindMail = functions.https.onCall(async (data, context) => {
  const invoice = db
    .collection('users')
    .doc(context.auth.uid)
    .collection('invoices')
    .doc(data)
    .get()
    .then((data) => {
      const invoice = data.data();
      const mail = {
        to: invoice.email,
        from: 'billy@damnitrahul.com',
        templateId: 'd-7b2a7a4c41604eeda7aa0d7ec57b056c',
        dynamic_template_data: {
          subject: `Payment Reminder from ${invoice.companyName}`,
          name: invoice.customerName,
          message: `You have received an Invoice from ${invoice.companyName}.`,
          currency: invoice.currency === 'inr' ? '₹' : '$',
          totalAmount: formatNum(invoice.totalAmount),
          taxPercent: invoice.taxPercent,
          taxEnable: invoice.taxEnable === 'true' ? true : false,
          excTax: invoice.taxType === 'exc',
          incTax: invoice.taxType === 'inc',
          totalExclusiveTax: formatNum(invoice.totalExclusiveTax),
          totalInclusiveTax: formatNum(invoice.totalInclusiveTax),
          totalWithExclusiveTax: formatNum(invoice.totalWithExclusiveTax),
          note: invoice.note,
          items: invoice.items
        }
      };
      sg.send(mail);
    })
    .then((res) => {
      return 'SENT';
    })
    .catch((err) => {
      console.log(err);
      return 'ERROR';
    });
  return await invoice;
});
