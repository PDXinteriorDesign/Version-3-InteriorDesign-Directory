import { jsPDF } from 'jspdf';
import { PAGE_SETTINGS, FONTS, COLORS, FONT_SIZES } from './constants';
import { getPageWidth } from './layout';

export const addTitle = (doc: jsPDF, text: string, yPos: number): number => {
  const pageWidth = getPageWidth(doc);
  doc.setFont(FONTS.primary, FONTS.weights.bold);
  doc.setFontSize(FONT_SIZES.title);
  doc.text(text, pageWidth / 2, yPos, { align: 'center' });
  return yPos + PAGE_SETTINGS.lineHeight + 10;
};

export const addSectionHeader = (doc: jsPDF, text: string, yPos: number): number => {
  doc.setFont(FONTS.primary, FONTS.weights.bold);
  doc.setFontSize(FONT_SIZES.sectionHeader);
  doc.setTextColor(...COLORS.primary);
  doc.text(text, PAGE_SETTINGS.margin, yPos);
  return yPos + PAGE_SETTINGS.lineHeight;
};

export const addText = (doc: jsPDF, text: string, yPos: number): number => {
  const pageWidth = getPageWidth(doc);
  doc.setFont(FONTS.primary, FONTS.weights.normal);
  doc.setFontSize(FONT_SIZES.body);
  doc.setTextColor(...COLORS.text);
  
  const lines = doc.splitTextToSize(
    text, 
    pageWidth - PAGE_SETTINGS.margin * 2
  );
  doc.text(lines, PAGE_SETTINGS.margin, yPos);
  return yPos + PAGE_SETTINGS.lineHeight * lines.length;
};

export const addField = (doc: jsPDF, label: string, yPos: number): number => {
  const pageWidth = getPageWidth(doc);
  doc.setFont(FONTS.primary, FONTS.weights.bold);
  doc.setFontSize(FONT_SIZES.body);
  doc.setTextColor(...COLORS.text);
  doc.text(`${label}:`, PAGE_SETTINGS.margin, yPos);
  
  // Draw underline
  doc.setLineWidth(0.5);
  doc.line(
    PAGE_SETTINGS.margin + 80, 
    yPos - 4, 
    pageWidth - PAGE_SETTINGS.margin, 
    yPos - 4
  );
  
  return yPos + PAGE_SETTINGS.lineHeight;
};

export const addSignatureLine = (doc: jsPDF, label: string, yPos: number): number => {
  const pageWidth = getPageWidth(doc);
  doc.setFont(FONTS.primary, FONTS.weights.bold);
  doc.setFontSize(FONT_SIZES.body);
  doc.text(`${label}:`, PAGE_SETTINGS.margin, yPos + 5);
  doc.line(
    PAGE_SETTINGS.margin + 80, 
    yPos, 
    pageWidth - PAGE_SETTINGS.margin, 
    yPos
  );
  return yPos + PAGE_SETTINGS.lineHeight * 1.5;
};