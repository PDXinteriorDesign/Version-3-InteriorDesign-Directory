import { jsPDF } from 'jspdf';
import { PAGE_SETTINGS, FONTS, COLORS, FONT_SIZES } from './constants';

export const initializePage = (): jsPDF => {
  return new jsPDF({ 
    unit: PAGE_SETTINGS.unit, 
    format: PAGE_SETTINGS.format 
  });
};

export const getPageWidth = (doc: jsPDF): number => {
  return doc.internal.pageSize.width;
};

export const addNewPage = (doc: jsPDF): number => {
  doc.addPage();
  return PAGE_SETTINGS.margin + 20; // Return initial Y position for new page
};

export const drawDivider = (doc: jsPDF, yPos: number): number => {
  const pageWidth = getPageWidth(doc);
  doc.setDrawColor(...COLORS.divider);
  doc.setLineWidth(1);
  doc.line(
    PAGE_SETTINGS.margin, 
    yPos, 
    pageWidth - PAGE_SETTINGS.margin, 
    yPos
  );
  return yPos + PAGE_SETTINGS.lineHeight * 0.5;
};