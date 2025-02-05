import { jsPDF } from 'jspdf';
import { initializePage, addNewPage, drawDivider } from './layout';
import { addTitle, addSectionHeader, addText, addField, addSignatureLine } from './text';
import { AGREEMENT_SECTIONS, PAYMENT_FIELDS, SIGNATURE_FIELDS } from './sections';

export const generateClientAgreement = (): jsPDF => {
  const doc = initializePage();
  let yPos = 60;

  // Title
  yPos = addTitle(doc, 'Interior Design Client Agreement', yPos);
  yPos = drawDivider(doc, yPos);

  // Add sections
  Object.values(AGREEMENT_SECTIONS).forEach(section => {
    yPos = addSectionHeader(doc, section.title, yPos);
    
    if (Array.isArray(section.content)) {
      section.content.forEach(line => {
        yPos = addText(doc, line, yPos);
      });
    } else {
      yPos = addText(doc, section.content, yPos);
    }

    // Add some spacing between sections
    yPos += 10;

    // Check if we need a new page
    if (yPos > doc.internal.pageSize.height - 100) {
      yPos = addNewPage(doc);
    }
  });

  // Payment Fields
  yPos = addNewPage(doc);
  yPos = addSectionHeader(doc, 'Payment Details', yPos);
  
  PAYMENT_FIELDS.forEach(field => {
    yPos = addField(doc, field, yPos);
  });

  // Signatures
  yPos = drawDivider(doc, yPos + 20);
  SIGNATURE_FIELDS.forEach(field => {
    yPos = addSignatureLine(doc, field, yPos);
  });

  return doc;
};

export * from './constants';
export * from './layout';
export * from './text';
export * from './sections';