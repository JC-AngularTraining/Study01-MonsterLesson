export interface I_Appendix {
  id: number;
  reference: string;
  link: string;
  comments?: string;
  Type: 'Documentation' | 'Video';
  Topic: 'TypeScript' | 'Testing' | 'JavaScript' | 'Data' | 'Angular';
}
