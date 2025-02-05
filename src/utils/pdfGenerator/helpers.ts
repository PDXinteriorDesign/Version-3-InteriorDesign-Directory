import { jsPDF } from 'jspdf';
import { PdfStyles } from './types';

export const addTitle = (
  doc: jsPDF,
  text: string,
  yPos: number,
  styles: PdfStyles
): number => {
  doc.setFontSize(styles.fontSize.title);
  doc.setFont('helvetica', 'bold');
  doc.text(text, styles.margin, yPos);
  return yPos + styles.lineHeight * 1.5;
};

export const addSection = (
  doc: jsPDF,
  text: string,
  yPos: number,
  styles: PdfStyles
): number => {
  doc.setFontSize(styles.fontSize.section);
  doc.setFont('helvetica', 'bold');
  doc.text(text, styles.margin, yPos);
  return yPos + styles.lineHeight;
};

export const addText = (
  doc: jsPDF,
  text: string,
  yPos: number,
  styles: PdfStyles
): number => {
  doc.setFontSize(styles.fontSize.text);
  doc.setFont('helvetica', 'normal');
  const pageWidth = doc.internal.pageSize.width;
  const lines = doc.splitTextToSize(text, pageWidth - styles.margin * 2);
  doc.text(lines, styles.margin, yPos);
  return yPos + styles.lineHeight * lines.length;
};