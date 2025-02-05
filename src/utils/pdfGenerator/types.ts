export interface PdfSection {
  title: string;
  content: string[];
}

export interface PdfStyles {
  margin: number;
  lineHeight: number;
  fontSize: {
    title: number;
    section: number;
    text: number;
  };
}